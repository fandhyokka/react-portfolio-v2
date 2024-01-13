import React from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import CustomButton from "../Reusable/Button";
import SocialMedia from "../Reusable/SocialMedia";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const iconSize = 20;

  const [state, handleSubmit] = useForm("mnqendnv");

  return (
    <section id="contact">
      <div>
        <p className={`mt-10 mb-5 pb-10 font-opensans text-center font-semibold text-4xl`}>
          MY <span className="text-green-800">CONTACT</span>
        </p>
        <div className="wrapper-form-and-description flex flex-col md:flex-row md:justify-between">
          <div className="mx-auto w-full md:w-1/2 mb-8 md:mb-0">
            {state.succeeded ? (
              <p className="text-green-500 font-semibold">Your email was sent!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="mb-3 block text-base font-semibold font-opensans text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="mb-3 block text-base font-semibold font-opensans text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="mb-5">
                  <label htmlFor="subject" className="mb-3 block text-base font-semibold font-opensans text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="mb-3 block text-base font-semibold font-opensans text-white">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <CustomButton type="submit" width="25%" disabled={state.submitting}>
                    <div className="flex items-center justify-center h-10">
                      <div className="mr-2 text-white font-semibold">Send</div>
                    </div>
                  </CustomButton>
                </div>
              </form>
            )}
          </div>

          <div className={`md:w-1/2 ${isAboveLarge ? "px-5 py-8" : "text-justify"}`}>
            <p className="text-base font-light font-opensans text-white mb-5">Should you are interested in my profile, please don't hesitate to contact me through the contact form beside or you can contact me directly to:</p>
            <div className="flex">
              <div className="flex items-center">
                <SiGmail />
                <span className="ms-3 text-base font-semibold font-opensans text-white">okkafandi@gmail.com</span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="flex items-center">
                <FaWhatsapp size={iconSize} />
                <span className="ms-2 text-base font-semibold font-opensans text-white">+62 85930194670</span>
              </div>
            </div>
            <SocialMedia size={iconSize} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
