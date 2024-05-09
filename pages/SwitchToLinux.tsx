import React, { useRef, useState } from 'react';
import HeroSection from './HeroSection';
import Convince from './Convince';
import Comparison from './Comparison';

const SwitchToLinux = () => {
    // Create references for Convince and Comparison sections
    const convinceSectionRef = useRef<HTMLDivElement | null>(null);
    const comparisonSectionRef = useRef<HTMLDivElement | null>(null);

    // State to track whether the user agreed to switch
    const [agreed, setAgreed] = useState(false);

    // Function to scroll to Convince section when the arrow is clicked in HeroSection
    const handleArrowClick = () => {
        if (convinceSectionRef.current) {
            convinceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to scroll to Comparison section when the arrow is clicked in Convince
    const handleComparisonArrowClick = () => {
        if (comparisonSectionRef.current) {
            comparisonSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <HeroSection onArrowClick={handleArrowClick} />
            <Convince
                ref={convinceSectionRef}
                agreed={agreed}
                onAgree={() => setAgreed(true)}
                onComparisonArrowClick={handleComparisonArrowClick} // Pass function to Convince
            />
            <Comparison ref={comparisonSectionRef} />
        </div>
    );
};

export default SwitchToLinux;
