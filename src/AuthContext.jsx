import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://backendgrad-eta.vercel.app/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedRole = localStorage.getItem('userRole');

    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUserRole(storedRole);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.get('https://backendgrad-eta.vercel.app/api/users');
      
      console.log('HTTP response data:', response.data);

      const user = response.data.find(user => user.uName === username && user.uPassword === password);
      if (user) {
        setIsAuthenticated(true);
        setUserRole(user.uRole);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', user.uRole);
        console.log('User authenticated successfully');
      } else {
        throw new Error('User does not exist or password is incorrect');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      throw new Error('Please enter valid username and password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
  };

  const register = async (username, email, password, role) => {
    try {
      const userExists = users.some(user => user.uName === username);
      if (userExists) {
        throw new Error('Username is already taken');
      } else {
        const newUser = { uName: username, uEmail: email, uPassword: password, uRole: role };
        await axios.post('https://backendgrad-eta.vercel.app/api/users', newUser);
        setUsers([...users, newUser]);
      }
    } catch (error) {
      console.error('Registration error:', error.message);
      throw new Error(error.message);
    }
  };

  const value = { isAuthenticated, userRole, login, logout, register };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);





