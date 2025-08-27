# GitHub Finder

GitHub Finder is a modern web application built with React and Vite. It allows users to search for GitHub profiles and view detailed information about them.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/boukra-younes/Github-finder-reactjs
   cd Github-finder-reactjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Setting Up Environment Variables

This project requires a `.env` file to store sensitive information such as API keys. Since `.env` files are not pushed to the repository, you need to create one manually.

1. Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

2. Add the following variables to the `.env` file:

   ```   
   VITE_GITHUB_TOKEN="your-github-api-token"
   VITE_GITHUB_URL="https://api.github.com"
   ```

   Replace `your-github-api-token ` with your actual GitHub API 

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production

To build the application for production, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

This will serve the production build on a local server.

## Acknowledgments

- This project uses the [GitHub API](https://docs.github.com/en/rest).
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).

