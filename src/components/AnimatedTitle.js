import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const AnimatedTitle = () => {
  const titleRef = useRef(null);
  const letters = 'SARAS'.split('');

  useEffect(() => {
    const tl = gsap.timeline();
    const letterElements = titleRef.current.children;

    gsap.set(letterElements, {
      y: 100,
      opacity: 0,
      rotateX: -90
    });

    tl.to(letterElements, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.1,
      transformOrigin: "50% 50% -50"
    });
  }, []);

  return (
    <h1 ref={titleRef} className="text-8xl font-bold tracking-wider perspective-1000">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block transform-style-3d"
          style={{ display: 'inline-block' }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}; 