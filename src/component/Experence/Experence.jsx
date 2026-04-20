import { experiences } from "../../constant";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 md:px-10 lg:px-16 flex justify-center ">
      <div className="w-full rounded-3xl p-12 md:p-16 ">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-amber-800" />
          <p className="text-gray-700 mt-4  font-medium max-w-2xl mx-auto">
            My journey through roles and organizations, shaping my craft and impact.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-10">
          {experiences.map((experience, idx) => (
            <motion.div
              key={experience.id}
              className="w-full max-w-md sm:max-w-lg bg-[#1E2533] border border-[#34d399]/25 rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_rgba(52,211,153,0.2)] hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#34d399]/60">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-300 text-sm sm:text-base">
                {experience.desc}
              </p>

              <div className="mt-4">
                <h5 className="font-medium text-white mb-2">Tech Stack:</h5>
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i2) => (
                    <li
                      key={i2}
                      className="bg-[#34d399]/25 text-gray-100 px-3 py-1 text-xs sm:text-sm rounded-full border border-[#34d399]/40"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
