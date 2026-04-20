"use client";

import { useState } from "react";
import {
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function NavItem({ label, sectionId, active, onClick }) {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className={`flex items-center gap-2 text-[15px] font-medium transition ${
        active
          ? "text-[#8245ec]"
          : "text-neutral-800 hover:opacity-70"
      }`}
    >
      {label}
    </button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
     { id: "skills", label: "Skills" }, 
      { id: "experience", label: "Experience" }, 
       { id: "work", label: "Projects" }, 
       { id: "education", label: "Education" },
   
   
  ];

  return (
    <header style={{fontFamily: 'Poppins, sans-serif'}} className="fixed top-0 w-full z-50 px-4 sm:px-8 py-4">
      <div className="max-w-5xl  mx-auto flex items-center justify-between border border-neutral-300  rounded-xl px-4 sm:px-6 py-5 bg-[#FBF9EE]/80 backdrop-blur-md">
        
        <div
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-[20px] font-semibold text-neutral-900 cursor-pointer"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="block w-1 h-4 bg-neutral-900 mr-[2px]" />
            <span className="block w-1 h-3 bg-neutral-900 mr-[2px]" />
          </div>
          Sj
        </div>

        <nav className="hidden md:flex items-center gap-6 ">
          {menuItems.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              sectionId={item.id}
              active={activeSection === item.id}
              onClick={handleNavClick}
            />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sj8687"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-[#8245ec] transition"
          >
            <FaGithub size={21} />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyash-jadhav-4434b5285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-[#8245ec] transition"
          >
            <FaLinkedin size={21} />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-900"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-xl border border-neutral-200 bg-[#FBF9EE] shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            {menuItems.map((item) => (
              <NavItem
                key={item.id}    
                label={item.label}
                sectionId={item.id}
                active={activeSection === item.id}
                onClick={handleNavClick}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
