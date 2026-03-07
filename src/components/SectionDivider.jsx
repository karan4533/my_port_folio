import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ number, title, subtitle, color = "blue" }) => {
  const gradients = {
    blue: "from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]",
    purple: "from-[#4338ca] via-[#6366f1] to-[#818cf8]"
  };
  const shadows = {
    blue: '0 8px 32px rgba(59,130,246,0.45), 0 2px 8px rgba(0,0,0,0.12)',
    purple: '0 8px 32px rgba(99,102,241,0.45), 0 2px 8px rgba(0,0,0,0.12)',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${gradients[color]} p-6 md:p-8`}
      style={{ boxShadow: shadows[color] }}
    >
      {/* Dot-grid overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="relative z-10 flex items-center gap-4">
        <span className="text-6xl font-black text-white/[0.1] leading-none select-none">{number}</span>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="text-white/70 text-sm mt-1 font-medium">{subtitle}</p>}
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-24 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />
      <div className="absolute top-1/2 right-16 w-12 h-12 bg-white/5 rounded-full" />
    </motion.div>
  );
};

export default SectionDivider;
