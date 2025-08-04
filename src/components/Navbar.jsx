import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  // scroll handler: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentY < 50) {
            setVisible(true);
          } else if (currentY > lastScrollY.current && currentY - lastScrollY.current > 5) {
            setVisible(false);
          } else if (currentY < lastScrollY.current && lastScrollY.current - currentY > 5) {
            setVisible(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // handle hash navigation for in-page sections
  const handleHashNav = (hash) => {
    if (location.pathname !== "/") {
      // go to home first, then scroll after navigation
      navigate(`/${hash}`, { replace: false });
      // small delay to allow mount
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", hash: "#finance-options" },
    { label: "Contact", hash: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-30 bg-yellow-300 backdrop-blur-md shadow-md transform transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-12">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={assets.logo} alt="Pravalika Enterprises Logo" className="h-10 md:h-12 object-contain" />
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
            Pravalika Enterprises
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium" role="menubar">
          {navItems.map(({ label, to, hash }) => (
            <li key={label} role="none">
              {to ? (
                <Link
                  to={to}
                  role="menuitem"
                  className="hover:text-orange-500 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleHashNav(hash)}
                  className="hover:text-orange-500 transition-colors duration-300"
                  role="menuitem"
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white/90 backdrop-blur-md shadow-lg py-4 flex flex-col items-center space-y-4 text-gray-800 font-medium" role="menu">
          {navItems.map(({ label, to, hash }) => (
            <li key={label} role="none">
              {to ? (
                <Link
                  to={to}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-500 transition"
                >
                  {label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleHashNav(hash)}
                  className="hover:text-orange-500 transition"
                  role="menuitem"
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
