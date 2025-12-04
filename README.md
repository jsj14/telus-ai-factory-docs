# TELUS AI Factory Documentation

Comprehensive documentation for the TELUS AI Factory platform for ML Engineers, built with [Fumadocs](https://fumadocs.vercel.app/).

## Overview

This documentation site provides detailed guides for all compute resources and services available in the TELUS AI Factory Developer Hub, a unified interface for building, deploying, and managing AI/ML applications.

## 📚 Documentation Structure

### Compute Resources
- **Bare Metal** - Dedicated servers with full hardware access for demanding workloads
- **Virtual Machines** - Flexible, isolated environments with scalable resources
- **Kubernetes** - Container orchestration for efficient deployment and management

### Services
- **Notebooks** - Interactive Jupyter environments for data analysis and ML development
- **vLLM Inference Services** - High-throughput serving for large language models
- **Ollama Inference Services** - Local LLM deployment and management
- **NIM Services** - NVIDIA Inference Microservices for optimized AI inference
- **Marketplace Applications** - Pre-configured ML solutions and ready-to-deploy tools

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server will start at `http://localhost:3000` (or the next available port).

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
telus-ai-factory-docs/
├── app/                      # Next.js app directory
│   ├── docs/                 # Documentation pages
│   │   ├── [[...slug]]/      # Dynamic doc routes
│   │   └── layout.tsx        # Docs layout
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── source.ts             # Documentation source config
├── content/                  # MDX documentation content
│   └── docs/                 # Documentation files
│       ├── index.mdx         # Welcome page
│       ├── getting-started/  # Getting started guides
│       ├── compute/          # Compute resources docs
│       │   ├── bare-metal.mdx
│       │   ├── virtual-machines.mdx
│       │   └── kubernetes.mdx
│       └── services/         # Services documentation
│           ├── notebooks.mdx
│           ├── vllm.mdx
│           ├── ollama.mdx
│           ├── nim.mdx
│           └── marketplace.mdx
├── public/                   # Static assets
└── .source/                  # Auto-generated source files

## 🎨 Features

### Comprehensive Documentation
Each resource/service includes:
- Overview and key features
- Detailed use cases
- Step-by-step setup guides
- Configuration options
- Code examples and API usage
- Best practices and optimization tips
- Troubleshooting guides
- Integration patterns

### Built with Modern Tech Stack
- **Next.js 16** - React framework with App Router
- **Fumadocs** - Documentation framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **MDX** - Markdown with JSX support

### Features
- 🔍 Full-text search
- 📱 Responsive design
- 🌙 Dark mode support
- 📖 Table of contents
- 🔗 Automatic link navigation
- ⚡ Fast page loads with Turbopack

## 📝 Content Guidelines

### Adding New Documentation

1. Create a new `.mdx` file in the appropriate directory under `content/docs/`
2. Add frontmatter with title and description:

```mdx
---
title: Your Page Title
description: Brief description of the page
---

# Your Content Here
```

3. Update the corresponding `meta.json` file to include your new page
4. The page will automatically appear in the navigation

### MDX Features

You can use all Markdown features plus React components:

```mdx
## Code Blocks

\```python
def hello_world():
    print("Hello from TELUS AI Factory!")
\```

## Callouts

> **Note**: This is an important note

## Links

[Link to another page](/docs/compute/bare-metal)
```

## 🛠️ Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with PostCSS. Configuration is in `tailwind.config.js` and `postcss.config.mjs`.

### Next.js

Next.js configuration is in `next.config.mjs` with Fumadocs MDX plugin enabled.

### Source Configuration

Documentation source configuration is in `source.config.ts` which defines where MDX files are located.

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
# The dev server will automatically use the next available port
npm run dev
```

### Build Errors

If you encounter TypeScript errors during build:
```bash
# Clean the build directory
rm -rf .next
npm run build
```

### MDX Generation Issues

If `.source` files are not generated:
```bash
# The files are auto-generated on first build/dev run
npm run dev
```

## 📖 Documentation Resources

- [Fumadocs Documentation](https://fumadocs.vercel.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 Contributing

To contribute to the documentation:

1. Create a new branch for your changes
2. Add or update MDX files in `content/docs/`
3. Test your changes locally with `npm run dev`
4. Submit a pull request

## 📄 License

Copyright © TELUS. All rights reserved.

## 🙏 Acknowledgments

Built with:
- [Fumadocs](https://fumadocs.vercel.app/) by Fuma Nama
- [Next.js](https://nextjs.org/) by Vercel
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs

---

**TELUS AI Factory** - Empowering ML Engineers with unified infrastructure and services
