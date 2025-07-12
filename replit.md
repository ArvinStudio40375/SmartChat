# SmartChat AI Chat Application

## Overview

This is a full-stack AI chat application built with React on the frontend and Express.js on the backend. The application provides a real-time chat interface that connects to AI models through OpenRouter API, allowing users to have conversations with AI assistants.

## User Preferences

Preferred communication style: Simple, everyday language.
Deployment preference: Vercel for hosting the application.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: In-memory storage (MemStorage) for development
- **AI Integration**: OpenRouter API for AI model access

## Key Components

### Data Layer
- **Schema**: Shared TypeScript schema using Drizzle ORM
- **Database Tables**: 
  - `users`: User authentication data
  - `messages`: Chat messages with session tracking
- **Validation**: Zod schemas for runtime type checking

### Frontend Components
- **Chat Interface**: Modular chat components (Header, Container, Input, MessageBubble)
- **UI Library**: Comprehensive shadcn/ui component library
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Services
- **API Routes**: RESTful endpoints for message handling
- **Storage Interface**: Abstracted storage layer supporting multiple implementations
- **AI Service**: OpenRouter integration for AI responses

## Data Flow

1. **User Input**: User types message in chat interface
2. **Client Processing**: React component validates and sends message via TanStack Query
3. **API Request**: HTTP POST to `/api/messages` endpoint
4. **Message Storage**: User message saved to database
5. **AI Processing**: Message sent to OpenRouter API
6. **AI Response**: AI response received and saved to database
7. **Client Update**: Both messages returned to client and displayed

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **wouter**: Lightweight routing
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### AI Integration
- **OpenRouter API**: External AI service for model access
- Default API key provided for development (should be replaced in production)

## Deployment Strategy

### Development Setup
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: TSX for TypeScript execution with auto-reload
- **Database**: PostgreSQL database (configured via DATABASE_URL)

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations handle schema changes

### Configuration
- Environment variables for database connection and API keys
- Shared TypeScript configuration across client/server
- Path aliases for clean imports (@/, @shared/)

### Key Architectural Decisions

1. **Monorepo Structure**: Client, server, and shared code in single repository for easier development
2. **TypeScript First**: Full TypeScript implementation with strict type checking
3. **Modular Storage**: Abstract storage interface allows switching between in-memory and database storage
4. **Component-Based UI**: Reusable components with consistent design system
5. **API-First Design**: Clean separation between frontend and backend with RESTful API
6. **Session-Based Chat**: Messages grouped by session ID for conversation continuity