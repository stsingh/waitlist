import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Send, Linkedin } from 'react-feather';
import logo from '../back_imgs/SarasLogo.png';

export const Navbar = () => {
  const location = useLocation();
  const [isMailOpen, setIsMailOpen] = React.useState(false);

  const handleProductsClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="SARAS Logo"
              style={{
                height: '40px',
                marginLeft: '20px',
                cursor: 'pointer'
              }}
            />
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* <Link 
              to="/" 
              className={`text-black hover:opacity-75 transition-opacity ${location.pathname === '/' ? 'font-bold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              onClick={handleProductsClick}
              className={`text-black hover:opacity-75 transition-opacity ${location.pathname === '/products' ? 'font-bold' : ''}`}
            >
              Products
            </Link> */}
            {/* <a
              href="#contact"
              className="group relative p-2"
              onMouseEnter={() => setIsMailOpen(true)}
              onMouseLeave={() => setIsMailOpen(false)}
            > */}
              {/* {isMailOpen ? <Send size={24} className="transform rotate-45" /> : <Mail size={24} />}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 transition-transform group-hover:scale-x-100" 
                   style={{ animation: 'squiggly 0.5s ease-in-out forwards' }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2"
            >
              <Linkedin size={24} />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"
                   style={{ animation: 'squiggly 0.5s ease-in-out forwards' }} />
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}; 