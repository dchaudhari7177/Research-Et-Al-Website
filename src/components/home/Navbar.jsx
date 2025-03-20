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
        className="md:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          className="w-6 h-6" 
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
            className="menu-item" 
            style={{ color: color }}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        absolute top-full left-0 right-0 
        bg-gray-800 
        md:hidden 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {navLinks.map((link) => (
          <Link
            key={link.text}
            to={link.to}
            className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(false)}
            style={{ color: color }}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Login Button */}
      <button
        className="px-5 py-2 my-2 mr-4 md:mr-9 text-lg hover:scale-105 transition duration-300 ease-in-out"
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
