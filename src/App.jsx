import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import LoadingScreen from '../src/Components/loading.jsx';
import { AuthProvider } from './AuthContext';
const Home = lazy(() => import('./pages/Home.jsx'));
const Monitoring = lazy(() => import('./pages/Monitoring.jsx'));
const Controlling = lazy(() => import('./pages/Controlling.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Register = lazy(() => import('./pages/Register.jsx'));
const DiseaseDetection = lazy(() => import('./pages/DiseaseDetection.jsx'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <NavBar />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/controlling" element={<Controlling />} />
            </Routes>
          </Suspense>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
