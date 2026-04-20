import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        
        <div className="flex text-gray-500 flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.comsj/" },
            { icon: <FaTwitter />, link: "https://x.com/shreyash744" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shreyash-jadhav-4434b5285" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/__sj__8687" },
            { icon: <FaYoutube />, link: "https://www.youtube.com" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Shreyash Jadhav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;