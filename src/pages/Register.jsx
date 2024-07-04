// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../Components/css/Register.css';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [role, setRole] = useState('');  // Conventionally, variable names should start with a lowercase letter
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Data to be sent to the server
//     const userData = {
//       username,
//       email,
//       role,
//       password,
//     };

//     // Post request to backend
//     axios.post('/api/register', userData)
//       .then(response => {
//         navigate('/login'); // Redirect to login on successful registration
//         console.log(response.data); // Optional: Log response from server
//       })
//       .catch(err => {
//         setError(err.response ? err.response.data.message : err.message);
//       });
//   };

//   return (
//     <div className="registration-container">
//       <form onSubmit={handleSubmit} className="registration-form">
//         <h2>Create Account</h2>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group2">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group2">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group3">
//           <label>Role</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="Owner">Owner</option>
//             <option value="Farmer">Farmer</option>
//           </select>
//         </div>
//         <div className="form-group2">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="registration-button">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;





















































  // import React, { useState } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import { useAuth } from '../AuthContext';
  // import '../Components/css/Register.css';
  // import axios from 'axios';

  // const Register = () => {
  //   const [username, setUsername] = useState('');
  //   const [Role, setRole] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [error, setError] = useState('');
  //   const navigate = useNavigate();
  //   const { register } = useAuth();



  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     register(username, password, Role)
  //       .then(() => {
  //         navigate('/login'); // Redirect to login on successful registration
  //       })
  //       .catch(err => setError(err.message)); // Handle errors like duplicate username
  //   };

  //   const userData = {
  //           uName: username,
  //           uEmail: email,
  //           uRole: Role,
  //           uPassword: password,
  //         };
      

  //   axios.post('https://project-save.vercel.app/api/register', userData)
  //       .then(response => {
  //         navigate('/login'); // Redirect to login on successful registration
  //         console.log(response.data); // Optional: Log response from server
  //       })
  //       .catch(err => {
  //         setError(err.response ? err.response.data.message : err.message);
  //       });
  //   };

  //   return (
  //     <div className="registration-container">
  //       <form onSubmit={handleSubmit} className="registration-form">
  //         <h2>Create Account</h2>
  //         {error && <p className="error">{error}</p>}
  //         <div className="form-group2">
  //           <label>Username</label>
  //           <input
  //             type="text"
  //             value={username}
  //             onChange={(e) => setUsername(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <div className="form-group2">
  //           <label>Email</label>
  //           <input
  //             type="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <div className="form-group3">
  //           <label>Role</label>
  //           <select
  //             value={Role}
  //             onChange={(e) => setRole(e.target.value)}
  //             required
  //           >
  //             <option value="">Select Role</option>
  //             <option value="Owner">Owner</option>
  //             <option value="User">Farmer</option>
  //           </select>
  //         </div>
  //         <div className="form-group2">
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <button type="submit" className="registration-button">Register</button>
  //       </form>
  //     </div>
  //   );
  // };

  // export default Register;
 

  //worksssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import '../Components/css/Register.css';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [role, setRole] = useState(''); // Changed to lowercase to follow convention
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { register } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await register(username, password, role); // Assuming register also takes 'role'
//       // After successful auth registration, send the user details to your backend
//       const userData = {
//         uName: username,
//         uEmail: email,
//         uRole: role,
//         uPassword: password,
//       };
//       const response = await axios.post('https://project-save.vercel.app/api/users', userData);
//       console.log(response.data); // Log response data from server
//       navigate('/login'); // Redirect to login after successful registration
//     } catch (err) {
//       setError(err.response ? err.response.data.message : err.message);
//     }
//   };

//   return (
//     <div className="registration-container">
//       <form onSubmit={handleSubmit} className="registration-form">
//         <h2>Create Account</h2>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group2">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group2">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group3">
//           <label>Role</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="Owner">Owner</option>
//             <option value="Farmer">Farmer</option>
//           </select>
//         </div>
//         <div className="form-group2">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="registration-button">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../Components/css/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password, role);
      navigate('/login');
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Create Account</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group2">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group3">
          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Owner">Owner</option>
            <option value="Farmer">Farmer</option>
          </select>
        </div>
        <div className="form-group2">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="registration-button">Register</button>
      </form>
    </div>
  );
};

export default Register;

