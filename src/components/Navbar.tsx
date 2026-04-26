import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Vote, LogOut, Menu, X } from 'lucide-react';
import { authService } from '../services/authService';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <nav className="bg-navy-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={user ? "/dashboard" : "/"} className="flex items-center space-x-2">
              <Vote className="h-8 w-8 text-saffron-500" />
              <span className="font-bold text-xl hidden sm:block">Election Assistant India</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-saffron-300 px-3 py-2 rounded-md transition-colors">Dashboard</Link>
                <Link to="/assistant" className="hover:text-saffron-300 px-3 py-2 rounded-md transition-colors">AI Assistant</Link>
                <span className="text-gray-300 mx-2">|</span>
                <span className="text-sm">Hi, {user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-red-400 px-3 py-2 rounded-md transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/about" className="hover:text-saffron-300 px-3 py-2 rounded-md transition-colors">About</Link>
                <Link to="/login" className="hover:text-saffron-300 px-3 py-2 rounded-md transition-colors">Login</Link>
                <Link to="/signup" className="bg-saffron-500 hover:bg-saffron-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 pb-4 px-4 pt-2">
          {user ? (
            <div className="flex flex-col space-y-2">
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="hover:bg-navy-700 px-3 py-2 rounded-md">Dashboard</Link>
              <Link to="/assistant" onClick={() => setIsOpen(false)} className="hover:bg-navy-700 px-3 py-2 rounded-md">AI Assistant</Link>
              <button 
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="flex items-center space-x-2 text-red-400 hover:bg-navy-700 px-3 py-2 rounded-md w-full text-left"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:bg-navy-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/login" onClick={() => setIsOpen(false)} className="hover:bg-navy-700 px-3 py-2 rounded-md">Login</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-saffron-500 text-center hover:bg-saffron-600 px-3 py-2 rounded-md">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
