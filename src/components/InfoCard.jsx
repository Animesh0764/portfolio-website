import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as IconComponents from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";

const InformationCard = ({ title, url, name, icon }) => {

    let IconComponent;

    if (icon === 'SiLeetcode') {
        IconComponent = SiLeetcode;
    } else {
        IconComponent = IconComponents[icon];
    }

    return (
        <Link to={url} target="_blank" rel="noopener noreferrer">
            <motion.div
                className="w-80 bg-gradient-to-br from-gray-1000 to-gray-800 border border-gray-700 shadow-lg rounded-lg overflow-hidden mx-auto my-8 shadow-zinc-500 transform transition duration-300 hover:scale-105 relative"
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)' }}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                style={{ height: '250px' }}
            >
                <div className="p-8 flex flex-col justify-center items-center h-full">
                    {IconComponent && <IconComponent className="text-white text-3xl mb-4" />}
                    <h2 className="text-3xl font-semibold text-white mb-4 text-center">{title}</h2>
                    <p className="text-gray-400 text-xl text-center">{name}</p>
                </div>
            </motion.div>
        </Link>
    );
};

export default InformationCard;
