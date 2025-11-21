# Abdikadir Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio includes:

- **Portfolio Website**: Interactive, animated single-page portfolio
- **Resume**: Professional resume page with PDF download
- **CV**: Detailed curriculum vitae with PDF download

## Features

- 🎨 Modern, responsive design
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-friendly layout
- 📄 PDF download functionality for Resume and CV
- 🚀 Built with Next.js 14 (App Router)
- 💅 Styled with Tailwind CSS
- 📧 Contact section with email integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── resume/
│   │   └── page.tsx      # Resume page
│   ├── cv/
│   │   └── page.tsx      # CV page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience section
│   ├── Education.tsx     # Education section
│   ├── Leadership.tsx    # Leadership section
│   ├── Contact.tsx       # Contact section
│   ├── ResumeView.tsx    # Resume component
│   ├── CVView.tsx        # CV component
│   └── Footer.tsx        # Footer component
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **html2canvas & jsPDF**: PDF generation

## Customization

All personal information is stored in the component files. Update the following files to customize:

- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Experience.tsx` - Work experience
- `components/Education.tsx` - Education details
- `components/Skills.tsx` - Skills and languages
- `components/ResumeView.tsx` - Resume content
- `components/CVView.tsx` - CV content

## License

This project is private and personal.

