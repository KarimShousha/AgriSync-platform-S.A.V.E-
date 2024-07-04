// workssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

// import NavButtons from "./NavButtons";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import './css/NavBar.css';
// import { useAuth } from '../AuthContext';

// export default function NavBar() {
//    /* const isAuthenticated = !!localStorage.getItem('auth'); */
//   const { isAuthenticated, logout } = useAuth();
//   const navigate = useNavigate();
//   const navArr = ["Home", "Monitoring", "Controlling"]; // Ensure consistency in naming
//   const [activeState, setActiveState] = useState("Home");
//   const [isOpen, setIsOpen] = useState(false);

//    const handleButton = (buttonName) => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     } else {
//       setActiveState(buttonName);
//       navigate(`/${buttonName.toLowerCase() === 'home' ? '' : buttonName.toLowerCase()}`);
//     }
//     setIsOpen(false);
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/login', { replace: true });
// };

//     const toggleNav = () => {
//         setIsOpen(!isOpen);
//         console.log(isOpen);
//     };

//     useEffect(() => {
//         let lastScrollTop = 0;
//         const navbar = document.querySelector('.navbar');

//         const handleScroll = () => {
//             const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//             if (scrollTop === 0) {
//                 // If we are at the very top of the page, show the navbar
//                 navbar.style.top = "0";
//             } else if (scrollTop > lastScrollTop) {
//                 // Scroll down
//                 navbar.style.top = "-4.5rem"; // Hide the navbar by moving it up
//             } else {
//                 // Scroll up
//                 navbar.style.top = "0";
//             }
//             lastScrollTop = scrollTop;
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <nav className="navbar">
//         <div className="nav-name-image">
//           <Link to="/" onClick={() => handleButton("Home")}>
//             <img src={require('../images/darkgreenLeaf.png')} alt="Smart Clean Farm Logo" className="white-leaf-img" />
//           </Link>
//           <Link to="/">
//             <span className="navbar-name" onClick={() => handleButton("Home")}>AgriSync</span>
//           </Link>
//         </div>
//         <div className="burger" onClick={toggleNav}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <ul className={isOpen ? "nav-active" : "nav-close"}>
//           {navArr.map((navItem, index) => (
//             <li key={index} onClick={() => handleButton(navItem)}>
//               <NavButtons isActive={activeState === navItem} name={navItem} />
//             </li>
//           ))}
//           {isAuthenticated && (
//             <li className="Logout" onClick={handleLogout}>Logout</li>
//           )}
//         </ul>
//       </nav>
//     );
// }

import NavButtons from "./NavButtons";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './css/NavBar.css';
import { useAuth } from '../AuthContext';

export default function NavBar() {
  const { isAuthenticated, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeState, setActiveState] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navArr = ["Home", "Monitoring"];
  if (userRole === 'Owner') {
    navArr.push("Controlling");
  }

  const handleButton = (buttonName) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      setActiveState(buttonName);
      navigate(`/${buttonName.toLowerCase() === 'home' ? '' : buttonName.toLowerCase()}`);
    }
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false); // Close the burger menu
    navigate('/login', { replace: true });
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        navbar.style.top = "0";
      } else if (scrollTop > lastScrollTop) {
        navbar.style.top = "-4.5rem";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-name-image">
        <Link to="/" onClick={() => handleButton("Home")}>
          <img src={require('../images/darkgreenLeaf.png')} alt="Smart Clean Farm Logo" className="white-leaf-img" />
        </Link>
        <Link to="/">
          <span className="navbar-name" onClick={() => handleButton("Home")}>AgriSync</span>
        </Link>
      </div>
      {isAuthenticated && (
        <div className="burger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <ul className={isOpen ? "nav-active" : "nav-close"}>
        {isAuthenticated && navArr.map((navItem, index) => (
          <li key={index} onClick={() => handleButton(navItem)}>
            <NavButtons isActive={activeState === navItem} name={navItem} />
          </li>
        ))}
        {isAuthenticated && (
          <li className="Logout" onClick={handleLogout}>Logout</li>
        )}
      </ul>
    </nav>
  );
}

