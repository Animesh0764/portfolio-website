import { Link } from 
'react-router-dom';
import '../assets/css/Home.css'
import { motion } from 'framer-motion';

const Home = () => {

    //just change these
    const name = 'Animesh Singh';

    const links = [
        { to: '/projects', text: 'Projects' },
        { to: '/skills', text: 'Skills'},
        { to: '/contact', text: 'Contact' },
    ]

    const info = "Full-stack developer and Competitive Programmer. Passionate about Cloud Computing and DevOps"
    const info2 = "Let's connect!"

    const subtitle = 'Made with 💖 by yours truly'

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

    return (
        <div className="hero-section flex flex-col justify-center items-center h-screen">
            <motion.div
                className="links flex justify-around items-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
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
            <motion.h1
                id="title"
                className='title md:text-8xl sm:text-6xl text-4xl font-pinkfloryn my-4 relative transition duration-1000 ease-in-out'
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
            <motion.p
                className='subtitle sm:text-sm md:text-xl text-xs my-4 relative'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 1 }}
            >
                {info}
            </motion.p>
            <motion.p
                className='subtitle sm:text-xl md:text-2xl text-xs my-4 relative'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 1 }}
            >
                {info2}
            </motion.p>
            <motion.p
                className='subtitle sm:text-sm md:text-xl text-xs my-4 relative px-4 text-center'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 1 }}
            >
                {subtitle}
            </motion.p>
        </div>
    );
}

export default Home;