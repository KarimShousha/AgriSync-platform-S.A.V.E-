import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Monitoring from './pages/Monitoring.jsx';
import Controlling from './pages/Controlling.jsx';
import NavBar from './Components/NavBar.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DiseaseDetection from './pages/DiseaseDetection.jsx';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/controlling" element={<Controlling />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

// src/App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import Monitoring from './pages/Monitoring.jsx';
// import Controlling from './pages/Controlling.jsx';
// import NavBar from './Components/NavBar.jsx';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register.jsx';
// import DiseaseDetection from './pages/DiseaseDetection.jsx';
// import { AuthProvider } from './AuthContext';
// import Loading from '../src/Components/loading.jsx';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // Adjust the time as needed

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <Router>
//       <AuthProvider>
//         <div>
//           <NavBar />
//           <Routes>
//             <Route path="/" element={<Navigate replace to="/login" />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/monitoring" element={<Monitoring />} />
//             <Route path="/controlling" element={<Controlling />} />
//           </Routes>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;
