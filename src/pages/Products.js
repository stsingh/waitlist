import React, { useEffect } from 'react';
import { ProductSection } from '../components/ProductSection';
import { Navbar } from '../components/Navbar';

const Products = () => {
  // useEffect(() => {
  //   // Scroll to top when navigating directly to products page
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="relative">
      {/* Products page is now integrated into Home page with scroll behavior */}
      {/* <Navbar />
      <section className="min-h-screen">
        <ProductSection />
      </section> */}
    </div>
  );
};

export default Products; 