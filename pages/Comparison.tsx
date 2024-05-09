import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Comparison = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div
            ref={ref}
            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 px-6 lg:px-8 h-screen flex flex-col justify-center items-center"
        >
            {/* Animated heading */}
            <motion.h2
                className="text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                FPS & Performance Comparison
            </motion.h2>

            {/* Animated paragraph */}
            <motion.p
                className="text-lg mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Check out this <a href="https://www.reddit.com/r/pcgaming/comments/17jejzf/linux_vs_windows_gaming_benchmarks_in_10_games/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Reddit post</a> comparing gaming benchmarks between Linux and Windows. 
                Linux outperforms Windows in many games!
            </motion.p>

            {/* Animated comparison list */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <ul className="space-y-4 text-lg">
                    <li className="flex items-center">
                        <FaCheckCircle className="mr-2 text-green-400" />
                        <span>Linux offers, on average, 17% faster performance in games.</span>
                    </li>
                    <li className="flex items-center">
                        <FaCheckCircle className="mr-2 text-green-400" />
                        <span>Better support for Vulkan, a popular graphics API for modern games.</span>
                    </li>
                    <li className="flex items-center">
                        <FaCheckCircle className="mr-2 text-green-400" />
                        <span>Improved performance on older hardware and a wide range of systems.</span>
                    </li>
                    <li className="flex items-center">
                        <FaCheckCircle className="mr-2 text-green-400" />
                        <span>No DRM or anti-cheat issues that can impact gaming performance.</span>
                    </li>
                    <li className="flex items-center">
                        <FaCheckCircle className="mr-2 text-green-400" />
                        <span>Enhanced controller support for a seamless gaming experience.</span>
                    </li>
                </ul>
            </motion.div>

            {/* Animated link to ProtonDB */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10"
            >
                <a
                    href="https://www.protondb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-400 hover:underline"
                >
                    Check if your Steam games are supported here &rarr;
                </a>
            </motion.div>
        </div>
    );
});

Comparison.displayName = 'Comparison';

export default Comparison;
