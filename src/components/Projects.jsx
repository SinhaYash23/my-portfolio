import React from 'react';

const projects = [
  {
    title: "Admin Panel Dashboard",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=500&q=80",
    desc: "Built with Python & Flask using Random Forest to predict crop yields.",
    tech: ["Python", "Flask", "ML"]
  },
  {
    title: "Bank MIS Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    desc: "Automated daily reporting using Power BI and advanced Excel macros.",
    tech: ["Power BI", "Excel", "VBA"]
  },
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    desc: "Personal site built with React and Tailwind for fast performance.",
    tech: ["React", "Tailwind"]
  },
  {
    title: "Crop Prediction ML",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=500&q=80",
    desc: "Built with Python & Flask using Random Forest to predict crop yields.",
    tech: ["Python", "Flask", "ML"]
  },
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    desc: "Personal site built with React and Tailwind for fast performance.",
    tech: ["React", "Tailwind"]
  },
  {
    title: "Bank MIS Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    desc: "Automated daily reporting using Power BI and advanced Excel macros.",
    tech: ["Power BI", "Excel", "VBA"]
  }
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition group">
              
              {/* Image Frame */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;