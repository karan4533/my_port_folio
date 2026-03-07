import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const PersonalDetails = ({ data }) => {
  return (
    <section id="personal" className="space-y-6">
      {/* Hero Card with Profile */}
      <motion.div {...fadeUp(0)} className="radiant-card p-8" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 60%, #f5f3ff 100%)' }}>
        <div className="grid md:grid-cols-4 gap-8 items-center">
          {/* Profile Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={data.profileImage}
                alt={data.name}
                className="rounded-2xl shadow-xl w-full max-w-[220px] h-auto object-cover border-2 border-blue-100 ring-4 ring-blue-100/40 transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">
              {data.name}
            </h1>
            <p className="text-xl text-primary font-bold mb-2">
              {data.designation} – {data.departmentName}
            </p>
            <p className="text-gray-600 font-medium mb-4">{data.university}</p>
            {data.tagline && (
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {data.tagline}
              </p>
            )}

            {/* Brand Statement */}
            {data.brandStatement && (
              <div className="p-4 rounded-xl mb-6" style={{ background: 'rgba(59,130,246,0.06)', borderLeft: '4px solid #3b82f6' }}>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">
                  {data.brandStatement}
                </p>
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={`mailto:${data.contact.emails[0]}?subject=Collaboration Inquiry&body=Hi ${data.name},%0A%0AI'd love to collaborate with you on...`}
                className="px-6 py-3 text-white rounded-xl font-semibold transition-all duration-200 inline-flex items-center hover:scale-105 hover:brightness-110 active:scale-95 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)', boxShadow: '0 4px 15px rgba(59,130,246,0.4)' }}
              >
                <i className="fas fa-handshake mr-2"></i>
                Collaborate with me
              </a>
              <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 border border-gray-300 hover:scale-105 hover:shadow-md active:scale-95">
                <i className="fas fa-download mr-2"></i>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      {data.stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.stats.map((stat, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.08)}
              className="radiant-card p-6 text-center transition-all duration-200 group cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)' }}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Contact & Links Grid */}
      <motion.div {...fadeUp(0.1)} className="grid md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="radiant-card p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mr-3">
              <i className="fas fa-address-book text-white"></i>
            </div>
            Contact Information
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone text-white text-sm"></i>
              </div>
              <span className="text-gray-700 font-medium">{data.contact.phone}</span>
            </div>
            
            {data.contact.emails.map((email, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white text-sm"></i>
                </div>
                <a href={`mailto:${email}`} className="text-primary hover:text-primary-dark font-medium transition-colors">
                  {email}
                </a>
              </div>
            ))}

            {data.contact.location && (
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white text-sm"></i>
                </div>
                <span className="text-gray-700 font-medium">{data.contact.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Academic Identity */}
        <div className="radiant-card p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mr-3">
              <i className="fas fa-id-card text-white"></i>
            </div>
            Online Profiles
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {data.academicIdentity.map((identity, index) => (
              <a
                key={index}
                href={identity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-200 flex flex-col items-center hover:border-primary group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-2">
                  <i className={`${identity.icon} text-xl text-white`}></i>
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center group-hover:text-primary">{identity.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Area of Interests */}
      <motion.div {...fadeUp(0.15)} className="radiant-card p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mr-3">
            <i className="fas fa-lightbulb text-white"></i>
          </div>
          Area of Interests
        </h3>
        <div className="flex flex-wrap gap-3">
          {data.interests.map((interest, index) => (
            <div key={index} className="pill-chip">
              {interest}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalDetails;
