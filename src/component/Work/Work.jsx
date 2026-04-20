import { useState } from "react";
import { projects } from "../../constant";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-28 px-4 sm:px-10 lg:px-28"
    >
      <div className="text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
          Selected Work
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
          A curated set of digital products, interfaces, and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
        
        <div className="flex flex-col gap-32">
          {[projects[0], projects[2]].map(
            (project) =>
              project && (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              )
          )}
        </div>

        <div className="flex flex-col gap-32 mt-40">
          {[projects[1], projects[3]].map(
            (project) =>
              project && (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              )
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Work;



const ProjectCard = ({ project, onClick }) => (
  <div onClick={onClick} className="cursor-pointer group">
    <div
      className="rounded-[28px] overflow-hidden bg-[#121827]
                 shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                 group-hover:shadow-[0_35px_120px_rgba(52,211,153,0.35)]
                 transition-shadow duration-500"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <div className="mt-6">
      <h3 className="text-xl font-semibold text-chocolate-100">
        {project.title}
      </h3>
      <p className="text-gray-600 text-sm mt-1 max-w-md">
        {project.description}
      </p>
    </div>
  </div>
);




const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
    <div className="relative w-full max-w-5xl rounded-3xl 
                    bg-[#FBF9EE]/80 backdrop-blur-md
                    shadow-[0_40px_120px_rgba(16,185,129,0.25)]">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-emerald-400"
      >
        &times;
      </button>

      <div className="grid lg:grid-cols-2 gap-10 p-6 lg:p-10">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl object-contain shadow-2xl"
        />

        <div>
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-emerald-400/15 text-emerald-900 text-xs px-3 py-1 rounded-full border border-emerald-400/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              className="flex-1 text-center bg-[#1a2035] hover:bg-emerald-500/20
                         text-white py-2 rounded-xl transition"
            >
              View Code
            </a>
            <a
              href={project.webapp}
              target="_blank"
              className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600
                         text-black py-2 rounded-xl font-semibold transition"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
