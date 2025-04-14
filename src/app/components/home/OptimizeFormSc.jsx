'use client';

import OptimizeForm from "./OptimizeForm";

const OptimizeFormSc = () => {
  return (
    <section className="OptimizeFormSc">
      <div className="container">
        <h2>Optimize Strategy with AI</h2>
        <p>
          Receive a tailored AI analysis of your social media presence and advertising efforts.
          This in-depth evaluation will provide insights into how your content and ads are performing,
          helping you identify areas for improvement and optimize your strategy for better engagement and results.
        </p>
        <OptimizeForm/>
      </div>
    </section>
  );
};

export default OptimizeFormSc;
