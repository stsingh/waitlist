import React, { useEffect, useRef } from "react";

export const GradientBackground = () => {
  const containerRef = useRef(null);
  // Define image paths using absolute URLs relative to the /public folder
  const images = [
    '/images/products/AMADERM.png',      // Example path for img1 (assuming it exists)
    '/images/products/Balm.png',         // img2
    '/images/products/BodyWash.png',     // img3
    '/images/products/lotion.png',       // img4
    '/images/products/facecream.png',    // img5
    '/images/products/Grapefruit.png',   // img6
    '/images/products/green.webp',       // img7
    '/images/products/Nimue.png',        // img8
    '/images/products/purplecream.webp', // img9
    '/images/products/Retinoid.png',     // img10
    '/images/products/Retinol.png',      // img11
    '/images/products/SeaSalt.png'       // img12
    // Note: Added AMADERM.png as img1, adjust if needed
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getAnimationClass = (index) => {
    switch(index) {
      case 0: return 'animate-scroll-slow';
      case 1: return 'animate-scroll-medium';
      case 2: return 'animate-scroll-fast';
      default: return 'animate-scroll-slow';
    }
  };

  // Create columns with proper image distribution
  const columns = [
    [...images.slice(0, 4), ...images.slice(0, 4), ...images.slice(0, 4)], // Triple the images for seamless scrolling
    [...images.slice(4, 8), ...images.slice(4, 8), ...images.slice(4, 8)],
    [...images.slice(8, 12), ...images.slice(8, 12), ...images.slice(8, 12)]
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#FFFEF2] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          mask: "radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 30%, transparent 70%)",
          WebkitMask: "radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 30%, transparent 70%)"
        }}
      >
        <div className="grid grid-cols-3 gap-4 p-4 h-screen">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="relative overflow-hidden h-full">
              <div 
                className={`flex flex-col gap-4 absolute top-0 left-0 w-full ${getAnimationClass(colIndex)}`}
                style={{
                  willChange: 'transform'
                }}
              >
                {column.map((src, index) => (
                  <div key={index} className="w-full aspect-square">
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover opacity-20"
                      style={{ 
                        filter: 'brightness(0.9) sepia(1) hue-rotate(15deg) saturate(0.3)',
                        transform: 'translateZ(0)'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 