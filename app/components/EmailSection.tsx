"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import linkedInIcon from "../../public/linkedin.png";
import axios from "axios";
import { useState } from "react";

const EmailSection = () => {
  const [emailSent, setEmailSent] = useState(false);
  async function handleSubmit(e: any) {
    setEmailSent(false);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const response = await axios.post(endpoint, data);
    if (response.status === 200) {
      setEmailSent(true);
    }
  }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">{"Let's Connect"}</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I am looking currently seeking new opportunities. I would love to have
          a conversation so please feel free to contact me!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/matthew-fuss-6746561b2">
            <Image
              src={linkedInIcon}
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="matthew@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-1"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Let's have a chat"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-36"
              placeholder="What would you like to talk about?"
            />
          </div>
          <div className="grid">
            <button
              type="submit"
              className="bg-purple-950 text-white font-medium rounded-md py-2 hover:bg-purple-700"
            >
              Send Message
            </button>
          </div>
          {emailSent && (
            <div className="mt-4">
              <p className="text-green-500">Email sent successfully!</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
