
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAwarenessDropdownOpen, setIsAwarenessDropdownOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    setIsAwarenessDropdownOpen(false);
  }, [location.pathname]);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-health-blue to-health-green rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-health-dark' : 'text-white'}`}>
              HealthAware
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" isScrolled={isScrolled} active={location.pathname === '/'}>
              Home
            </NavLink>
            
            {/* Awareness Dropdown */}
            <div className="relative group">
              <button 
                className={`px-4 py-2 rounded-md transition-colors group 
                  ${isScrolled 
                    ? 'text-health-dark hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                  }
                  ${location.pathname.includes('/awareness') ? 'font-medium' : ''}
                `}
                onMouseEnter={() => setIsAwarenessDropdownOpen(true)}
                onMouseLeave={() => setIsAwarenessDropdownOpen(false)}
              >
                Awareness
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 inline-block ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                  isAwarenessDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsAwarenessDropdownOpen(true)}
                onMouseLeave={() => setIsAwarenessDropdownOpen(false)}
              >
                <div className="py-1">
                  <DropdownItem to="/awareness/mental">Mental Health</DropdownItem>
                  <DropdownItem to="/awareness/heart">Heart Health</DropdownItem>
                  <DropdownItem to="/awareness/stomach">Stomach Health</DropdownItem>
                  <DropdownItem to="/awareness/kidney">Kidney Health</DropdownItem>
                  <DropdownItem to="/awareness/cancer">Cancer Awareness</DropdownItem>
                </div>
              </div>
            </div>
            
            <NavLink to="/tips" isScrolled={isScrolled} active={location.pathname === '/tips'}>
              Tips
            </NavLink>
            
            <NavLink to="/bmi" isScrolled={isScrolled} active={location.pathname === '/bmi'}>
              BMI Calculator
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isScrolled ? 'text-health-dark' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden glass-nav ${
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2">
            <MobileNavLink to="/" active={location.pathname === '/'}>
              Home
            </MobileNavLink>
            
            {/* Mobile Awareness Dropdown */}
            <div>
              <button 
                className="w-full flex items-center justify-between px-4 py-2 rounded-md text-health-dark hover:bg-gray-100 transition-colors"
                onClick={() => setIsAwarenessDropdownOpen(!isAwarenessDropdownOpen)}
              >
                <span>Awareness</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform ${isAwarenessDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  isAwarenessDropdownOpen ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <div className="pl-6 py-1 flex flex-col gap-1">
                  <MobileNavLink to="/awareness/mental" active={location.pathname === '/awareness/mental'}>
                    Mental Health
                  </MobileNavLink>
                  <MobileNavLink to="/awareness/heart" active={location.pathname === '/awareness/heart'}>
                    Heart Health
                  </MobileNavLink>
                  <MobileNavLink to="/awareness/stomach" active={location.pathname === '/awareness/stomach'}>
                    Stomach Health
                  </MobileNavLink>
                  <MobileNavLink to="/awareness/kidney" active={location.pathname === '/awareness/kidney'}>
                    Kidney Health
                  </MobileNavLink>
                  <MobileNavLink to="/awareness/cancer" active={location.pathname === '/awareness/cancer'}>
                    Cancer Awareness
                  </MobileNavLink>
                </div>
              </div>
            </div>
            
            <MobileNavLink to="/tips" active={location.pathname === '/tips'}>
              Tips
            </MobileNavLink>
            
            <MobileNavLink to="/bmi" active={location.pathname === '/bmi'}>
              BMI Calculator
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Navigation Link Components
const NavLink = ({ to, children, isScrolled, active }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-md transition-colors ${
      active
        ? isScrolled
          ? 'bg-health-green text-white'
          : 'bg-white/20 text-white font-medium'
        : isScrolled
          ? 'text-health-dark hover:bg-gray-100'
          : 'text-white hover:bg-white/10'
    }`}
  >
    {children}
  </Link>
);

const DropdownItem = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-md transition-colors ${
      active
        ? 'bg-health-green text-white'
        : 'text-health-dark hover:bg-gray-100'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
