import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.init("sf1YODAhQHKiwRNb6");
      const result = await emailjs.sendForm(
        "sf1YODAhQHKiwRNb6",
        "template_ua264qv",
        form.current,
        "SUOz-IOgA3TcysUK5C2SK"
      );

      console.log("SUCCESS:", result);
      toast.success("Email sent successfully ✅");
      form.current.reset();
    } catch (error) {
      console.log("ERROR FULL:", error); // IMPORTANT
      toast.error("Failed to send ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <ToastContainer />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required
          className="border p-2"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="border p-2"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="border p-2"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="border p-2"
        />

        <button
          type="submit"
          
          disabled={loading}
          className="bg-green-500 text-white p-2"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;