import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import SectionDivider from './components/SectionDivider';
import IndustryOverview from './components/IndustryOverview';
import TechSkills from './components/TechSkills';
import Experience from './components/Experience';
import IndustryProjects from './components/IndustryProjects';
import Education from './components/Education';
import CertificationsAwards from './components/CertificationsAwards';
import { profileData } from './data';

function App() {
  const [activeSection, setActiveSection] = useState('personal');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = profileData.navigation.map(nav => nav.id);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative dark:bg-slate-900 transition-colors duration-300">
      <Sidebar
        data={profileData}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <MobileMenu
        data={profileData}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="lg:ml-80 relative z-10">
        <Header
          name={profileData.name}
          onMenuClick={() => setMobileMenuOpen(true)}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(prev => !prev)}
        />

        <div className="px-4 md:px-8 lg:px-12 py-8 max-w-7xl space-y-8 dark:text-slate-100">
          {/* Profile Section */}
          <PersonalDetails data={profileData} />

          {/* ====== OVERVIEW SECTION ====== */}
          <SectionDivider
            number="I"
            title="OVERVIEW"
            subtitle="Objectives, Core Skills & Technology Stack"
            color="blue"
          />

          <IndustryOverview data={profileData} />

          <TechSkills techSkills={profileData.techSkills} />

          {/* ====== EXPERIENCE & PROJECTS SECTION ====== */}
          <SectionDivider
            number="II"
            title="EXPERIENCE & PROJECTS"
            subtitle="Work Experience, Internships & Personal Projects"
            color="blue"
          />

          <Experience experience={profileData.itExperience} />

          <IndustryProjects projects={profileData.industryProjects} />

          {/* ====== ACADEMIC SECTION ====== */}
          <SectionDivider
            number="III"
            title="ACADEMIC & CERTIFICATIONS"
            subtitle="Education, Certifications & Awards"
            color="purple"
          />

          <Education education={profileData.education} />

          <CertificationsAwards data={profileData} />
        </div>
      </div>
    </div>
  );
}

export default App;
