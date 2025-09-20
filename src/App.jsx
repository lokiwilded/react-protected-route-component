// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Mock Components
const HomePage = () => <div><h2>Public Home Page</h2><nav><Link to="/dashboard">Go to Dashboard</Link></nav></div>;
const Dashboard = () => <div><h2>Secret Dashboard</h2><p>You can only see this if you are "logged in".</p><button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}>Logout</button></div>;
const LoginPage = () => <div><h2>Login Page</h2><p>Click the button to simulate logging in.</p><button onClick={() => { localStorage.setItem('token', 'fake-jwt'); window.location.href = '/dashboard'; }}>Login</button></div>;

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/dashboard',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;