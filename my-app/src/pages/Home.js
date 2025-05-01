import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax'; // Import Parallax component
import { ChevronRight } from 'react-feather'; // Import arrow icon
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

  // Handler for progress changes from the Parallax component
  const handleProgressChange = useCallback((progress) => {
    const currentProgress = progress; // Use progress from callback
    const baseOpacity = 0.1; // Faint visibility
    const fullOpacity = 1.0; // Fully visible
    const fadeRange = 0.1; // How much progress range for fade (e.g., 0.05 before/after center)
    const fadeOutThreshold = 0.75; // Progress point after which arrows fade out

    // --- FaceScan Progress --- 
    const fsStart = 0.25; // Center point for FaceScan transition
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

    // Arrow 1 (between item 1 and 2) - fades around 0.25 progress
    const arrow1Center = 0.17;
    const arrow1Start = arrow1Center - fadeRange / 2;
    const arrow1End = arrow1Center + fadeRange / 2;
    if (currentProgress >= arrow1Start && currentProgress <= arrow1End) {
      const progressInRange = (currentProgress - arrow1Start) / fadeRange;
      calculatedArrow1Opacity = baseOpacity + (fullOpacity - baseOpacity) * progressInRange;
    } else if (currentProgress > arrow1End) {
      calculatedArrow1Opacity = fullOpacity;
    }

    // Arrow 2 (between item 2 and 3) - fades around 0.5 progress
    const arrow2Center = 0.5;
    const arrow2Start = arrow2Center - fadeRange / 2;
    const arrow2End = arrow2Center + fadeRange / 2;
    if (currentProgress >= arrow2Start && currentProgress <= arrow2End) {
      const progressInRange = (currentProgress - arrow2Start) / fadeRange;
      calculatedArrow2Opacity = baseOpacity + (fullOpacity - baseOpacity) * progressInRange;
    } else if (currentProgress > arrow2End) {
      calculatedArrow2Opacity = fullOpacity;
    }

    // Arrow 3 (between item 3 and 4) - fades around 0.75 progress
    const arrow3Center = 0.75;
    const arrow3Start = arrow3Center - fadeRange / 2;
    const arrow3End = arrow3Center + fadeRange / 2;
    if (currentProgress >= arrow3Start && currentProgress <= arrow3End) {
      const progressInRange = (currentProgress - arrow3Start) / fadeRange;
      calculatedArrow3Opacity = baseOpacity + (fullOpacity - baseOpacity) * progressInRange;
    } else if (currentProgress > arrow3End) {
      calculatedArrow3Opacity = fullOpacity;
    }

    // --- Final Fade Out Check ---
    if (currentProgress >= fadeOutThreshold) {
      // If past the fade-out point, override to base opacity
      calculatedArrow1Opacity = baseOpacity;
      calculatedArrow2Opacity = baseOpacity;
      calculatedArrow3Opacity = baseOpacity;
    }

    // --- Update State --- 
    setArrow1Opacity(calculatedArrow1Opacity);
    setArrow2Opacity(calculatedArrow2Opacity);
    setArrow3Opacity(calculatedArrow3Opacity);
  }, []); // Empty dependency array, relies on progress passed by callback

  return (
    
    <div className="relative">
      <GradientBackground />
      <Navbar />
      
      {/* Section 1: Hero/Waitlist */}
      <section id="hero" className="relative w-full mt-40 h-1/3 flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* <AnimatedTitle /> */}
          <p className="text-2xl text-black mb-8 italic">
            Find <u>Your</u> Perfect Skincare in Seconds — Backed by Real Reviews, Not Hype.
          </p>
        </div>
      </section>

      {/* Section 3: Product Recommendations Demo */}
      <section id="product-demo" className="w-full mb-60">
        <ProductShown />
      </section>


      {/* About Section - Parallax Horizontal Scroll */}
      {/* Increased height drives the parallax effect over a longer vertical scroll */}
      <section id="about" ref={aboutRef} className="relative w-full min-h-[400vh] flex flex-col items-center justify-start text-center">
        <div className="w-full max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold">Get Recommendations Quick</h1>
        </div>

        {/* Sticky container pins the scrolling viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Wrap the track with the Parallax component */}
          <Parallax
            className="h-1/2" // Apply height to the wrapper
            targetElement={aboutRef.current}
            translateX={['100%', '-310%']}
            onProgressChange={handleProgressChange}
          >
            {/* Inner div is now just for layout, no ref needed */}
            <div className="pt-[215px] flex w-[400%]">
              {/* Item 1 */}
              <motion.div className="flex-none flex-row mx-[105px] w-[800px] h-[300px] bg-[#FFFEF2] p-8 flex items-center justify-center">
                <h2 className="text-2xl font-semibold mb-4 items-start">How To Use Our Platform?</h2>
              </motion.div>

              {/* Item 2 - Face Scan */}
              <motion.div className="flex-none flex-row mx-[105px] w-[800px] h-[300px] bg-[#FFFEF2] p-8 flex items-center justify-center">
                <h2 className="text-2xl font-semibold mb-4 items-start">Use our AI to scan your skin</h2>
                <div className="w-[300px] h-[400px]">
                  <FaceScan progress={faceScanProgress} /> 
                </div>
              </motion.div>

              {/* Item 3 - Scrolling Containers */}
              <motion.div className="flex-none mx-[105px] w-[800px] h-[300px] bg-[#FFFEF2] p-8 flex flex-row items-center">
                <h2 className="text-2xl font-semibold align-center">Then put in products you've used in the past</h2>
                {/* <div className="w-full h-3/4 flex items-center justify-center"> */}
                   <ScrollingContainers />
                {/* </div> */}
              </motion.div>

              {/* Item 4 - Search Bar */}
              <motion.div className="flex-none flex-row mx-[105px] w-[800px] h-[300px] bg-[#FFFEF2] p-8 flex items-center justify-center">
                <h2 className="text-2xl font-semibold mb-4">Now use our AI to get recommendations</h2>
                <div className="w-[450px] h-[250px] flex items-center justify-center">
                  <SearchBar />
                </div>
              </motion.div>
            </div>
          </Parallax>

          {/* --- Arrows --- */}
          <ChevronRight 
            className="absolute top-[360px] right-4 md:right-8 -translate-y-1/2 text-[#706E67] pointer-events-none transition-opacity duration-300"
            size={48} 
            style={{ opacity: arrow1Opacity }}
          />
           {/* Arrow 2 */}
           <ChevronRight 
            className="absolute top-[360px] right-4 md:right-8 -translate-y-1/2 text-[#706E67] pointer-events-none transition-opacity duration-300"
            size={48} 
            style={{ opacity: arrow2Opacity }}
          />
          {/* Arrow 3 */}
          <ChevronRight 
            className="absolute top-[360px] right-4 md:right-8 -translate-y-1/2 text-[#706E67] pointer-events-none transition-opacity duration-300"
            size={48} 
            style={{ opacity: arrow3Opacity }}
          />
          {/* --- End Arrows --- */}

        </div>
      </section>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <div className="flex flex-col w-full h-1/2 mb-32 items-center justify-center">
            <h1 className="text-4xl font-bold">Join Our Waitlist!</h1>
          </div>
          <div className="flex flex-col w-full my-10 h-1/2 items-center justify-center">
            <EmailForm />
          </div>
          <section id="survey" className="flex flex-col items-center justify-center w-full">
            <div className="pt-6">
              <a
                href="https://forms.gle/hn2KxiBi91prkvYg6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-[#2B2B2B] border-2 border-[#706E67] rounded-lg 
                          hover:bg-[#2B2B2B] hover:text-[#FFFEF2] hover:border-[#2B2B2B] transition-all duration-300"
              >
                Take Our Survey
              </a>
            </div>
          </section>
        </div>
        {/* Section 4: Contact */}
        <div className="w-1/2 items-center justify-center">
          <ContactUs />
        </div>
      </div>

      <Footer /> {/* <-- Add Footer component here */}
    </div>
  );
};

export default Home; 