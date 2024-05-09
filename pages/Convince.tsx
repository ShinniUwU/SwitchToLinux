import React from 'react';
import { FaCheckCircle, FaGamepad, FaUserFriends, FaLeaf } from 'react-icons/fa';
import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion';

interface ConvinceProps {
    agreed: boolean;
    onAgree: () => void;
    onComparisonArrowClick: () => void; 
}

const Convince = React.forwardRef<HTMLDivElement, ConvinceProps>((props, ref) => {
    const { agreed, onAgree, onComparisonArrowClick } = props; 

    return (
        <div ref={ref} className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center px-6 lg:px-8 overflow-y-auto">
            {!agreed ? (
                <>
                    <h2 className="text-4xl font-bold mb-6">Why Switch to Linux?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Freedom and Customization: Enjoy unparalleled control over your operating system.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Stability and Security: Linux's open-source nature and collaborative community make it a secure choice.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Cost-Effective: Linux is free, and many distros include free software packages.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Performance: Experience efficient handling of resources for superior performance.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Privacy: Linux protects your privacy with minimal data collection.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaGamepad className="text-blue-400 text-2xl mr-3" />
                            <span>Gaming Support: Play popular games with platforms like Steam and compatibility tools like Proton.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaUserFriends className="text-blue-400 text-2xl mr-3" />
                            <span>Community and Support: Benefit from a vibrant, helpful community and rich resources.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaLeaf className="text-blue-400 text-2xl mr-3" />
                            <span>Resource Efficiency: Extend the life of older hardware with Linux's efficient resource usage.</span>
                        </li>
                    </ul>

                    <button
                        className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                        onClick={onAgree}
                    >
                        Agree and Choose a Distro
                    </button>

                    {/* Section with gray text and bouncing arrow */}
                    <div className="mt-16 flex flex-col items-center justify-center w-full">
                        <p className="text-gray-400 text-xl mb-2">(Not convinced yet?)</p>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="mt-4 flex justify-center"
                        >
                            <FaArrowDown className="text-4xl text-white cursor-pointer" onClick={onComparisonArrowClick} /> {/* Add onClick handler */}
                        </motion.div>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">Choose a Linux Distro</h2>
                    <p className="text-lg mb-6">Here are some popular distributions to consider:</p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Ubuntu: User-friendly, perfect for beginners, and has a vast repository of software.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Fedora: Latest technology and cutting-edge features for tech enthusiasts.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Debian: Known for stability and reliability, suitable for servers and conservative users.</span>
                        </li>
                        <li className="flex items-center text-lg">
                            <FaCheckCircle className="text-blue-400 text-2xl mr-3" />
                            <span>Arch Linux: Ideal for advanced users who want full control over their system setup.</span>
                        </li>
                    </ul>

                    <p className="mt-6">
                        Need help choosing a distro? Visit{' '}
                        <a href="https://distrochooser.de/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                            DistroChooser
                        </a>{' '}
                        to find the perfect match for your needs.
                    </p>
                </div>
            )}
        </div>
    );
});

Convince.displayName = 'Convince';

export default Convince;
