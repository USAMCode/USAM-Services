import React, { useState, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const ContactModal = ({ show, setShow }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClose = () => {
    setShow(false);
  };

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
    <Modal
      open={show}
      center
      onClose={handleClose}
      classNames={{
        overlay: "bg-white",
        modal:
          "2xl:w-2/5 xl:w-2/4 lg:w-2/4 md:w-2/3 sm:w-2/3 xs:w-5/6 rounded-lg shadow-lg",
      }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 py-4"
      >
        <label className="flex flex-col">
          <span className="text-black mb-2 md:text-xl sm:text-xl xs:text-xl font-semibold">
            Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="backdrop-blur-sm bg-white/30 py-2 border-b border-black border-opacity-40 px-4 md:text-lg sm:text-lg xs:text-base placeholder:text-primary text-black outline-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-black mb-2 md:text-xl sm:text-xl xs:text-xl font-semibold">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="backdrop-blur-sm bg-white/30 py-2 px-4 border-b border-black border-opacity-40 md:text-lg sm:text-lg xs:text-base placeholder:text-primary text-black  outline-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-black mb-2 font-semibold md:text-xl sm:text-xl xs:text-xl">
            Message
          </span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="backdrop-blur-sm bg-white/30 py-4 px-4 border rounded-md border-opacity-40 border-black md:text-lg sm:text-lg xs:text-lg placeholder:text-primary
                    text-black  outline-none font-medium"
          />
        </label>

        <div className="flex w-full justify-center">
            <button
            type="submit"
            className="bg-first py-2 px-6 rounded-lg outline-none w-fit text-white font-bold shadow-md text-lg md:text-xl sm:text-xl"
            >
            {loading ? "Sending..." : "Send"}
            </button>
        </div>
      </form>
    </Modal>
  );
};

export default ContactModal;
