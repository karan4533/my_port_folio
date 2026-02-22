import React from 'react';

const AcademicRoles = ({ data }) => {
  return (
    <section id="academic-roles" className="space-y-6">
      {/* Academic Experience */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-university text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Academic Experience</h3>
        </div>
        <div className="space-y-3">
          {data.academicExperience.map((exp, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100 hover:bg-purple-100 transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-briefcase text-white text-sm"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">{exp.position}</h4>
                <p className="text-gray-600 text-sm">{exp.organization}</p>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-purple-200 text-purple-800 rounded-md text-xs font-semibold">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Leadership Roles */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-crown text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Academic Leadership Roles</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.academicLeadershipRoles.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-100 hover:bg-purple-100 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-white text-sm`}></i>
              </div>
              <span className="text-gray-800 font-medium text-sm">{item.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching & Subjects */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-chalkboard-teacher text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Teaching & Subjects Handled</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.teachingSubjects.map((subject, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-purple-100 text-purple-800 border border-purple-200 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-default"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicRoles;
