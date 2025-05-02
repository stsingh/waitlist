import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { ProductCard } from './ProductCard'; // Import the ProductCard

// Placeholder data - Replace with actual data structure and content
const productData = {
  'facial cleanser for oily skin': [
    { id: 'oil1', imageUrl: '/images/products/AMADERM.png', name: 'Amaderm Oily Cleanser', price: 22, originalPrice: 28, tags: ['Oily Skin', 'Clear Pore'], review: 'Great for my oily T-zone!' },
    { id: 'oil2', imageUrl: '/images/products/Grapefruit.png', name: 'Matte Finish Cleanser', price: 30, tags: ['Oily Skin', 'Lightweight'], review: 'Kept me matte all day.' },
    { id: 'oil3', imageUrl: '/images/products/SkinRefiner.png', name: 'Beauty Stat Face Wash', price: 18, originalPrice: 22, tags: ['Oily Skin', 'Balancing'], review: 'Reduced shine significantly.' },
  ],
  'moisturizer for dry skin': [
    { id: 'dry1', imageUrl: '/images/products/purplecream.webp', name: 'HydraBoost Cream', price: 35, tags: ['Dry Skin', 'Hydrating'], review: 'My skin feels so supple.' },
    { id: 'dry2', imageUrl: '/images/products/facecream.png', name: 'Rich Face Cream', price: 40, originalPrice: 50, tags: ['Dry Skin', 'Intense'], review: 'Perfect for winter dryness.' },
    { id: 'dry3', imageUrl: '/images/products/Balm.png', name: 'Gentle Hydrating Balm', price: 25, tags: ['Dry Skin', 'Soothing'], review: 'Doesn\'t strip my skin.' },
  ],
  'acne prone skin treatment': [
    { id: 'acne1', imageUrl: '/images/products/Retinoid.png', name: 'Gentle Retinoid Wash', price: 24, tags: ['Acne Prone', 'Exfoliating'], review: 'Helped clear my breakouts.' },
    { id: 'acne2', imageUrl: '/images/products/Retinol.png', name: 'Retinol Spot Treatment', price: 19, originalPrice: 25, tags: ['Acne Prone', 'Targeted'], review: 'Reduces pimple size overnight.' },
    { id: 'acne3', imageUrl: '/images/products/lotion.png', name: 'Non-Comedogenic Lotion', price: 28, tags: ['Acne Prone', 'Oil-Free'], review: 'Moisturizes without clogging pores.' },
  ],
};

const searchQueries = ['facial cleanser for oily skin', 'moisturizer for dry skin', 'acne prone skin treatment'];

export const ProductShown = () => {
  const [queryIndex, setQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentProducts, setCurrentProducts] = useState(productData[searchQueries[0]]);

  useEffect(() => {
    let timeout;
    let charIndex = 0;
    let currentQuery = searchQueries[queryIndex];
    let isErasing = false;
    const typingSpeed = 120;
    const erasingSpeed = 70;
    const pauseBeforeErase = 1500;
    const pauseBeforeType = 500;

    const animateText = () => {
      currentQuery = searchQueries[queryIndex]; // Ensure we use the latest query

      if (isErasing) {
        // Erasing phase
        if (charIndex > 0) {
          setDisplayedText(currentQuery.slice(0, charIndex - 1));
          charIndex--;
          timeout = setTimeout(animateText, erasingSpeed);
        } else {
          // Finished erasing, move to next query
          isErasing = false;
          const nextQueryIndex = (queryIndex + 1) % searchQueries.length;
          setQueryIndex(nextQueryIndex);
          // Update products *after* setting the new index
          setCurrentProducts(productData[searchQueries[nextQueryIndex]]); 
          timeout = setTimeout(animateText, pauseBeforeType);
        }
      } else {
        // Typing phase
        if (charIndex < currentQuery.length) {
          setDisplayedText(currentQuery.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(animateText, typingSpeed);
        } else {
          // Finished typing, pause then start erasing
          isErasing = true;
          timeout = setTimeout(animateText, pauseBeforeErase);
        }
      }
    };

    // Start the animation
    timeout = setTimeout(animateText, pauseBeforeType);

    // Cleanup function
    return () => clearTimeout(timeout);
  // Depend on queryIndex to restart animation when query changes programmatically
  }, [queryIndex]); 

  return (
    <div className="w-full py-16 px-4 flex flex-col items-center bg-[#FFFEF2]">
      {/* Animated Search Bar Display */}
      <div className="w-full max-w-2xl mx-auto mb-12">
        <div className="relative flex items-center">
          <div className="absolute left-4 text-[#706E67]">
            <Search size={20} />
          </div>
          <input
            type="text"
            value={displayedText}
            readOnly
            className="w-full py-3 pl-12 pr-4 text-[#706E67] bg-white border border-[#706E67] rounded-full focus:outline-none shadow-sm font-sans"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Product Grid Area */} 
      <div className="w-full max-w-5xl">
        <AnimatePresence mode='wait'> 
          {/* Use motion.div with a key that changes to trigger animation */}
          <motion.div
            key={queryIndex} // Change key when queryIndex changes
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductShown;
