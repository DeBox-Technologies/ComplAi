import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative w-screen flex justify-center items-center overflow-hidden">
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="https://res.cloudinary.com/djr22sgp3/video/upload/a_90/v1689594936/pexels-nikita-ryumshin-10994870_1080p_optqhk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-radial z-10"></div>
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center z-20 py-20 md:py-32 xl:py-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Streamline Your Processes
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline">Compliance,</span>
          </div>
          <div className="mt-2 sm:mt-2 text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-20 md:px-24 lg:px-24">
            Made Easy.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Experience seamless regulatory checking and document compliance monitoring for your business.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div>
            <div
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={() => setIsModalOpen(true)}
            >
              Try Today
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
