import { SkillsInfo } from "../../constant";
import { motion } from "framer-motion";

const Skills = () => (
  <section  id="skills" className="py-28">
    <div
      className="w-full bg-[#111214] rounded-3xl p-10 md:p-16
                 shadow-[0_0_30px_rgba(14,111,92,0.2)]"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-[#0E6F5C] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          My core technical skills and tools I use to build solid products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SkillsInfo.map((category, i) => (
          <motion.div
            key={category.title}
            className="bg-[#0D0D0F] border border-[#0E6F5C]/30 rounded-2xl p-5
                       shadow-[0_0_20px_rgba(14,111,92,0.2)]
                       will-change-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3 className="text-xl font-serif font-semibold text-gray-100 mb-5 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center bg-[#0E6F5C]/10
                             border border-[#0E6F5C]/25 rounded-xl p-3
                             transition-transform duration-200
                             hover:scale-105"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    loading="lazy"
                  />
                  <span className="mt-2 text-xs sm:text-sm text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
