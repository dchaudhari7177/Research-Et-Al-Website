import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.ico";
import "../../index.css";

export default function Navbar({ color }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/#about", text: "About Us" },
    { to: "/events", text: "Events" },
    { to: "/blogs", text: "Blogs" },
    { to: "/summarizer", text: "Summarizer" },
  ];

  return (
    <nav
      className={`z-50 font-[600] flex flex-row w-full px-[20px] py-[8px] fixed justify-between items-center transition-all duration-300 bg-gray-800 ${
        isScrolled ? 'bg-opacity-80 backdrop-blur-sm shadow-lg' : 'bg-opacity-100'
      }`}
      style={{ fontFamily: "'League Spartan', sans-serif", color: "#d8cffa" }}
    >
      <Link to="/">
        <img
          src={logo}
          className="block h-[40px] w-[40px] ml-4 md:ml-14 rounded-full"
          alt="logo"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-white rounded-lg hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6 transition-transform duration-200 ease-in-out"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row ml-5 gap-x-10 w-1/2 justify-between items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.text}
            to={link.to} 
            className="menu-item hover:text-white transition-colors duration-200" 
            style={{ color: color }}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          absolute top-full left-0 right-0 
          bg-gray-800 
          md:hidden 
          transition-all duration-300 ease-in-out
          transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          opacity-${isOpen ? '100' : '0'}
          shadow-lg
        `}
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
          transitionProperty: 'transform, opacity, visibility'
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.text}
            to={link.to}
            className="block px-6 py-3 text-white hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-none"
            onClick={() => setIsOpen(false)}
            style={{ color: color }}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Login Button */}
      <button
        className="px-5 py-2 my-2 mr-4 md:mr-9 text-lg hover:scale-105 transition duration-300 ease-in-out shadow-md"
        style={{
          color: color === "#ffffff" ? "#3f2d80" : "#ffffff",
          backgroundColor: color === "#ffffff" ? "#ffffff" : "#3f2d80",
          borderRadius: "5px",
        }}
      >
        Log In
      </button>
    </nav>
  );
}
