import React, { useEffect, useRef } from 'react';

type SceneMode = 'hero' | 'guide';

type KartikWebGLAvatarProps = {
  mode?: SceneMode;
  walking?: boolean;
  sipping?: boolean;
  className?: string;
};

type Mesh = {
  position: WebGLBuffer;
  normal: WebGLBuffer;
  count: number;
};

type Mat4 = Float32Array;

type Vec3 = [number, number, number];

const identity = (): Mat4 =>
  new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]);

const multiply = (a: Mat4, b: Mat4): Mat4 => {
  const out = new Float32Array(16);
  for (let column = 0; column < 4; column += 1) {
    for (let row = 0; row < 4; row += 1) {
      out[column * 4 + row] =
        a[0 * 4 + row] * b[column * 4 + 0] +
        a[1 * 4 + row] * b[column * 4 + 1] +
        a[2 * 4 + row] * b[column * 4 + 2] +
        a[3 * 4 + row] * b[column * 4 + 3];
    }
  }
  return out;
};

const translation = (x: number, y: number, z: number): Mat4 => {
  const out = identity();
  out[12] = x;
  out[13] = y;
  out[14] = z;
  return out;
};

const scale = (x: number, y: number, z: number): Mat4 => {
  const out = identity();
  out[0] = x;
  out[5] = y;
  out[10] = z;
  return out;
};

const rotationX = (radians: number): Mat4 => {
  const c = Math.cos(radians);
  const s = Math.sin(radians);
  return new Float32Array([
    1, 0, 0, 0,
    0, c, s, 0,
    0, -s, c, 0,
    0, 0, 0, 1
  ]);
};

const rotationY = (radians: number): Mat4 => {
  const c = Math.cos(radians);
  const s = Math.sin(radians);
  return new Float32Array([
    c, 0, -s, 0,
    0, 1, 0, 0,
    s, 0, c, 0,
    0, 0, 0, 1
  ]);
};

const rotationZ = (radians: number): Mat4 => {
  const c = Math.cos(radians);
  const s = Math.sin(radians);
  return new Float32Array([
    c, s, 0, 0,
    -s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]);
};

const perspective = (fov: number, aspect: number, near: number, far: number): Mat4 => {
  const f = 1 / Math.tan(fov / 2);
  const nf = 1 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0
  ]);
};

const normalize = ([x, y, z]: Vec3): Vec3 => {
  const length = Math.hypot(x, y, z) || 1;
  return [x / length, y / length, z / length];
};

const subtract = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];

const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0]
];

const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

const lookAt = (eye: Vec3, center: Vec3, up: Vec3): Mat4 => {
  const z = normalize(subtract(eye, center));
  const x = normalize(cross(up, z));
  const y = cross(z, x);

  return new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1
  ]);
};

const compose = (...matrices: Mat4[]) => matrices.reduce((acc, matrix) => multiply(acc, matrix), identity());

const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Unable to create WebGL shader.');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info || 'Unable to compile WebGL shader.');
  }
  return shader;
};

const createProgram = (gl: WebGLRenderingContext) => {
  const vertex = createShader(
    gl,
    gl.VERTEX_SHADER,
    `
      attribute vec3 aPosition;
      attribute vec3 aNormal;
      uniform mat4 uModel;
      uniform mat4 uViewProjection;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        vec4 world = uModel * vec4(aPosition, 1.0);
        vWorldPosition = world.xyz;
        vNormal = normalize(mat3(uModel) * aNormal);
        gl_Position = uViewProjection * world;
      }
    `
  );

  const fragment = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    `
      precision mediump float;
      uniform vec4 uColor;
      uniform vec3 uLightDirection;
      uniform float uEmissive;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        vec3 normal = normalize(vNormal);
        float diffuse = max(dot(normal, normalize(-uLightDirection)), 0.0);
        float rim = pow(1.0 - max(normal.z, 0.0), 2.0) * 0.22;
        float light = 0.34 + diffuse * 0.62 + rim;
        vec3 shaded = uColor.rgb * mix(light, 1.25, uEmissive);
        gl_FragColor = vec4(shaded, uColor.a);
      }
    `
  );

  const program = gl.createProgram();
  if (!program) throw new Error('Unable to create WebGL program.');
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || 'Unable to link WebGL program.');
  }

  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  return program;
};

const pushFace = (
  positions: number[],
  normals: number[],
  corners: Vec3[],
  normal: Vec3
) => {
  const indices = [0, 1, 2, 0, 2, 3];
  indices.forEach((index) => {
    positions.push(...corners[index]);
    normals.push(...normal);
  });
};

const boxData = (width: number, height: number, depth: number) => {
  const x = width / 2;
  const y = height / 2;
  const z = depth / 2;
  const positions: number[] = [];
  const normals: number[] = [];

  pushFace(positions, normals, [[-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z]], [0, 0, 1]);
  pushFace(positions, normals, [[x, -y, -z], [-x, -y, -z], [-x, y, -z], [x, y, -z]], [0, 0, -1]);
  pushFace(positions, normals, [[-x, y, z], [x, y, z], [x, y, -z], [-x, y, -z]], [0, 1, 0]);
  pushFace(positions, normals, [[-x, -y, -z], [x, -y, -z], [x, -y, z], [-x, -y, z]], [0, -1, 0]);
  pushFace(positions, normals, [[x, -y, z], [x, -y, -z], [x, y, -z], [x, y, z]], [1, 0, 0]);
  pushFace(positions, normals, [[-x, -y, -z], [-x, -y, z], [-x, y, z], [-x, y, -z]], [-1, 0, 0]);

  return { positions, normals };
};

const sphereData = (radius: number, latitudeBands = 14, longitudeBands = 18) => {
  const positions: number[] = [];
  const normals: number[] = [];

  for (let lat = 0; lat < latitudeBands; lat += 1) {
    const theta0 = (lat / latitudeBands) * Math.PI;
    const theta1 = ((lat + 1) / latitudeBands) * Math.PI;

    for (let lon = 0; lon < longitudeBands; lon += 1) {
      const phi0 = (lon / longitudeBands) * Math.PI * 2;
      const phi1 = ((lon + 1) / longitudeBands) * Math.PI * 2;

      const point = (theta: number, phi: number): Vec3 => [
        Math.sin(theta) * Math.cos(phi),
        Math.cos(theta),
        Math.sin(theta) * Math.sin(phi)
      ];

      const p00 = point(theta0, phi0);
      const p01 = point(theta0, phi1);
      const p10 = point(theta1, phi0);
      const p11 = point(theta1, phi1);
      const triangle = [p00, p10, p11, p00, p11, p01];

      triangle.forEach((normal) => {
        normals.push(...normal);
        positions.push(normal[0] * radius, normal[1] * radius, normal[2] * radius);
      });
    }
  }

  return { positions, normals };
};

const cylinderData = (radius: number, height: number, segments = 16) => {
  const positions: number[] = [];
  const normals: number[] = [];
  const half = height / 2;

  for (let i = 0; i < segments; i += 1) {
    const a0 = (i / segments) * Math.PI * 2;
    const a1 = ((i + 1) / segments) * Math.PI * 2;
    const c0 = Math.cos(a0);
    const s0 = Math.sin(a0);
    const c1 = Math.cos(a1);
    const s1 = Math.sin(a1);

    const side: Array<{ p: Vec3; n: Vec3 }> = [
      { p: [c0 * radius, -half, s0 * radius], n: [c0, 0, s0] },
      { p: [c1 * radius, -half, s1 * radius], n: [c1, 0, s1] },
      { p: [c1 * radius, half, s1 * radius], n: [c1, 0, s1] },
      { p: [c0 * radius, -half, s0 * radius], n: [c0, 0, s0] },
      { p: [c1 * radius, half, s1 * radius], n: [c1, 0, s1] },
      { p: [c0 * radius, half, s0 * radius], n: [c0, 0, s0] }
    ];

    side.forEach(({ p, n }) => {
      positions.push(...p);
      normals.push(...n);
    });

    const top = [[0, half, 0], [c1 * radius, half, s1 * radius], [c0 * radius, half, s0 * radius]] as Vec3[];
    const bottom = [[0, -half, 0], [c0 * radius, -half, s0 * radius], [c1 * radius, -half, s1 * radius]] as Vec3[];
    top.forEach((p) => { positions.push(...p); normals.push(0, 1, 0); });
    bottom.forEach((p) => { positions.push(...p); normals.push(0, -1, 0); });
  }

  return { positions, normals };
};

const uploadMesh = (
  gl: WebGLRenderingContext,
  data: { positions: number[]; normals: number[] }
): Mesh => {
  const position = gl.createBuffer();
  const normal = gl.createBuffer();
  if (!position || !normal) throw new Error('Unable to create WebGL buffers.');

  gl.bindBuffer(gl.ARRAY_BUFFER, position);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.positions), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, normal);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.normals), gl.STATIC_DRAW);

  return { position, normal, count: data.positions.length / 3 };
};

const hex = (value: string, alpha = 1): [number, number, number, number] => {
  const normalized = value.replace('#', '');
  const number = parseInt(normalized, 16);
  return [
    ((number >> 16) & 255) / 255,
    ((number >> 8) & 255) / 255,
    (number & 255) / 255,
    alpha
  ];
};

const limbTransform = (
  start: Vec3,
  length: number,
  angle: number,
  zRotationOffset = 0
): Mat4 => {
  const dx = Math.sin(angle) * length;
  const dy = -Math.cos(angle) * length;
  const center: Vec3 = [start[0] + dx / 2, start[1] + dy / 2, start[2]];
  return compose(translation(...center), rotationZ(angle + zRotationOffset));
};

const smoothPulse = (value: number) => {
  const eased = value * value * (3 - 2 * value);
  return eased;
};

const KartikWebGLAvatar: React.FC<KartikWebGLAvatarProps> = ({
  mode = 'hero',
  walking = false,
  sipping = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;

    const program = createProgram(gl);
    gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, 'aPosition');
    const normalLocation = gl.getAttribLocation(program, 'aNormal');
    const modelLocation = gl.getUniformLocation(program, 'uModel');
    const viewProjectionLocation = gl.getUniformLocation(program, 'uViewProjection');
    const colorLocation = gl.getUniformLocation(program, 'uColor');
    const lightLocation = gl.getUniformLocation(program, 'uLightDirection');
    const emissiveLocation = gl.getUniformLocation(program, 'uEmissive');

    const meshes = {
      head: uploadMesh(gl, sphereData(0.36, 16, 20)),
      eye: uploadMesh(gl, sphereData(0.038, 8, 10)),
      hair: uploadMesh(gl, sphereData(0.16, 9, 12)),
      chin: uploadMesh(gl, sphereData(0.22, 10, 12)),
      torso: uploadMesh(gl, boxData(0.9, 1.0, 0.44)),
      hoodiePanel: uploadMesh(gl, boxData(0.5, 0.7, 0.05)),
      arm: uploadMesh(gl, cylinderData(0.105, 0.58, 14)),
      forearm: uploadMesh(gl, cylinderData(0.095, 0.5, 14)),
      leg: uploadMesh(gl, cylinderData(0.14, 0.78, 14)),
      shoe: uploadMesh(gl, boxData(0.28, 0.16, 0.48)),
      mug: uploadMesh(gl, cylinderData(0.13, 0.24, 16)),
      desk: uploadMesh(gl, boxData(3.8, 0.16, 1.45)),
      deskLeg: uploadMesh(gl, boxData(0.18, 1.5, 0.18)),
      laptopScreen: uploadMesh(gl, boxData(1.3, 0.82, 0.07)),
      laptopBase: uploadMesh(gl, boxData(1.45, 0.08, 0.92)),
      node: uploadMesh(gl, boxData(0.38, 0.22, 0.12)),
      beam: uploadMesh(gl, boxData(0.72, 0.025, 0.025)),
      floor: uploadMesh(gl, boxData(7.8, 0.08, 5.6))
    };

    const colors = {
      skin: hex('#9a5e43'),
      skinLight: hex('#b87958'),
      hair: hex('#12141b'),
      beard: hex('#221b1a'),
      hoodie: hex('#111827'),
      hoodiePanel: hex('#1f2937'),
      pants: hex('#172033'),
      shoes: hex('#090c12'),
      mug: hex('#111827'),
      desk: hex('#4b2f28'),
      metal: hex('#475569'),
      screen: hex('#07111e'),
      cyan: hex('#22d3ee', 0.92),
      violet: hex('#8b5cf6', 0.85),
      emerald: hex('#34d399', 0.9),
      floor: hex('#07101c', 0.96)
    };

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.uniform3f(lightLocation, -0.4, -0.8, -0.65);

    const draw = (mesh: Mesh, model: Mat4, color: [number, number, number, number], emissive = 0) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh.position);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normal);
      gl.enableVertexAttribArray(normalLocation);
      gl.vertexAttribPointer(normalLocation, 3, gl.FLOAT, false, 0, 0);

      gl.uniformMatrix4fv(modelLocation, false, model);
      gl.uniform4fv(colorLocation, color);
      gl.uniform1f(emissiveLocation, emissive);
      gl.drawArrays(gl.TRIANGLES, 0, mesh.count);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, mode === 'hero' ? 1.7 : 1.4);
      const width = Math.max(1, Math.floor(rect.width * ratio));
      const height = Math.max(1, Math.floor(rect.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };

    const pointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const pointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    canvas.addEventListener('pointermove', pointerMove);
    canvas.addEventListener('pointerleave', pointerLeave);

    const renderAvatar = (time: number) => {
      const walk = walking ? Math.sin(time * 0.012) : 0;
      const bob = walking ? Math.abs(Math.sin(time * 0.012)) * 0.035 : Math.sin(time * 0.0017) * 0.022;
      const cycle = (time % 5200) / 5200;
      const sipRaw = cycle > 0.18 && cycle < 0.6 ? Math.sin(((cycle - 0.18) / 0.42) * Math.PI) : 0;
      const sip = sipping ? smoothPulse(Math.max(0, sipRaw)) : 0;
      const rootX = mode === 'hero' ? -0.55 : 0;
      const rootY = -0.05 + bob;
      const rootZ = mode === 'hero' ? 0.12 : 0;
      const headTilt = -sip * 0.08 + Math.sin(time * 0.0011) * 0.018;

      draw(meshes.torso, compose(translation(rootX, rootY + 0.44, rootZ), rotationY(-0.04)), colors.hoodie);
      draw(meshes.hoodiePanel, translation(rootX, rootY + 0.45, rootZ + 0.245), colors.hoodiePanel);

      const headModel = compose(
        translation(rootX, rootY + 1.36, rootZ + 0.02),
        rotationZ(headTilt),
        rotationY(Math.sin(time * 0.0008) * 0.035)
      );
      draw(meshes.head, headModel, colors.skinLight);

      const hairPositions: Array<[number, number, number, number]> = [
        [-0.22, 1.67, -0.01, -0.28],
        [-0.08, 1.73, 0.02, -0.12],
        [0.08, 1.74, 0.01, 0.06],
        [0.21, 1.67, -0.02, 0.22]
      ];
      hairPositions.forEach(([x, y, z, r]) => {
        draw(meshes.hair, compose(translation(rootX + x, rootY + y, rootZ + z), rotationZ(r)), colors.hair);
      });

      draw(meshes.chin, compose(translation(rootX, rootY + 1.19, rootZ + 0.19), scale(1.25, 0.62, 0.66)), colors.beard);
      draw(meshes.eye, translation(rootX - 0.13, rootY + 1.42, rootZ + 0.33), hex('#080b10'));
      draw(meshes.eye, translation(rootX + 0.13, rootY + 1.42, rootZ + 0.33), hex('#080b10'));

      const leftShoulder: Vec3 = [rootX - 0.48, rootY + 0.82, rootZ];
      const leftAngle = -0.18 + walk * 0.18;
      draw(meshes.arm, limbTransform(leftShoulder, 0.58, leftAngle), colors.hoodie);
      const leftElbow: Vec3 = [
        leftShoulder[0] + Math.sin(leftAngle) * 0.58,
        leftShoulder[1] - Math.cos(leftAngle) * 0.58,
        leftShoulder[2]
      ];
      draw(meshes.forearm, limbTransform(leftElbow, 0.5, leftAngle + 0.08), colors.skin);

      const rightShoulder: Vec3 = [rootX + 0.48, rootY + 0.82, rootZ];
      const rightUpperAngle = 0.12 - sip * 0.68 - walk * 0.14;
      draw(meshes.arm, limbTransform(rightShoulder, 0.58, rightUpperAngle), colors.hoodie);
      const rightElbow: Vec3 = [
        rightShoulder[0] + Math.sin(rightUpperAngle) * 0.58,
        rightShoulder[1] - Math.cos(rightUpperAngle) * 0.58,
        rightShoulder[2]
      ];
      const forearmAngle = 0.18 - sip * 1.28;
      draw(meshes.forearm, limbTransform(rightElbow, 0.5, forearmAngle), colors.skin);
      const hand: Vec3 = [
        rightElbow[0] + Math.sin(forearmAngle) * 0.5,
        rightElbow[1] - Math.cos(forearmAngle) * 0.5,
        rightElbow[2] + 0.04
      ];
      draw(meshes.mug, compose(translation(hand[0] - sip * 0.06, hand[1] + 0.09 + sip * 0.04, hand[2] + 0.08), rotationZ(-0.12 + sip * 0.18)), colors.mug, 0.05);

      const leftLegAngle = walking ? walk * 0.17 : 0.02;
      const rightLegAngle = walking ? -walk * 0.17 : -0.02;
      const hipLeft: Vec3 = [rootX - 0.22, rootY - 0.04, rootZ];
      const hipRight: Vec3 = [rootX + 0.22, rootY - 0.04, rootZ];
      draw(meshes.leg, limbTransform(hipLeft, 0.78, leftLegAngle), colors.pants);
      draw(meshes.leg, limbTransform(hipRight, 0.78, rightLegAngle), colors.pants);
      draw(meshes.shoe, compose(translation(rootX - 0.22 + Math.sin(leftLegAngle) * 0.78, rootY - 0.89, rootZ + 0.13), rotationY(-0.08)), colors.shoes);
      draw(meshes.shoe, compose(translation(rootX + 0.22 + Math.sin(rightLegAngle) * 0.78, rootY - 0.89, rootZ + 0.13), rotationY(0.08)), colors.shoes);
    };

    const renderHeroEnvironment = (time: number) => {
      draw(meshes.floor, translation(0, -1.35, 0.35), colors.floor);
      draw(meshes.desk, translation(0.75, -0.86, 0.62), colors.desk);
      draw(meshes.deskLeg, translation(-0.75, -1.62, 0.62), colors.desk);
      draw(meshes.deskLeg, translation(2.25, -1.62, 0.62), colors.desk);
      draw(meshes.laptopBase, compose(translation(0.92, -0.68, 0.27), rotationY(-0.08)), colors.metal);
      draw(meshes.laptopScreen, compose(translation(0.94, -0.18, 0.02), rotationX(-0.12), rotationY(-0.08)), colors.screen, 0.12);

      const nodeY = 1.64 + Math.sin(time * 0.0014) * 0.025;
      const nodeXs = [-1.8, -1.05, -0.3, 0.45];
      const nodeColors = [colors.cyan, colors.violet, colors.cyan, colors.emerald];
      nodeXs.forEach((x, index) => {
        draw(meshes.node, translation(x, nodeY + (index % 2) * 0.18, -0.72), nodeColors[index], 0.78);
        if (index < nodeXs.length - 1) {
          draw(meshes.beam, translation(x + 0.37, nodeY + 0.09, -0.72), colors.cyan, 0.82);
        }
      });
    };

    const render = (time: number) => {
      resize();
      currentPointerX += (pointerX - currentPointerX) * 0.055;
      currentPointerY += (pointerY - currentPointerY) * 0.055;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.useProgram(program);

      const aspect = canvas.width / Math.max(canvas.height, 1);
      const projection = perspective(mode === 'hero' ? 0.69 : 0.62, aspect, 0.1, 40);
      const cameraBase: Vec3 = mode === 'hero' ? [0.4, 0.42, 5.5] : [0, 0.42, 4.9];
      const eye: Vec3 = [
        cameraBase[0] + currentPointerX * (mode === 'hero' ? 0.32 : 0.15),
        cameraBase[1] - currentPointerY * (mode === 'hero' ? 0.22 : 0.12),
        cameraBase[2]
      ];
      const target: Vec3 = mode === 'hero' ? [0.05, 0.1, 0] : [0, 0.22, 0];
      const view = lookAt(eye, target, [0, 1, 0]);
      gl.uniformMatrix4fv(viewProjectionLocation, false, multiply(projection, view));

      if (mode === 'hero') renderHeroEnvironment(time);
      renderAvatar(time);
      frame = window.requestAnimationFrame(render);
    };

    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener('pointermove', pointerMove);
      canvas.removeEventListener('pointerleave', pointerLeave);
      Object.values(meshes).forEach((mesh) => {
        gl.deleteBuffer(mesh.position);
        gl.deleteBuffer(mesh.normal);
      });
      gl.deleteProgram(program);
    };
  }, [mode, sipping, walking]);

  return <canvas ref={canvasRef} className={'block h-full w-full ' + className} aria-label="Animated 3D Kartik guide" />;
};

export default KartikWebGLAvatar;
