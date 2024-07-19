import "../assets/css/Projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import skills from "../data/skillsInfo.json";

// Import images
import reactImg from "../assets/images/logos/react.webp";
import htmlImg from "../assets/images/logos/html.webp";
import javascriptImg from "../assets/images/logos/javascript.webp";
import cssImg from "../assets/images/logos/css.webp";
import tailwindImg from "../assets/images/logos/tailwind.webp";
import bootstrapImg from "../assets/images/logos/bootstrap.webp";
import nodejsImg from "../assets/images/logos/nodejs.webp";
import expressImg from "../assets/images/logos/express.webp";
import djangoImg from "../assets/images/logos/django.webp";
import mongodbImg from "../assets/images/logos/mongodb.webp";
import mysqlImg from "../assets/images/logos/mysql.webp";
import firebaseImg from "../assets/images/logos/firebase.webp";
import dockerImg from "../assets/images/logos/docker.webp";
import gitImg from "../assets/images/logos/git.webp";
import dsaImg from "../assets/images/logos/dsa.webp";
import osImg from "../assets/images/logos/os.webp";
import dbmsImg from "../assets/images/logos/dbms.webp";
import oopImg from "../assets/images/logos/oop.webp";
import pythonImg from "../assets/images/logos/python.webp";
import cppImg from "../assets/images/logos/cpp.webp";
import cImg from "../assets/images/logos/c.webp";
import goImg from "../assets/images/logos/go.webp";

// Map skill names to images
const skillImages = {
  React: reactImg,
  HTML: htmlImg,
  JavaScript: javascriptImg,
  CSS: cssImg,
  Tailwind: tailwindImg,
  Bootstrap: bootstrapImg,
  "Node.js": nodejsImg,
  Express: expressImg,
  Django: djangoImg,
  MongoDB: mongodbImg,
  MySQL: mysqlImg,
  Firebase: firebaseImg,
  Docker: dockerImg,
  Git: gitImg,
  "Data Structures and Algorithms": dsaImg,
  "Operating Systems": osImg,
  "Database Management Systems": dbmsImg,
  "Object Oriented Programming": oopImg,
  Python: pythonImg,
  "C++": cppImg,
  C: cImg,
  Go: goImg,
};

const Skills = () => {
  const name = "Skills";
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
          {name.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
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
      <div className="container mx-auto mt-12">
        {skills.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-400 rounded-lg p-4 flex justify-center items-center text-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="relative">
                    <span className="absolute text-xl text-black inset-0 flex justify-center items-center">
                      {skill.name}
                    </span>
                    <img
                      className="opacity-0 hover:opacity-100 transition-opacity duration-300"
                      src={skillImages[skill.name]}
                      alt={skill.name}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
