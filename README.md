# 🇹🇷🇨🇦 Canadolu - Turkish Canadian Community Hub

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A comprehensive platform designed to help Turkish newcomers navigate life in Canada. Built with modern web technologies and a focus on user experience.

## ✨ Features

- 🗺️ **Interactive Map**
  - Find Turkish businesses and community centers
  - Filter by category and location
  - Detailed information for each location
  
- 📚 **Resource Hub**
  - Comprehensive guides for newcomers
  - MDX-powered content
  - Easy-to-navigate categories
  
- 📱 **Modern Design**
  - Fully responsive layout
  - Clean and intuitive interface
  - Built with Shadcn UI components
  
- 🔍 **Search & Discovery**
  - Find relevant resources quickly
  - Location-based filtering
  - Category-based organization

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Maps**: [Google Maps API](https://developers.google.com/maps)
- **Content**: [MDX](https://mdxjs.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- Yarn package manager
- Google Maps API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/canadolu-com/canadolu.git
   cd canadolu
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Google Maps API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
canadolu/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── layout/         # Layout components
│   │   └── mdx/            # MDX-specific components
│   ├── pages/              # Next.js pages
│   │   ├── index.tsx       # Homepage
│   │   ├── map/           # Interactive map
│   │   └── guides/        # Resource guides
│   ├── lib/               # Utility functions and types
│   │   ├── data/         # Static data and content
│   │   └── types/        # TypeScript type definitions
│   ├── styles/           # Global styles
│   └── content/          # MDX content files
├── public/              # Static assets
└── package.json
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Bug Reports**: Open an issue describing the bug and how to reproduce it
2. **Feature Requests**: Open an issue describing the new feature and its use case
3. **Code Contributions**: 
   - Fork the repository
   - Create a new branch: `git checkout -b feature/your-feature`
   - Make your changes
   - Follow the [TypeScript best practices](./docs/typescript-guide.md)
   - Submit a pull request

Please read our [Contributing Guidelines](./CONTRIBUTING.md) for more details.

## 📝 Type System

The project uses a well-organized TypeScript type system:

- `lib/types/common.ts`: Shared types and interfaces
- `lib/types/location.ts`: Location and map-related types
- `lib/types/guide.ts`: Guide and content types
- `lib/types/mdx.ts`: MDX-specific types
- `lib/types/ui.ts`: UI component types

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Shadcn UI](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS

## 📧 Contact

For questions or support, please open an issue or reach out to the maintainers:

- Website: [canadolu.com](https://canadolu.com)
- GitHub: [@canadolu-com](https://github.com/canadolu-com)
