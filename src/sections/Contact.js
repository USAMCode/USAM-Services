import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import SectionWrapper from "@/section/SectionWrapper";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min'


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
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_KEY);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight:700,
        minWidth: 700,
        el: vantaRef.current,
        THREE,
        backgroundColor: 0xF5E8C7,
        color: 0x6F4C5B,
        color2: 0x6F4C5B,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
        className={`flex xl:flex-row m-auto h-screen bg-quaternary items-center xs:gap-10 overflow-hidden`}
      >
        <div className="flex w-[100%] h-[100%] bg-gradient-to-l xs:hidden md:hidden from-quinary via-quaternary to-tertiary">
          <div ref={vantaRef} className="w-full h-full "></div>
        </div>
        <div className="flex absolute 2xl:w-1/2 xl:w-1/2 xs:relative xs:w-full md:w-full justify-center">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="xl:flex-[0.4] 2xl:flex-[0.4] xs:flex-[0.8] md:flex-[0.8] p-6 md:bg-tertiary md:p-8 md:bg-opacity-70 xs:p-0 md:gap-8 md:flex md:flex-col rounded-2xl"
          >
            <div className="text-black w-full text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-5xl">
              Contact
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 py-4"
            >
              <label className="flex flex-col">
                <span className="text-black mb-2 md:text-2xl font-semibold">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="backdrop-blur-sm bg-white/30 py-2 px-4 md:text-xl placeholder:text-primary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black mb-2 md:text-2xl font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="backdrop-blur-sm bg-white/30 py-2 px-4 md:text-xl placeholder:text-primary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black mb-2 font-semibold md:text-2xl">Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="backdrop-blur-sm bg-white/30 py-4 px-4 md:text-xl placeholder:text-primary
                  text-black rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-tertiary py-2 px-5 rounded-lg outline-none w-fit text-black font-bold shadow-md text-lg md:text-xl"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </div>
        {/* <div className="flex w-2/4 h-3/4">
          <div ref={vantaRef} className="w-full h-full"></div>
        </div> */}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
