# Vivek's Digital Canvas

A modern, responsive portfolio and resume website showcasing professional work, skills, and experience. Built with cutting-edge web technologies to deliver a smooth, engaging user experience.

## Overview

**Vivek's Digital Canvas** is a full-stack portfolio application designed to present professional credentials, design work, technical expertise, and project experience in an elegant and interactive manner. The site features smooth animations, responsive design, and an intuitive navigation system.

## 🚀 Features

- **Responsive Design** - Mobile-first approach that works seamlessly across all devices
- **Smooth Animations** - Minimal, elegant background animations with gradient shifts and floating elements
- **Modern UI** - Built with shadcn-ui components for a professional appearance
- **Dark Theme** - Eye-friendly dark mode design optimized for readability
- **Sections Included**:
	- Hero section with introduction
	- About me
	- Skills & expertise
	- Professional experience
	- Featured projects
	- Design portfolio
	- Contact information
	- Resume download

## 🛠 Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Routing**: React Router
- **State Management**: TanStack React Query
- **Notifications**: Sonner & React Hot Toast
- **Testing**: Vitest

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Setup

```sh
# Clone the repository
git clone https://github.com/VivekNonia/vivek-s-digital-canvas.git

# Navigate to the project directory
cd vivek-s-digital-canvas

# Install dependencies
npm install
# or if using bun
bun install

# Start the development server
npm run dev
# or with bun
bun run dev
```

The application will be available at `http://localhost:5173`

## 🎯 Available Scripts

```sh
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn-ui components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills showcase
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Featured projects
│   ├── Contact.tsx      # Contact section
│   └── ...
├── pages/
│   ├── Index.tsx        # Home page
│   ├── Designs.tsx      # Design portfolio
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── styles/              # Global styles and animations
└── main.tsx             # Application entry point
```

## 🎨 Customization

### Update Personal Information

Edit the component files to add your:
- Name and headline
- Bio and about text
- Skills and expertise
- Experience entries
- Project details
- Contact information

### Styling

- **Colors**: Customize Tailwind colors in `tailwind.config.ts`
- **Fonts**: Modify font imports in `src/index.css`
- **Animations**: Adjust animation timings in `src/index.css`

## 📧 Contact

For inquiries or collaboration opportunities, please reach out through the contact section on the website or visit [GitHub Profile](https://github.com/VivekNonia).

---

**Last Updated**: January 2026
