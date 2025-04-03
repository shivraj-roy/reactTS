# Todo App with React + TypeScript

A modern Todo application built with React and TypeScript, featuring a clean and intuitive user interface for managing your daily tasks.

## Features

-  Add new todos with a user-friendly form
-  Remove completed todos
-  Type-safe implementation using TypeScript
-  Context-based state management
-  Modular component architecture
-  CSS modules for styled components

## Tech Stack

-  React 18
-  TypeScript
-  Vite (Build Tool)
-  CSS Modules
-  ESLint for code quality

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── NewTodo.tsx      # Add new todo form
│   │   ├── TodoItem.tsx     # Individual todo item
│   │   └── Todos.tsx        # Todo list container
│   ├── context/             # React Context
│   │   ├── ctx.tsx          # Todo context definition
│   │   └── todo-context.tsx # Context provider
│   ├── types/               # TypeScript types
│   │   ├── context.ts       # Context types
│   │   └── todo.ts          # Todo model types
│   ├── App.tsx              # Main app component
│   └── main.tsx             # App entry point
```

## Getting Started

### Prerequisites

-  Node.js (v14 or higher)
-  npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

-  `npm run dev` - Start development server
-  `npm run build` - Build for production
-  `npm run lint` - Run ESLint
-  `npm run preview` - Preview production build

## ESLint Configuration

The project includes a robust ESLint setup with React-specific rules. You can extend it by installing additional plugins:

-  [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
-  [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

## License

MIT
