import React, { useEffect, useRef } from "react";
import img1 from '../back_imgs/AMADERM.png';
import img2 from '../back_imgs/Balm.png';
import img3 from '../back_imgs/BodyWash.png';
import img4 from '../back_imgs/lotion.png';
import img5 from '../back_imgs/facecream.png';
import img6 from '../back_imgs/Grapefruit.png';
import img7 from '../back_imgs/green.webp';
import img8 from '../back_imgs/Nimue.png';
import img9 from '../back_imgs/purplecream.webp';
import img10 from '../back_imgs/Retinoid.png';
import img11 from '../back_imgs/Retinol.png';
import img12 from '../back_imgs/SeaSalt.png';

export const GradientBackground = () => {
  const containerRef = useRef(null);
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
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
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#EDDAC5] overflow-hidden">
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