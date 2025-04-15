"use client";

import Link from "next/link";
import BrandSlider from "./BrandSlider";
import { GiRoundStar } from "react-icons/gi";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.section
      className="HeroBanner"
      style={{ backgroundImage: 'url(/images/herobanner.png)' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div
          className="heading-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Supercharge Your Brand with AI-Driven Marketing</h1>
          <p>We help hospitality and service businesses grow with tailored AI marketing strategies</p>
          <div className="button-wrap">
            <Link href="#" className="btn-main">Book Your Free AI Audit</Link>
          </div>
        </motion.div>

        <motion.div
          className="review-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="ra-star">
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
          </div>
          <p>4.9/5 From 3,602 Customers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <BrandSlider />
        </motion.div>
      </div>
    </motion.section>
  );
}
