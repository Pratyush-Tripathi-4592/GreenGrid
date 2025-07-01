
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './components/Landing.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to landing page */}
        <Route path="/" element={<Landing />} />
        
        {/* You can add more routes here later */}
        {/* <Route path="/login" element={<div>Login Page (Coming Soon)</div>} />
        <Route path="/register" element={<div>Register Page (Coming Soon)</div>} />
        <Route path="/dashboard" element={<div>Dashboard (Coming Soon)</div>} /> */}
        
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App