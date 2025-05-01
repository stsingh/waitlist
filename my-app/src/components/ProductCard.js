import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder image URL - replace with actual product images
const placeholderImg = 'https://via.placeholder.com/200x250.png/FFFEF2/706E67?text=Product'; 

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default values if product data is missing
  const {
    id,
    imageUrl = placeholderImg,
    name = 'Product Name',
    price = 20,
    originalPrice = 26,
    tags = ['Tag 1', 'Tag 2'],
    review = 'This is a sample review text. It worked well.'
  } = product || {};

  return (
    <motion.div
      key={id} // Ensure framer-motion tracks the card correctly
      className="relative flex flex-col items-center text-center p-4 rounded-lg bg-[#F9F8F4] shadow-md text-[#2B2B2B] font-sans"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout // Add layout animation for smoother transitions if needed
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-contain mb-3" 
      />

      {/* Product Info */}
      <h3 className="font-medium text-lg mb-1">{name}</h3>
      <p className="text-md">
        <span className="font-semibold">${price}</span>
        {originalPrice && <span className="line-through text-gray-500 ml-2">${originalPrice}</span>}
      </p>

      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-[#2B2B2B] bg-opacity-80 rounded-lg flex flex-col items-center justify-center p-4 text-[#FFFEF2]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {tags.map((tag, index) => (
                <span key={index} className={`px-2 py-0.5 rounded-full text-xs font-semibold ${index % 2 === 0 ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Review */}
            <p className="text-sm font-medium mb-1">Most Relevant Review:</p>
            <p className="text-xs italic text-center">"{review}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductCard; 