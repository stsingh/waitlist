import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax'; // Import Parallax component
import { ChevronRight, ChevronDown } from 'react-feather'; // Import arrow icons
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { EmailForm } from '../components/EmailForm';
import { Navbar } from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import ScrollingContainers from '../components/ScrollingContainers';
import FaceScan from '../components/FaceScan';
import SearchBar from '../components/Searchbar';
import ProductShown from '../components/ProductShown'; // Import the new component
import Footer from '../components/Footer'; // <-- Import Footer

const Home = () => {
  const aboutRef = useRef(null); // Ref for the entire about section
  const [faceScanProgress, setFaceScanProgress] = useState(0);
  const [arrow1Opacity, setArrow1Opacity] = useState(0.2);
  const [arrow2Opacity, setArrow2Opacity] = useState(0.2);
  const [arrow3Opacity, setArrow3Opacity] = useState(0.2);

  const handleProgressChange = useCallback((progress) => {
    const currentProgress = progress;
    const baseOpacity = 0.1;
    const fullOpacity = 1.0;
    const fadeRange = 0.1;
    const fadeOutThreshold = 0.95; // Adjusted threshold

    // --- FaceScan Progress --- 
    const fsStart = 0.3;
    const fsEnd = 0.45;
    let scanProgress = 0;
    if (currentProgress >= fsStart && currentProgress <= fsEnd) {
      scanProgress = (currentProgress - fsStart) / (fsEnd - fsStart);
    } else if (currentProgress > fsEnd) {
      scanProgress = 1;
    }
    setFaceScanProgress(scanProgress);

    // --- Arrow Opacity Calculation --- 
    let calculatedArrow1Opacity = baseOpacity;
    let calculatedArrow2Opacity = baseOpacity;
    let calculatedArrow3Opacity = baseOpacity;

    const arrow1Center = 0.25; // Adjusted center for 0%-based range
    const arrow1Start = arrow1Center - fadeRange / 2;
    const arrow1End = arrow1Center + fadeRange / 2;
    if (currentProgress >= arrow1Start && currentProgress <= arrow1End) {
      const progressInRange = (currentProgress - arrow1Start) / fadeRange;
      calculatedArrow1Opacity = baseOpacity + (fullOpacity - baseOpacity) * progressInRange;
    } else if (currentProgress > arrow1End) {
      calculatedArrow1Opacity = fullOpacity;
    }

    const arrow2Center = 0.5;
    const arrow2Start = arrow2Center - fadeRange / 2;
    const arrow2End = arrow2Center + fadeRange / 2;
    if (currentProgress >= arrow2Start && currentProgress <= arrow2End) {
      const progressInRange = (currentProgress - arrow2Start) / fadeRange;
      calculatedArrow2Opacity = baseOpacity + (fullOpacity - baseOpacity) * progressInRange;
    } else if (currentProgress > arrow2End) {
      calculatedArrow2Opacity = fullOpacity;
    }

    const arrow3Center = 0.75;
    const arrow3Start = arrow3Center - fadeRange / 2;
    const arrow3End = arrow3Center + fadeRange / 2;
    if (currentProgress >= arrow3Start && currentProgress <= arrow3End) {
      const progressInRange = (currentProgress - arrow3Start) / fadeRange;
      calculatedArrow3Opacity = baseOpacity + (fullOpacity - baseOpacity) * progressInRange;
    } else if (currentProgress > arrow3End) {
      calculatedArrow3Opacity = fullOpacity;
    }

    if (currentProgress >= fadeOutThreshold) {
      calculatedArrow1Opacity = baseOpacity;
      calculatedArrow2Opacity = baseOpacity;
      calculatedArrow3Opacity = baseOpacity;
    }

    setArrow1Opacity(calculatedArrow1Opacity);
    setArrow2Opacity(calculatedArrow2Opacity);
    setArrow3Opacity(calculatedArrow3Opacity);
  }, []); // Dependency array is now empty

  // --- Define Parallax Item Content Separately --- 
  const parallaxItems = [
    (
      <div key="item1" className="bg-[#FFFEF2] p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto flex flex-col items-center justify-center min-h-[500px] max-h-[500px]">
        <h2 className="text-3xl font-semibold mb-4 text-center">How To Use Our Platform?</h2>
      </div>
    ),
    (
      <div key="item2" className="bg-[#FFFEF2] p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto flex flex-col items-center justify-start min-h-[500px]">
        <h2 className="text-3xl font-semibold text-center">Use our AI to scan your skin</h2>
        <div className="w-full h-full flex items-center justify-center">
          <FaceScan progress={faceScanProgress} />
        </div>
      </div>
    ),
    (
      <div key="item3" className="bg-[#FFFEF2] p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto flex flex-col items-center justify-center min-h-[500px] max-h-[500px]">
        <h2 className="text-3xl font-semibold mb-4 text-center">Then put in products you've used in the past</h2>
        <div className="w-full h-[250px]">
          <ScrollingContainers />
        </div>
      </div>
    ),
    (
      <div key="item4" className="bg-[#FFFEF2] p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto flex flex-col items-center justify-center min-h-500px] max-h-[500px]">
        <h2 className="text-3xl font-semibold mb-4 text-center">Now use our AI to get recommendations</h2>
        <div className="w-full max-w-md h-[350px] flex items-center justify-center">
          <SearchBar />
        </div>
      </div>
    ),
  ];

  return (
    
    <div className="relative">
      <GradientBackground />
      <Navbar />
      
      {/* --- Wrapper for Hero and Product Demo --- */}
      <div className="flex flex-col md:flex-row md:items-center md:min-h-screen pt-16 md:pt-0"> {/* Responsive flex layout */} 
       
        {/* Section 1: Hero/Waitlist - Now Left Side on Desktop */}
        <section id="hero" className="relative w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-8 md:p-12 text-center md:text-left">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* <AnimatedTitle /> */} 
            <p className="text-5xl md:text-5xl font-bold text-black mb-6"> {/* Larger text */} 
              Find <u>Your</u> Perfect Skincare in Seconds.
            </p>
            <p className="text-lg md:text-xl text-[#706E67] mb-6 italic">
              We use <u>real</u> user reviews along with <u>your</u> skin type to give you <u>unbiased</u> recommendations. 
            </p>
          </div>
          <div className="w-full mt-6 flex justify-center md:justify-start max-w-md mx-auto md:mx-0">
              <button
                onClick={() => document.getElementById('waitlist-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 text-[#FFFEF2] bg-[#2B2B2B] border-2 border-[#2B2B2B] rounded-lg 
                           hover:bg-opacity-90 hover:border-opacity-90 transition-all duration-300
                           text-lg font-semibold" // Added text size and weight
              >
                Join Waitlist
              </button>
          </div>
        </section>

        {/* Section 2: Product Recommendations Demo - Now Right Side on Desktop */}
        <section id="product-demo" className="w-full mr-8 md:w-1/2 py-12">
          <ProductShown />
        </section>
       
      </div>
      {/* --- End Wrapper --- */}

      {/* Section 3: About - Now Responsive via Tailwind */}
      <section id="about" ref={aboutRef} className="relative w-full flex flex-col items-center justify-start text-center py-12 md:py-24 md:min-h-[400vh]"> 
        <div className="w-full max-w-4xl mx-auto mb-12 px-4">
          <h1 className="text-9xl font-bold">No Noise. Just <b>Truth</b>.</h1>
        </div>

        {/* --- DESKTOP: PARALLAX LAYOUT --- */}
        <div className="hidden md:sticky md:top-0 md:h-screen md:w-full md:overflow-hidden md:flex md:items-center">
          <Parallax
            className="h-auto"
            targetElement={aboutRef.current}
            translateX={['180%', '-445%']} // Use your tuned values
            onProgressChange={handleProgressChange}
          >
            <div className="flex w-[400%] h-full"> {/* Ensure track takes height */} 
              {parallaxItems.map((item, index) => (
                <div key={index} className="w-full md:w-1/4 h-full flex-shrink-0 p-8 md:p-12 flex flex-col items-center justify-center">
                  {item} 
                </div>
              ))}
            </div>
          </Parallax>
          
          {/* Arrows (only visible on medium+) */}
          <ChevronRight className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 text-[#706E67] pointer-events-none transition-opacity duration-300 hidden md:block" size={48} style={{ opacity: arrow1Opacity }}/>
          <ChevronRight className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 text-[#706E67] pointer-events-none transition-opacity duration-300 hidden md:block" size={48} style={{ opacity: arrow2Opacity }}/>
          <ChevronRight className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 text-[#706E67] pointer-events-none transition-opacity duration-300 hidden md:block" size={48} style={{ opacity: arrow3Opacity }}/>
        </div>

        {/* --- MOBILE: VERTICAL STACK LAYOUT --- */}
        <div className="block md:hidden w-full px-4 space-y-12 flex flex-col items-center">
          {parallaxItems.map((item, index) => (
            <div key={index} className="w-full">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Add flex classes to center content */}
      <div className="w-full h-full flex flex-col items-center py-12 md:py-24">
        <h1 className='text-9xl font-bold text-center my-32'>Skip the hype. See what works.</h1>
        <h1 className="text-4xl font-bold text-center text-[#706E67] mb-12">Follow Our Journey</h1>
        {/* Remove unnecessary flex classes from icon */}
        <ChevronDown className="mt-4 text-[#706E67] animate-pulse" size={110} />
      </div>

      {/* Section 4: Waitlist/Contact - Now Responsive */} 
      <div className="flex flex-col md:flex-row items-center justify-center py-12 md:py-24 px-4 space-y-12 md:space-y-0 md:space-x-8">
        {/* Left Side: Waitlist */} 
        <div id="waitlist-form-section" className="flex flex-col w-full md:w-1/2 items-center justify-center space-y-8">
          <h1 className="text-4xl font-bold text-center">Our Waitlist</h1>
          <EmailForm />
          {/* <section id="survey" className="flex flex-col items-center justify-center w-full">
            <a href="https://forms.gle/hn2KxiBi91prkvYg6" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 text-[#2B2B2B] border-2 border-[#706E67] rounded-lg hover:bg-[#2B2B2B] hover:text-[#FFFEF2] hover:border-[#2B2B2B] transition-all duration-300">
              Take Our Survey
            </a>
          </section> */}
        </div>
        {/* Right Side: Contact */}
        {/* <div className="w-full md:w-1/2 flex items-center justify-center">
          <ContactUs />
        </div> */}
      </div>

      <Footer /> {/* <-- Add Footer component here */}
    </div>
  );
};

export default Home; 