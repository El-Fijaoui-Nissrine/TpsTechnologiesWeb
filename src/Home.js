import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import logo from './images/logoenset2.png';

function Home() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('Dashboard'); 

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="home-container">
     
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li
            className={activeMenu === 'Dashboard' ? 'active' : ''}
            onClick={() => handleMenuClick('Dashboard')}
          >
            <span className="icon">
              <i className="bi bi-speedometer2"></i>
            </span>{' '}
            Dashboard
          </li>
          <li
            className={activeMenu === 'Products' ? 'active' : ''}
            onClick={() => handleMenuClick('Products')}
          >
            <span className="icon">
              <i className="bi bi-box-seam"></i>
            </span>{' '}
            Products
          </li>
          <li
            className={activeMenu === 'Upload' ? 'active' : ''}
            onClick={() => handleMenuClick('Upload')}
          >
            <span className="icon">
              <i className="bi bi-upload"></i>
            </span>{' '}
            Upload
          </li>
        </ul>
        <button className="sign-out-button" onClick={handleSignOut}>
          <i className="bi bi-box-arrow-right"></i> Sign Out
        </button>
      </div>

   
      <div className="main-content">
        <div className="logo-container">
          <img src={logo} alt="Logo ENSET" /> 
        </div>
        <h1>{activeMenu}</h1>
        {activeMenu === 'Dashboard' && (
          <div>
            <p>Welcome to the Dashboard!</p>
          </div>
        )}
        {activeMenu === 'Products' && (
          <div>
            <p>List of products will be displayed here.</p>
           
          </div>
        )}
        {activeMenu === 'Upload' && (
          <div>
            <p>Upload your files here.</p>
            <button onClick={() => alert('Upload functionality to be implemented')}>
              Upload File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;