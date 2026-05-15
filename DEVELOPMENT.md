# Development

This guide provides instructions on how to set up and run the project locally.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/cts9505/chaitanyashinde.dev.git minimal-dev-portfolio
cd minimal-dev-portfolio
```

### 2. Install Portless

Documentation: [port1355.dev](https://port1355.dev)

```bash
npm install -g portless
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Then, update the necessary environment variables inside `.env.local`.

### 5. Run the development server

```bash
npm run dev
```

The application should now be available at https://cts9505.localhost

## Building for Production

```bash
npm run build
```

After building, start the application with:

```bash
NODE_ENV=production npm run start
```

## Notes

This project has been simplified into a portfolio-focused codebase. Registry publishing, blog/doc routes, and AI-specific endpoints from the original reference project have been removed.
