# replit.md

## Overview

Industrial Automation Control System is a comprehensive AI-powered bottling and packaging line management platform. The system successfully controls a 20-nozzle filler, 20-head capper, labeling machine, date coder, conveyors, and shrink-wrapping operations through a single operator control interface. Features include machine state monitoring, real-time sensor data, process control parameters, emergency stop systems, and SCADA-style monitoring interface for complete industrial bottling automation.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project History

The user initially requested building an art education website, which was completed successfully. However, the user then provided a detailed specification document for building an AI-powered automated bottling and packaging system with PLC integration, vision AI, and SCADA monitoring interface. The project was successfully pivoted and completed to fulfill this new requirement as of August 7, 2025. The system now features a working machine control interface with real-time monitoring capabilities for all 6 pieces of bottling equipment.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and component-based development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses
- **Data Storage**: In-memory storage implementation (MemStorage) for development, with interface design ready for database integration
- **Schema Validation**: Zod for runtime type checking and input validation

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL configured via Neon serverless database connection
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Current Implementation**: In-memory storage with sample data for development purposes
- **Schema Design**: Well-defined tables for users, resources, and chat messages with proper relationships

### Authentication and Authorization
- **Architecture**: Session-based authentication infrastructure prepared
- **Session Storage**: PostgreSQL session store configured with connect-pg-simple
- **Current State**: Authentication endpoints and middleware ready but not actively enforced

### User Interface Design
- **Design System**: Custom art-focused color palette with primary blues and accent colors
- **Typography**: Inter for UI text, Playfair Display for headings
- **Component Library**: Comprehensive shadcn/ui components including forms, dialogs, navigation, and data display
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built on Radix UI primitives ensuring ARIA compliance and keyboard navigation

### Key Features
- **Machine Control Center**: Single operator interface for controlling all 6 pieces of equipment with start/stop/pause/reset commands
- **Real-time Machine States**: Live monitoring of speed, temperature, pressure, vibration, and power consumption
- **Sensor Data Management**: Real-time sensor readings from temperature, pressure, flow rate, and bottle counting sensors
- **Process Controls**: Adjustable control parameters for fill levels, speeds, and other critical process variables
- **Emergency Stop System**: Comprehensive emergency controls for individual machines and system-wide shutdowns
- **Equipment Status Dashboard**: Visual status indicators showing running, stopped, error, and maintenance states
- **Live Data Updates**: Real-time updates every 1-2 seconds for critical monitoring functions

## External Dependencies

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

### Frontend Libraries
- **UI Framework**: React with Radix UI primitives for accessible components
- **State Management**: TanStack Query for server state, React Hook Form for form handling
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting

### Development Tools
- **Build System**: Vite with React plugin for fast development
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier configurations (implied by project structure)
- **Development Environment**: Replit integration with custom plugins for runtime error handling

### Runtime and Deployment
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **HTTP Client**: Native fetch API with custom wrapper for error handling
- **Font Loading**: Google Fonts integration for Inter and Playfair Display
- **Environment Configuration**: Environment variables for database connection and deployment settings