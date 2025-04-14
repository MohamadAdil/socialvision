'use client';

import Testimonials from "../common/Testimonials";

const OurTestimonials = () => {
  return (
    <section className="OurTestimonials" style={{ backgroundImage: 'url(/images/testimonail-bg.png)' }}>
      <div className="container">
        <div className="heading-wrap">
          <span className="hd-border-line center">Our Testimonials</span>
          <h2>AI Customer Testimonials</h2>
        </div>
        <div className="reviews-wrap">
          {/* Testimonials content will go here */}
        </div>
        <Testimonials/>
      </div>
    </section>
  );
};

export default OurTestimonials;
