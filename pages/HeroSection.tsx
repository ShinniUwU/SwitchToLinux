import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

interface HeroSectionProps {
    onArrowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onArrowClick }) => {
    return (
        <div className="bg-black text-white h-screen flex flex-col justify-center items-center px-6 lg:px-8">
            {/* Header (optional) */}
            <header className="absolute inset-x-0 top-0 z-50">
                {/* You can add any header content here */}
            </header>

            {/* Content section */}
            <div className="relative isolate px-6 pt-14 lg:px-8 max-w-screen-lg mx-auto">
                {/* Top gradient background */}
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                {/* Main content area */}
                <div className="relative flex flex-col-reverse lg:flex-row justify-center items-center mx-auto py-32 sm:py-48 lg:py-56 lg:max-w-4xl">
                    {/* Text content */}
                    <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-6xl font-bold mb-6"
                        >
                            Switch to Linux
                        </motion.h1>
                        
                        {/* Container for the typing animation */}
                        <div className="max-w-xs lg:max-w-sm">
                            <TypeAnimation
                                sequence={[
                                    'Experience the freedom of Linux.',
                                    2000,
                                    '',
                                    500,
                                    'Enjoy seamless security and performance.',
                                    2000,
                                    '',
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                className="text-2xl mt-4 "
                            />
                        </div>
                    </div>

                    {/* Tux image */}
                    <div className="lg:w-1/2 lg:pl-8 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <Image
                            src="/Tux.png"
                            alt="Picture of Tux"
                            width={240}
                            height={240}
                            className="rounded-full"
                        />
                    </div>
                </div>

                {/* Bottom gradient background */}
                <div
                    className="absolute inset-x-0 top=[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top=[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left=[calc(50%+3rem)] aspect=[1155/678] w=[36.125rem] -translate-x-1/2 bg-gradient-to-tr from=[#ff80b5] to=[#9089fc] opacity-30 sm:left=[calc(50%+36rem)] sm:w=[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            {/* Bouncing down arrow */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="mt-8 flex justify-center"
            >
                <FaArrowDown
                    className="text-4xl text-white cursor-pointer"
                    onClick={onArrowClick}
                />
            </motion.div>
        </div>
    );
};

export default HeroSection;
