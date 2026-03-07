import React from 'react';

const groupColors = {
  'OVERVIEW':              { dot: 'bg-blue-400',   text: 'text-blue-400',   active: 'bg-blue-500/20 border-blue-400' },
  'EXPERIENCE & PROJECTS': { dot: 'bg-emerald-400', text: 'text-emerald-400', active: 'bg-emerald-500/20 border-emerald-400' },
  'ACADEMIC':              { dot: 'bg-purple-400',  text: 'text-purple-400',  active: 'bg-purple-500/20 border-purple-400' },
};
const defaultColor = { dot: 'bg-blue-400', text: 'text-blue-400', active: 'bg-blue-500/20 border-blue-400' };

const Sidebar = ({ data, activeSection, onNavigate }) => {
  let lastGroup = null;

  // Build a group → items map to find current group color
  const getItemColor = (item) => groupColors[item.group] || defaultColor;

  return (
    <div className="fixed left-0 top-0 h-screen w-72 text-white overflow-y-auto z-50 hidden lg:flex flex-col" style={{ background: 'linear-gradient(170deg, #0c1527 0%, #0f1f3d 50%, #111827 100%)' }}>

      {/* ── Profile Header ── */}
      <div className="px-6 pt-7 pb-5 border-b border-white/10 flex flex-col items-center text-center gap-3 relative" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.2) 0%, transparent 65%)' }}>
        {/* Icon avatar */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(99,102,241,0.25) 100%)', border: '1px solid rgba(59,130,246,0.4)' }}>
            <i className="fas fa-code text-2xl text-white"></i>
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-sidebar shadow" title="Available for opportunities"></span>
        </div>

        {/* Name & title */}
        <div>
          <h1 className="text-base font-bold text-white leading-tight">{data.name}</h1>
          <p className="text-[11px] text-white/60 mt-0.5 font-medium leading-snug">{data.department}</p>
          <p className="text-[10px] text-white/40 mt-0.5">{data.university}</p>
        </div>

        {/* Social links */}
        {data.academicIdentity && (
          <div className="flex items-center gap-2 mt-1">
            {data.academicIdentity
              .filter(a => ['LinkedIn', 'GitHub', 'Email'].includes(a.name))
              .map((a, i) => (
                <a
                  key={i}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={a.name}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                >
                  <i className={`${a.icon} text-xs text-white/80`}></i>
                </a>
              ))}
          </div>
        )}
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 py-4 px-3">
        {data.navigation.map((item) => {
          const showGroupHeader = item.group && item.group !== lastGroup;
          if (item.group) lastGroup = item.group;
          const color = getItemColor(item);
          const isActive = activeSection === item.id;

          return (
            <React.Fragment key={item.id}>
              {showGroupHeader && (
                <div className="px-3 pt-5 pb-2 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`}></span>
                  <span className={`text-[9px] font-bold uppercase tracking-[0.15em] ${color.text}`}>
                    {item.group}
                  </span>
                </div>
              )}
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full text-left px-3 py-2.5 mb-0.5 rounded-xl flex items-center gap-3 transition-all duration-200 group border-l-2 ${
                  isActive
                    ? `${color.active} text-white`
                    : 'border-transparent text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {/* Icon box */}
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  isActive ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'
                }`}>
                  <i className={`${item.icon} text-xs`}></i>
                </div>
                <span className="text-[13px] font-medium">{item.label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0"></span>
                )}
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="px-6 py-4 border-t border-white/10">
        <p className="text-[10px] text-white/30 text-center">© {new Date().getFullYear()} {data.name}</p>
      </div>
    </div>
  );
};

export default Sidebar;
