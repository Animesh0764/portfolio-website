import '../assets/css/Projects.css'
import { motion } from 'framer-motion';
import projects from '../data/projects.json';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Projects = () => {

    const name = 'Projects';
    const links = [
        { to: '/', text: 'Home' },
        { to: '/skills', text: 'Skills'},
        { to: '/contact', text: 'Contact' },
    ]

    const sentence = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.65,
                staggerChildren: 0.08
            },
        },
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

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
            <div className='flex items-center justify-between ml-8 mr-16'>
                <motion.h1
                    id="title"
                    className='title md:text-6xl sm:text-4xl text-3xl font-switzer mb-8 mx-20 my-20 relative transition duration-1000 ease-in-out'
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {name.split("").map((char, index) => {
                        return (
                            <motion.span
                                key={char + "-" + index}
                                variants={letter}
                            >
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
            {/* <motion.hr
                className="hr-style ml-40"
                variants={hrVariants}
                initial="hidden"
                animate="visible"
            /> */}
            <div className="flex flex-wrap justify-evenly mt-8 ml-2 mr-2">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Card
                            title={project.title}
                            description={project.description}
                            readMoreLink={project.readMoreLink}
                            contribution={project.contribution}
                            time={project.time}
                            githubLink={project.githubLink}
                            websiteLink={project.websiteLink}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects;