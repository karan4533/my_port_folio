import React from 'react';

const Header = ({ name, onMenuClick, darkMode, onToggleTheme }) => {
  return (
    <div className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-40 border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
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
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{name}</h2>
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
