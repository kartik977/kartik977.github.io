# Kartik Kataria - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth page transitions and hover effects
- **SEO Friendly**: Optimized for search engines
- **Fast Loading**: Optimized performance with modern React practices

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Home.tsx        # Home page component
│   ├── About.tsx       # About page component
│   ├── Experience.tsx  # Work experience component
│   ├── Projects.tsx    # Projects showcase component
│   ├── Skills.tsx      # Skills and technologies component
│   └── Contact.tsx     # Contact form component
├── App.tsx             # Main App component
├── App.css             # Global styles
└── index.css           # Tailwind CSS imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Home.tsx` - Hero section and personal details
- `src/components/About.tsx` - Education and personal information
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project showcase
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Contact.tsx` - Contact information

### Styling
- Main styles are in `src/App.css`
- Tailwind CSS classes are used throughout components
- Custom CSS variables can be added to `src/index.css`

### Colors and Theme
The current theme uses a purple-blue gradient. To change colors:
1. Update the gradient classes in components
2. Modify the `text-gradient` class in `src/App.css`
3. Update button and card hover states

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive grid layouts
- Touch-friendly interactions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Kartik Kataria
- Email: katariakartik08@gmail.com
- Phone: 607-262-4092
- Location: Dallas, TX

---

Made with ❤️ by Kartik Kataria
