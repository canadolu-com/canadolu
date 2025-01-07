# Canadolu.com

A website designed to help Turkish newcomers navigate life in Canada. Built with Next.js, Tailwind CSS, and Shadcn UI.

## Features

- 🗺️ Interactive Map: Find Turkish markets, restaurants, and community centers
- 📚 Resource Hub: Comprehensive guides for newcomers
- 📱 Responsive Design: Optimized for all devices
- 🎨 Modern UI: Built with Shadcn UI components

## Tech Stack

- Next.js (Pages Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Google Maps API

## Getting Started

### Prerequisites

- Node.js 16.x or later
- Yarn package manager
- Google Maps API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/canadolu.git
   cd canadolu
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your Google Maps API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
canadolu/
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn UI components
│   │   └── layout/      # Layout components
│   ├── pages/
│   │   ├── index.tsx    # Homepage
│   │   ├── map/         # Interactive map
│   │   └── guides/      # Resource guides
│   ├── styles/          # Global styles
│   └── lib/            # Utility functions
├── public/             # Static assets
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
