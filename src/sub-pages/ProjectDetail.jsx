import "../assets/css/Skills.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

const ProjectDetail = ({ title, description, technologies }) => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact" },
  ];

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.65,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const hrVariants = {
    hidden: { width: 0 },
    visible: {
      width: "80%",
      transition: {
        delay: 0.65,
        duration: 1,
      },
    },
  };

  return (
    <div>
      <div className="flex items-center justify-between ml-8 mr-16">
        <motion.h1
          id="title"
          className="title md:text-6xl sm:text-4xl text-3xl font-switzer mb-8 mx-20 my-20 relative transition duration-1000 ease-in-out"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="links flex justify-around items-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="sm:text-sm md:text-xl text-xs px-4 hover:text-shadow-lg shadow-zinc-500/50"
            >
              {link.text}
            </Link>
          ))}
        </motion.div>
      </div>
      <motion.hr
        className="hr-style ml-40"
        variants={hrVariants}
        initial="hidden"
        animate="visible"
      />

      <div className="mx-20 my-10">
        <motion.h2
          className="text-2xl mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          About project:
        </motion.h2>
        {description.map((para, index) => (
          <motion.p
            key={index}
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          >
            {para}
          </motion.p>
        ))}
        <br />
        <br />
        <motion.h2
          className="text-2xl mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Technologies Used:
        </motion.h2>
        <ul className="list-disc list-inside mb-4">
          {technologies.map((tech, index) => (
            <motion.li
              key={index}
              className="text-lg mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
