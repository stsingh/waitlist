import React, { useState } from "react";
import gsap from "gsap";
import { addToWaitlist } from "../firebase";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Typewriter effect
    const input = e.target;
    gsap.to(input, {
      keyframes: [
        { x: -3, duration: 0.05 },
        { x: 3, duration: 0.05 },
        { x: 0, duration: 0.05 }
      ],
      ease: "none"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ loading: true, error: null, success: false });

    try {
      const result = await addToWaitlist(email);
      if (result.success) {
        setStatus({ loading: false, error: null, success: true });
        setEmail("");
        // Show success animation
        gsap.to(e.target, {
          keyframes: [
            { scale: 1.02, duration: 0.1 },
            { scale: 1, duration: 0.1 }
          ],
        });
      } else {
        throw new Error("Failed to add to waitlist");
      }
    } catch (error) {
      setStatus({ loading: false, error: "Failed to join waitlist. Please try again.", success: false });
      // Show error animation
      gsap.to(e.target, {
        keyframes: [
          { x: -5, duration: 0.1 },
          { x: 5, duration: 0.1 },
          { x: 0, duration: 0.1 }
        ],
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type your email..."
          disabled={status.loading}
          className={`w-full px-4 py-2 text-lg bg-[#EDDAC5] transition-all duration-300
            ${isFocused || email ? 'border-2 border-black' : 'border-2 border-[#c9b59b]'}
            focus:outline-none rounded-lg placeholder-gray-500
            hover:border-black
            ${status.loading ? 'opacity-75' : ''}`}
          required
        />
        <button
          type="submit"
          disabled={status.loading}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2
                     px-4 py-1 text-black rounded-md
                     hover:bg-black hover:text-white transition-all duration-300
                     ${status.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {status.loading ? 'Joining...' : 'Join'}
        </button>
      </form>
      {status.error && (
        <p className="mt-2 text-red-500 text-sm">{status.error}</p>
      )}
      {status.success && (
        <p className="mt-2 text-green-600 text-sm">Successfully joined the waitlist!</p>
      )}
    </div>
  );
}; 