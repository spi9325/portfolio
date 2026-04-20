import { education } from "../../constant";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-28 px-6 md:px-12 lg:px-24 rounded-4xl font-serif bg-[#0b0f1a] relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        <p className="text-gray-400 mt-4 text-[17px] font-medium max-w-2xl mx-auto">
          My education journey — a timeline of growth and learning, presented creatively.
        </p>
      </div>

      {/* Floating Cards */}
      <div className="relative flex flex-wrap justify-center gap-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="w-full sm:w-[45%] lg:w-[30%] p-6 rounded-3xl
                       bg-[#FBF9EE]/80 backdrop-blur-md
                       border border-emerald-400/30
                       shadow-[0_20px_50px_rgba(16,185,129,0.15)]
                       hover:scale-[1.05] hover:shadow-[0_25px_60px_rgba(16,185,129,0.25)]
                       transform transition-transform duration-300
                       relative"
            initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
          >
            {/* Top Row: Logo + School Info */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-16 rounded-md overflow-hidden border border-emerald-400/40 shadow-sm">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-gray-700">{edu.school}</h4>
                <p className="text-xs text-gray-600 mt-1">{edu.date}</p>
              </div>
            </div>

            {/* Details */}
            <p className="mt-4 text-gray-700 font-semibold">Grade: {edu.grade}</p>
            <p className="mt-2 text-gray-700">{edu.desc}</p>

            {/* Animated Accent Dot */}
            <div className="absolute -top-4 -left-4 w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-md"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
