import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        
        <div className="flex text-gray-500 flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanket-inamdar9325" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
            
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
          © 2025 Sanket Inamdar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;