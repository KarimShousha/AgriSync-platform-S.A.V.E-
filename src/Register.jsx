import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../Components/css/Register.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');  // New state variable for email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, email, password)  // Now passing email to the register function
      .then(() => {
        navigate('/login');
      })
      .catch(err => setError(err.message));
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
          />
        </div>
        <div className="form-group2">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group2">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="registration-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
