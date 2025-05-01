import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="w-full py-6 px-4 bg-[#FFFEF2] text-[#706E67] border-t border-[#E0DED7]">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>&copy; {currentYear} SARAS. All rights reserved.</p>
        {/* You can add more links or information here if needed */}
        {/* Example: */}
        {/* <div className="mt-2 space-x-4">
          <a href="/privacy" className="hover:text-[#2B2B2B]">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#2B2B2B]">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 