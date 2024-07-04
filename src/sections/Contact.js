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
    service:"",
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
        backgroundColor: 0xE5E7EB,
        color: 0x1d4ed8,
        color2: 0x1d4ed8,
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

  const handleCheckboxChange = (e) => {
    setForm({ ...form, serviceType: e.target.value });
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
          to_name: "USAM Technologies",
          from_email: form.email,
          to_email: "connect@usam.in",
          service: form.service,
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
            from_email: "connect@usam.in",
            to_email: form.email,
            service: form.service,
            message: "Thanks for Reaching out. Our Team will get in touch with you shortly.",
            image:"https://usam.s3.ap-south-1.amazonaws.com/AutodeskBlack.png"
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
            service:"",
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
        className={`flex xl:flex-row m-auto h-screen bg-[#e5e7eb] items-center overflow-hidden`}
      >
        <div className="flex w-[100%] h-[100%] bg-gradient-to-l xs:hidden sm:hidden">
          <div ref={vantaRef} className="w-full h-full "></div>
        </div>
        <div className="flex absolute xs:relative 2xl:w-1/2 xl:w-1/2 lg:w-1/2 xs:p-2 md:w-2/3 xs:w-full sm:w-full justify-center">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="xl:flex-[0.65] 2xl:flex-[0.5] lg:flex-[0.8] sm:flex-[0.7] xs:flex-[1] md:flex-[0.8] p-6 xs:p-3 bg-gradient-to-br from-second via-third to-second sm:bg-tertiary sm:bg-opacity-60 md:bg-tertiary md:p-4 md:bg-opacity-70  md:flex md:flex-col rounded-2xl"
          >
            <div className="text-black w-full text-center font-black md:text-4xl sm:text-3xl xs:text-3xl xl:text-4xl text-5xl">
              Contact
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 py-4 xl:py-0"
            >
              <label className="flex flex-col">
                <span className="text-black mb-2 xs:text-lg md:text-lg sm:text-lg font-semibold">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="backdrop-blur-sm bg-white py-2 px-4 md:text-base sm:text-base xs:text-base placeholder:text-gray-500 text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black mb-2 md:text-lg sm:text-lg xs:text-lg font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="backdrop-blur-sm bg-white py-2 px-4 md:text-base sm:text-base xs:text-base placeholder:text-gray-500 text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-black mb-2 font-semibold md:text-lg sm:text-lg xs:text-lg">Service Type</span>
                <div className="flex flex-row w-full justify-around">
                  <label className="flex lg:text-[14px] md:text-[14px] xs:text-sm text-base items-center font-semibold">
                    <input
                      type="checkbox"
                      name="serviceType"
                      value="Automation"
                      checked={form.serviceType === "Automation"}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Automation
                  </label>
                  <label className="flex lg:text-[14px] md:text-[14px] xs:text-sm items-center font-semibold">
                    <input
                      type="checkbox"
                      name="serviceType"
                      value="Consulting"
                      checked={form.serviceType === "Consulting"}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Consulting
                  </label>
                  <label className="flex lg:text-[14px] md:text-[14px] xs:text-sm items-center font-semibold">
                    <input
                      type="checkbox"
                      name="serviceType"
                      value="Data & Insights"
                      checked={form.serviceType === "Data & Insights"}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Data & Insights
                  </label>
                </div>
              </label>
              <label className="flex flex-col">
                <span className="text-black mb-2 font-semibold md:text-lg sm:text-lg xs:text-lg">Message</span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="backdrop-blur-sm bg-white py-4 px-4 md:text-base sm:text-base xs:text-base placeholder:text-gray-500
                  text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-first py-2 px-5 rounded-full outline-none w-fit text-white font-semibold shadow-md text-lg xs:text-base md:text-xl sm:text-lg"
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
