import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, readMoreLink, contribution, time, githubLink, websiteLink }) => {
    return (
        <motion.div
            className="max-w-md bg-gray-1000 border-solid border-gray-900 shadow-lg rounded-md overflow-hidden mx-4 my-8 transform transition duration-300 hover:scale-105 shadow-zinc-500"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-300 text-base mb-4">{description}</p>
                <div className='flex items-center justify-between'>
                    <Link to={readMoreLink} className="text-blue-400 hover:text-blue-200 hover:underline mr-4">
                            Read more
                    </Link>
                    <div className='flex'>
                        <Link to={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mr-2">
                            <FaGithub className="text-2xl" />
                        </Link>
                        <Link to={websiteLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                            <FaGlobe className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 px-6 py-3 flex justify-between items-center">
                <div>
                    <span className="text-m text-gray-400">Contribution</span>
                    <span className="text-sm text-white ml-2">{contribution}</span>
                </div>
                <div>
                    <span className="text-m text-gray-400">Date</span>
                    <span className="text-sm text-white ml-2">{time}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
