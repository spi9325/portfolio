import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "", // service ID
        "", // template ID
        form.current,
        ""  // user ID
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); 
          toast.success("Message sent successfully! ✅");
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-10 lg:px-24 overflow-hidden"
    >
      <ToastContainer />

      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-500/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random()}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="text-center relative z-10 mb-16">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-chocolate-700">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        <p className="text-gray-500 mt-4 text-[16px] font-medium max-w-2xl mx-auto">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-auto bg-[#FBF9EE]/80 backdrop-blur-md rounded-3xl border border-emerald-700/30 shadow-[0_20px_60px_rgba(16,185,129,0.15)] p-8 flex flex-col gap-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          Connect With Me
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-[#0d1117]/70 text-white border border-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-[#0d1117]/70 text-white border border-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-xl bg-[#0d1117]/70 text-white border border-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-xl bg-[#0d1117]/70 text-white border border-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
