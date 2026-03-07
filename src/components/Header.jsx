import React from 'react';

const Header = ({ name, onMenuClick, darkMode, onToggleTheme }) => {
  return (
    <div
      className="sticky top-0 z-40 border-b transition-colors duration-300"
      style={{
        background: darkMode ? 'rgba(12,21,39,0.92)' : 'rgba(248,250,255,0.92)',
        borderBottomColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(219,234,254,0.7)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 rounded-lg bg-primary hover:bg-primary-dark flex items-center justify-center text-white transition-all duration-200"
          >
            <i className="fas fa-bars text-lg"></i>
          </button>
          <div>
            <h2 className="text-xl md:text-2xl font-bold" style={{
              background: darkMode
                ? 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)'
                : 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{name}</h2>
            <p className="text-xs text-primary font-semibold">Portfolio</p>
          </div>
        </div>
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none ${
            darkMode ? 'bg-indigo-600' : 'bg-gray-300'
          }`}
        >
          <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
            darkMode ? 'translate-x-7 bg-white' : 'translate-x-0 bg-white'
          }`}>
            <i className={`text-xs ${
              darkMode ? 'fas fa-moon text-indigo-600' : 'fas fa-sun text-amber-500'
            }`}></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
