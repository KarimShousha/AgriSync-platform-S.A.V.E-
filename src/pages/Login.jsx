// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import '../Components/css/Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted', username, password);

//     // Prepare the data to send to backend
//     const loginData = { username, password };

//     // Post request to backend for authentication
//     axios.get('http://localhost:5000/api/users', loginData)
//       .then(response => {
//         console.log('Login successful:', response.data);
//         localStorage.setItem('user', JSON.stringify(response.data));
//         navigate('/home', { replace: true });
//       })
//       .catch(err => {
//         setError(err.response ? err.response.data.message : "Login failed");
//       });
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="login-button">Login</button>
//         <Link to="/register" className="register-link">Create an account</Link>
//       </form>
//     </div>
//   );
// };

// export default Login;



























// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../Components/css/Login.css';
// import { useAuth } from '../AuthContext';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { isAuthenticated, login } = useAuth();
//   const [UserData, setUserData] = useState([]);

//   const fetchLoginData = () => {
//     const storedData = localStorage.getItem('loginData');
//     const parsedData = storedData ? JSON.parse(storedData) : [];
//     setUserData(parsedData);
//   };

//   useEffect(() => {
//     fetchLoginData();
//   }, []);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/home', { replace: true });
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     console.log('Username:', username);
//     console.log('Password:', password);

//     try {
//       await login(username, password);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="login-button">Login</button>
//         <Link to="/register" className="register-link">Create an account</Link>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Components/css/Login.css';
import { useAuth } from '../AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', username, password);

    try {
      await login(username, password);
      navigate('/home', { replace: true });
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <Link to="/register" className="register-link">Create an account</Link>
      </form>
    </div>
  );
};

export default Login;
