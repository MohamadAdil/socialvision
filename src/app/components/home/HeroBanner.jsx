"use client";

import Link from "next/link";
import BrandSlider from "./BrandSlider";

export default function HeroBanner() {
  return (
    <section className="HeroBanner" style={{ backgroundImage: 'url(/images/HeroBanner.png)' }}>
      <div className="container">
        <div className="heading-wrap">
          <h1>Supercharge Your Brand with AI-Driven Marketing</h1>
          <p>We help hospitality and service businesses grow with tailored AI marketing strategies</p>
          <div className="button-wrap">
            <Link href="#" className="btn-main">Book Your Free AI Audit</Link>
          </div>
        </div>
        <BrandSlider />
      </div>
    </section>
  );
}
