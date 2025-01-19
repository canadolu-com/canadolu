# Contributing to Canadolu

Thank you for your interest in contributing to Canadolu! This document provides guidelines and instructions for contributing to the project.

## 🌟 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in your interactions with other contributors.

## 🚀 Getting Started

1. **Fork the Repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally:
     ```bash
     git clone https://github.com/YOUR_USERNAME/canadolu.git
     cd canadolu
     ```

2. **Set Up Development Environment**
   - Install Node.js 16.x or later
   - Install Yarn package manager
   - Install dependencies:
     ```bash
     yarn install
     ```
   - Copy environment variables:
     ```bash
     cp .env.example .env.local
     ```
   - Add your Google Maps API key to `.env.local`

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## 💻 Development Guidelines

### Tech Stack
- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Maps**: Google Maps API
- **Content**: MDX

### TypeScript Guidelines
- Use TypeScript for all new files
- Define types in appropriate files under `src/lib/types/`
- Use interfaces for object shapes and types for unions/primitives
- Avoid using `any` - use proper type definitions

### Component Guidelines
- Place new components in appropriate directories:
  - UI components: `src/components/ui/`
  - Layout components: `src/components/layout/`
  - MDX components: `src/components/mdx/`
- Follow the existing component structure
- Use Shadcn UI components when possible
- Implement responsive design using Tailwind CSS

### Styling Guidelines
- Use Tailwind CSS for styling
- Follow the project's color scheme and design system
- Ensure responsive design works on all screen sizes
- Use semantic HTML elements

### Content Guidelines
- Place MDX content in `src/content/`
- Follow the existing MDX format
- Include proper frontmatter
- Optimize images before adding them

## 📝 Pull Request Process

1. **Before Submitting**
   - Ensure your code follows our guidelines
   - Update documentation if needed
   - Add tests if applicable
   - Run `yarn lint` and `yarn type-check`
   - Ensure all tests pass

2. **Submitting Changes**
   - Push to your fork
   - Submit a Pull Request (PR) to the `main` branch
   - Fill out the PR template completely
   - Link any related issues

3. **PR Review Process**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, maintainers will merge your PR

## 🐛 Bug Reports

Submit bug reports through GitHub Issues:
- Use the bug report template
- Include steps to reproduce
- Include expected vs actual behavior
- Include screenshots if relevant
- Include browser/OS information

## ✨ Feature Requests

Submit feature requests through GitHub Issues:
- Use the feature request template
- Clearly describe the feature
- Explain the use case
- Provide examples if possible

## 📚 Documentation

- Update README.md if you add new features
- Document new components and utilities
- Add JSDoc comments to functions and components
- Update type definitions as needed

## 🔄 Version Control

- Write clear, concise commit messages
- Use conventional commits format:
  ```
  feat: add new feature
  fix: resolve bug
  docs: update documentation
  style: format code
  refactor: restructure code
  test: add tests
  chore: update dependencies
  ```

## 🤝 Getting Help

- Check existing issues and discussions
- Join our community discussions
- Ask questions in PR comments
- Reach out to maintainers

## 📜 License

By contributing to Canadolu, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Canadolu! Your efforts help make the Turkish-Canadian community stronger. 🇹🇷🇨🇦
