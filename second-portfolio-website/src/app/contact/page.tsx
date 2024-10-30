"use client";

import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name1, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const notify = (e: any) => {
    e.preventDefault();

    toast.success(`Hello ${name1}, your email was sent successfully'`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    setName("");
    setEmail("");
    setmessage("");
  };
  

  const nameFunc = (e: string) => {
    setName(e);
  };
  const emailFunc = (e: string) => {
    setEmail(e);
  };
  const messageFunc = (e: string) => {
    setmessage(e);
  };

  return (
    <>
      <h2 className="text-4xl font-semibold text-[#0a6335] text-center mb-4">
        Contact Me
      </h2>
      <section className="md:flex border-2 border-[#0a6335] md:p-8 rounded-xl shadow-2xl shadow-[#0a6335] p-2">
        <div className="md:w-1/2 w-full mx-auto space-y-6 flex justify-center md:items-center">
          <div className="md:space-y-8 space-y-3 text-2xl md:2xl mt-8 text-center md:text-start">
            <p>
              <span className="font-bold">Phone:</span>
              <a href="tel:03003666930" className="hover:underline">
                {" "}
                03003666930
              </a>
            </p>
            <p>
              <span className="font-bold">Email:</span>
              <a href="mailto:SHAHROXYT@GMAIL.COM" className="hover:underline">
                {" "}
                Shahroxyt@gmail.com
              </a>
            </p>
            <p>
              <span className="font-bold">Location:</span>
              Karachi, Pakistan
            </p>

            <div className="flex md:justify-start justify-center py-2 rounded-lg w-full">
              <Link
                href="https://www.facebook.com/muhammad.shahroz.58"
                target="_blank"
              >
                <FaFacebookF className="text-2xl hover:text-blue-500 mr-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-shahroz-a35b68292/"
                target="_blank"
              >
                <FaLinkedinIn className="text-2xl hover:text-blue-700 mr-4" />
              </Link>
              <Link href="https://github.com/Muhammad-Shahr0z" target="_blank">
                <FaGithub className="text-2xl hover:text-gray-900 mr-4" />
              </Link>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => notify(e)}
          className="lg:w-1/2 w-full space-y-2 text-left"
        >
          <div>
            <label htmlFor="name" className="block font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name1}
              required
              className="w-full px-4 py-2 rounded-lg text-black"
              placeholder="Enter Your Name"
              onChange={(e) => nameFunc(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              className="w-full px-4 py-2 rounded-lg text-black"
              placeholder="Enter Your Email"
              onChange={(e) => emailFunc(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              required
              className="w-full px-4 py-2 rounded-lg text-black resize-none"
              rows={2}
              placeholder="Write Something Here"
              onChange={(e) => messageFunc(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-white text-[#0A6335] font-semibold py-2 px-4 rounded-lg w-full hover:bg-gray-200 transition-all duration-200"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      </section>
    </>
  );
};

export default Contact;
