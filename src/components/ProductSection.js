// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { ChevronRight } from "react-feather";

// gsap.registerPlugin(ScrollTrigger);

// export const ProductSection = () => {
//   const sectionRef = useRef(null);
//   const sliderRef = useRef(null);
//   const arrowRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Section reveal animation
//       gsap.from(sectionRef.current, {
//         backgroundColor: "transparent",
//         duration: 2,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "center center",
//           scrub: true,
//           onEnter: () => {
//             gsap.to(arrowRef.current, { opacity: 1, duration: 0.3 });
//           },
//           onLeaveBack: () => {
//             gsap.to(arrowRef.current, { opacity: 0, duration: 0.3 });
//           }
//         },
//       });

//       // Horizontal scroll animation
//       if (sliderRef.current) {
//         const slides = Array.from(sliderRef.current.children);
//         const totalWidth = slides.length * 200; // Increased scroll distance
        
//         gsap.to(slides, {
//           xPercent: -100 * (slides.length - 1),
//           ease: "none",
//           scrollTrigger: {
//             trigger: sliderRef.current,
//             start: "top top",
//             end: `+=${totalWidth}%`,
//             scrub: 1,
//             pin: true,
//           },
//         });

//         // Animate arrow
//         gsap.to(arrowRef.current, {
//           x: 20,
//           repeat: -1,
//           yoyo: true,
//           duration: 1,
//         });

//         // Animate content for each slide
//         slides.forEach((slide) => {
//           const image = slide.querySelector(".slide-image");
//           const content = slide.querySelector(".slide-content");
//           const text = slide.querySelector("p");

//           if (image) {
//             gsap.from(image, {
//               x: -100,
//               opacity: 0,
//               scrollTrigger: {
//                 trigger: slide,
//                 start: "left center",
//                 end: "center center",
//                 scrub: true,
//               },
//             });
//           }

//           if (content) {
//             gsap.from(content, {
//               x: 100,
//               opacity: 0,
//               scrollTrigger: {
//                 trigger: slide,
//                 start: "left center",
//                 end: "center center",
//                 scrub: true,
//               },
//             });
//           }

//           if (text) {
//             const chars = text.textContent?.split("") || [];
//             text.textContent = "";
//             chars.forEach((char, i) => {
//               const span = document.createElement("span");
//               span.textContent = char;
//               span.style.opacity = "0";
//               text.appendChild(span);
//               gsap.to(span, {
//                 opacity: 1,
//                 duration: 0.1,
//                 delay: 0.02 * i,
//                 scrollTrigger: {
//                   trigger: slide,
//                   start: "left center",
//                   end: "center center",
//                   scrub: true,
//                 },
//               });
//             });
//           }
//         });
//       }
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={sectionRef} className="bg-black text-white">
//       <div
//         ref={arrowRef}
//         className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 text-white opacity-0 transition-opacity duration-300"
//       >
//         <ChevronRight size={48} />
//       </div>
//       <div ref={sliderRef} className="flex overflow-x-hidden">
//         <div className="min-w-full min-h-screen flex items-center shrink-0">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center gap-24">
//               <div className="w-full md:w-1/3">
//                 <div className="bg-gray-200 w-[400px] h-[300px] rounded-lg shadow-2xl slide-image" />
//               </div>
//               <div className="w-full md:w-2/3 space-y-8 slide-content">
//                 <h2 className="text-5xl font-bold font-['Poppins']">
//                   Advanced Skincare Formula
//                 </h2>
//                 <p className="text-xl text-gray-300 leading-relaxed">
//                   Our AI-powered formula adapts to your skin's unique needs,
//                   providing personalized care that evolves with you.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="min-w-full min-h-screen flex items-center shrink-0">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center gap-24">
//               <div className="w-full md:w-1/3">
//                 <div className="bg-gray-200 w-[400px] h-[300px] rounded-lg shadow-2xl slide-image" />
//               </div>
//               <div className="w-full md:w-2/3 space-y-8 slide-content">
//                 <h2 className="text-5xl font-bold font-['Poppins']">
//                   Personalized Treatment
//                 </h2>
//                 <p className="text-xl text-gray-300 leading-relaxed">
//                   Experience skincare that's uniquely yours, powered by advanced
//                   AI technology that understands and adapts to your skin's needs.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }; 