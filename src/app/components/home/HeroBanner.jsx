"use client";

import Link from "next/link";
import BrandSlider from "./BrandSlider";
import { GiRoundStar } from "react-icons/gi";

export default function HeroBanner() {
  return (
    <section className="HeroBanner" style={{ backgroundImage: 'url(/images/herobanner.png)' }}>
      <div className="container">
        <div className="heading-wrap">
          <h1>Supercharge Your Brand with AI-Driven Marketing</h1>
          <p>We help hospitality and service businesses grow with tailored AI marketing strategies</p>
          <div className="button-wrap">
            <Link href="#" className="btn-main">Book Your Free AI Audit</Link>
          </div>
        </div>
        <div className="review-wrap">
          <div className="ra-star">
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
          </div>
          <p>4.9/5 From 3,602 Customers</p>
        </div>
        <BrandSlider />
      </div>
    </section>
  );
}
