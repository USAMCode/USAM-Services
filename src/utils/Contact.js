import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import SectionWrapper from "@/section/SectionWrapper";
import { slideIn } from "./motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [snack, setSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_KEY);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        {
          from_name: form.name,
          to_name: "Joel Revington",
          from_email: form.email,
          to_email: "joelrevington28@gmail.com",
          message: form.message,
        },
        `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`
      )
      .then(() => {
        return emailjs.send(
          `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_ID_1}`,
          {
            from_name: "USAM Technologies",
            to_name: form.name,
            from_email: "joelrevington28@gmail.com",
            to_email: form.email,
            message: "Thanks for Reaching out. We will get back to you shortly",
          },
          `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`
        );
      })
      .then(
        () => {
          setLoading(false);
          setSnack(true);
          setSnackMessage("Response Submitted");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setSnack(true);
          setSnackMessage("Something Went Wrong");
        }
      );
  };
  return (
    <>
      {/* <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snack}
        onClose={() => setSnack(false)}
        message={snackMessage}
        autoHideDuration={2000}
      /> */}
      <div
        className={`flex flex-col w-1/2 justify-center items-center xs:gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.4] w-1/2 bg-quaternary p-6 rounded-2xl"
        >
          {/* <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">
            Get in touch
          </p> */}
          <div className="text-black w-full text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-5xl">
            Contact
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 py-4"
          >
            <label className="flex flex-col">
              <span className="text-black mb-2 font-semibold">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="bg-white py-2 px-4 placeholder:text-primary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-black mb-2 font-semibold">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="bg-white py-2 px-4 placeholder:text-primary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-black mb-2 font-semibold">Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-white py-4 px-4 placeholder:text-primary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-2 px-5 rounded-lg outline-none w-fit text-black font-bold shadow-md text-lg"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
      <div className="flex flex-row w-1/2"></div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
