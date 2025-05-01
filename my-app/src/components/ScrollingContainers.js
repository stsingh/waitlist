import { motion } from "framer-motion";
import React from 'react';

const items = [
  [
    "Cerave Hydrating Cleanser",
    "The Ordinary Niacinamide",
    "La Roche-Posay Sunscreen",
    "Paula's Choice BHA Exfoliant",
    "Kiehl's Ultra Facial Cream",
    "SkinCeuticals C E Ferulic"
  ],
];

// --- Create a new component for individual items --- 
const ScrollItem = ({ item, itemKey }) => {
  // Decide check/X randomly for this item instance, stable across re-renders
  const showCheck = React.useMemo(() => Math.random() > 0.5, []); // Now called at top level

  return (
    <div
      key={itemKey} // Use the key passed down
      className="bg-[#F9F8F4] text-[#2B2B2B] rounded-lg shadow p-4 flex items-center justify-start min-h-[80px] w-full"
    >
      <span className={`mr-3 font-bold text-xl ${showCheck ? 'text-green-500' : 'text-red-500'}`}>
        {showCheck ? '✓' : '✕'}
      </span>
      <span className="flex-grow text-center">{item}</span>
    </div>
  );
};
// --- End of ScrollItem component ---

const COLUMN_HEIGHT = 400; // Set to match your container height

const InfiniteScrollColumn = ({ children, delay = 0 }) => (
  <motion.div
    className="flex flex-col space-y-4"
    style={{ height: COLUMN_HEIGHT * 2 }} // double for seamless looping
    animate={{
      y: [0, -COLUMN_HEIGHT],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 8,
      ease: "linear",
      delay,
    }}
  >
    {/* Duplicate content for seamless loop */}
    {children}
    {children}
  </motion.div>
);

export default function InfiniteScrollGrid() {
  return (
    <div className="w-3/4 h-3/4 max-w-5xl mx-auto overflow-hidden  p-8">
      <div className="grid grid-cols-4 gap-6 h-[400px] w-[1400px]">
        {items.map((colItems, idx) => (
          <div key={idx} className="overflow-none h-full">
            <InfiniteScrollColumn delay={idx * 2}>
              {/* Render the new ScrollItem component */}
              {colItems.map((item, i) => (
                <ScrollItem key={i} item={item} itemKey={i} />
              ))}
            </InfiniteScrollColumn>
          </div>
        ))}
      </div>
    </div>
  );
}
