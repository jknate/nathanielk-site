# Nathaniel K - Personal Website

A modern personal website built with Next.js 15, React 19, and TypeScript. This site features a clean, responsive design with support for blog posts, projects, and dynamic content rendering.

## Features

- Built with Next.js 15 App Router
- Styled with Tailwind CSS 4
- Smooth animations with Framer Motion
- Markdown content support with syntax highlighting
- Data visualization with Recharts
- SEO optimized with Open Graph image generation
- Fully responsive design
- TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 15.2
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **State Management**: Jotai
- **Content Processing**: Unified, Remark, Rehype
- **Code Highlighting**: Rehype Pretty Code
- **Math Rendering**: KaTeX

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jknate/nathanielk-site.git
cd nathanielk-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `/app` - Next.js app directory (pages and routes)
- `/components` - Reusable React components
- `/lib` - Utility functions and helpers
- `/public` - Static assets
- `/types` - TypeScript type definitions
- `/icons` - SVG icons

## Code Quality

This project uses:
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- Lint-staged for pre-commit checks
