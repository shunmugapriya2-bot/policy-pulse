# Policy Pulse

An AI-powered privacy policy analyzer that helps users identify data misuse risks and understand how their personal information is being handled.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun (for package management)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd policy-pulse

# Install dependencies
bun install

# Start the development server
bun run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build for production
- `bun run build:dev` - Build with development mode
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build
- `bun run test` - Run tests
- `bun run test:watch` - Run tests in watch mode

## Technologies

This project is built with:

- **Vite** - Lightning-fast build tool
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Recharts** - Chart library for visualizations
- **React Router** - Client-side routing
- **Supabase** - Backend services
- **React Query** - Data fetching and caching

## Project Structure

- `src/pages/` - Page components
- `src/components/` - React components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `supabase/functions/` - Backend functions
