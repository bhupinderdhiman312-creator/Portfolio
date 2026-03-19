import React from "react";
// import Resumep from "../assets/resume.png";
import { motion } from "framer-motion";
// import Back from "../assets/background.jpg";
import resumePDF from "../assets/Bhupinder_new.pdf";

function Resume() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-6 bg-gray-950 bg-cover bg-center"
      // style={{ backgroundImage: `URL(${Back})` }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        My Resume
      </motion.h1>

      <motion.iframe
        src={resumePDF}
        className="w-full sm:w-4/5 md:w-3/5 h-72 sm:h-96 md:h-[500px] border rounded-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        title="Resume"
      />

      <motion.div
        className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <a
          href={resumePDF}
          className="p-3 w-full sm:w-24 text-white border border-sky-500 rounded-2xl hover:bg-sky-400 hover:-translate-y-1 font-bold text-center"
        >
          Open
        </a>

        <a
          href={resumePDF}
          download
          className="p-3 w-full sm:w-auto text-white border border-sky-500 rounded-2xl hover:bg-sky-400 hover:-translate-y-1 font-bold text-center"
        >
          Download
        </a>
      </motion.div>
    </div>
  );
}

export default Resume;