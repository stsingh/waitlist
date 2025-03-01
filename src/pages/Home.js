import React from 'react';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { EmailForm } from '../components/EmailForm';
import { Navbar } from '../components/Navbar';
import { ProductSection } from '../components/ProductSection';

const Home = () => {
  return (
    <div className="relative">
      <GradientBackground />
      <Navbar />
      
      {/* Hero/Waitlist Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <AnimatedTitle />
          <p className="text-2xl text-black mb-8 italic">
            Find the Best Skincare in Seconds — Backed by Real Reviews, Not Hype.
          </p>
          <EmailForm />
          <div className="pt-6">
            <a
              href="https://forms.gle/hn2KxiBi91prkvYg6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-black border-2 border-[#c9b59b] rounded-lg 
                       hover:bg-black hover:text-white transition-all duration-300"
            >
              Take Our Survey
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      {/* <section id="products">
        <ProductSection />
      </section> */}
    </div>
  );
};

export default Home; 