# Waitlist Wizard - Comprehensive Documentation

Waitlist Wizard is a full-stack web application built with modern technologies to manage waitlists for tutoring and ISHT Group services. It provides an intuitive interface for users to join waitlists and for administrators to manage them efficiently.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [Component Documentation](#component-documentation)
5. [API Documentation](#api-documentation)
6. [State Management](#state-management)
7. [Deployment](#deployment)
8. [Testing](#testing)
9. [Contributing Guidelines](#contributing-guidelines)
10. [License](#license)

## Features

### Core Features
- Section switching between Tutoring and ISHT Group
- Responsive layout with custom styling
- Waitlist form submission and management
- Real-time updates using React Query

### Technical Features
- Context API for global state management
- Wouter for client-side routing
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Vite for fast development builds

## Project Structure

```
WaitlistWizard/
├── client/                  # Frontend application
│   ├── public/              # Static assets
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── context/         # Context providers
│       ├── hooks/           # Custom React hooks
│       ├── lib/            # Utility functions
│       ├── pages/           # Page components
│       ├── App.tsx         # Main application component
│       └── main.tsx        # Entry point
├── server/                  # Backend server
│   ├── routes/              # API routes
│   ├── storage/             # Data storage
│   └── index.ts             # Server entry point
├── shared/                  # Shared code between client and server
│   └── schema.ts            # Shared TypeScript types
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/WaitlistWizard.git
   cd WaitlistWizard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file in the root directory with:
   ```
   PORT=5003
   NODE_ENV=development
   ```

### Running the Application
- Start development server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Start production server:
  ```bash
  npm start
  ```

## Component Documentation

### Core Components
- **Header**: Navigation and section switching
- **Footer**: Contact information and links
- **WaitlistForm**: Form for joining waitlists
- **Card**: Reusable card component for content display

### Example Usage
```tsx
import { Card, CardHeader, CardContent } from './components/ui/card';
import WaitlistForm from './components/WaitlistForm';

function HomePage() {
  return (
    <Card>
      <CardHeader>
        <h2>Join Our Waitlist</h2>
      </CardHeader>
      <CardContent>
        <WaitlistForm />
      </CardContent>
    </Card>
  );
}
```

## API Documentation

### Endpoints
- `POST /api/waitlist` - Submit waitlist form
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "section": "tutoring"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Added to waitlist"
    }
    ```

## State Management

### SectionContext
Manages the current section (Tutoring or ISHT Group)

#### Usage
```tsx
import { useSection } from './context/SectionContext';

function SectionSwitcher() {
  const { section, setSection } = useSection();
  
  return (
    <button onClick={() => setSection('ishtgroup')}>
      Switch to ISHT Group
    </button>
  );
}
```

## Deployment

### Vercel Deployment
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### Docker Deployment
1. Build Docker image:
   ```bash
   docker build -t waitlistwizard .
   ```
2. Run container:
   ```bash
   docker run -p 5003:5003 waitlistwizard
   ```

## Testing

### Running Tests
```bash
npm test
```

### Test Coverage
```bash
npm run test:coverage
```

## Contributing Guidelines

### Code Style
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages

### Pull Request Process
1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
2. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
3. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
4. Open a pull request

## License
MIT License

Copyright (c) 2025 mohamedzwanski

Permission is hereby granted...
