# React Protected Route Component

A simple and reusable React component that protects routes in a Single Page Application (SPA). It checks for the presence of a JSON Web Token (JWT) in the browser's Local Storage and redirects to a login page if the token is not found.

## Problem It Solves

In many web applications, certain pages (like an admin dashboard or a user profile) should only be accessible to authenticated users. This component provides a clean, declarative way to enforce this protection using React Router.

## Installation

1. Add this component to your project (e.g., in `src/components/ProtectedRoute.jsx`).
2. Ensure you have `react-router-dom` installed:
```bash
npm install react-router-dom
```

## Usage

Wrap the component you want to protect with the `ProtectedRoute` component in your router configuration.

```jsx
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const router = createBrowserRouter([
  // ... public routes
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  }
]);

## Running the Demo

To see this component in action locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/lokiwilded/react-protected-route-component.git](https://github.com/lokiwilded/react-protected-route-component.git)
    ```
2.  Navigate into the directory:
    ```bash
    cd react-protected-route-component
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```
This will open a demo in your browser where you can test the login/logout functionality and the protected route.
