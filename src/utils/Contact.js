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
        className={`flex xl:flex-row flex-col-reverse m-auto justify-around  xs:gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.4] bg-quaternary p-6 rounded-2xl"
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
                className="bg-white py-4 px-4 placeholder:text-primary
                 text-black rounded-lg outline-none border-none font-medium"
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
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex xl:h-auto w-1/3 gap-4 pt-10 px-10 xs:px-2 flex flex-col items-center"
        >
          <div className="flex text-black text-5xl xs:text-4xl font-semibold">
            Follow Us
          </div>
          <ul className="flex flex-row gap-12 xs:gap-4 flex-wrap py-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://www.linkedin.com/in/joel-revington-105994135"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Linkedin.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://twitter.com/JoelRevington15"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Twitter.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://www.instagram.com/joel_revington/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Instagram.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://www.facebook.com/profile.php?id=100009270750468"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Facebook.png"
                  alt=""
                  />
              </a>
            </li>
          </ul>
          <div className="flex flex-row w-full justify-around">
            <div className="flex flex-col gap-2 w-full text-black text-center justify-around">
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div>
            <div className="flex flex-col gap-2 w-full text-black justify-around text-center">
              <div>1234567890</div>
              <div>usam.tech@gmail.com</div>
            </div>
          </div>
            <div className="flex text-center text-black">No 4, 1st Cross Street, CIT Colony, Mylapore, Chennai – 600004.</div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
