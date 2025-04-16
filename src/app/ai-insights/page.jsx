'use client';

import { motion } from 'framer-motion';
import ArticleSc from "../components/ai-insights/ArticleSc";
import InnerHero from "../components/common/sections/InnerHero";

export default function AIInsight() {
  return (
    <div>
      {/* Scroll-triggered animation for InnerHero */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }} // Animation triggered every time the element is in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }} // Triggers every time the element comes into the viewport
      >
        <InnerHero
          title="AI Tech & Insights"
          description="We revolutionize digital engagement with the world's first hyperrealistic, interactive AI platforms. From livestreaming to customer service, we're redefining human-AI interaction across industries."
          imageSrc="/images/ai-insights/ai-hero-img.png"
          imageAlt="AI Technology"
        />
      </motion.div>

      {/* ArticleSc is outside the motion.div */}
      <ArticleSc />
    </div>
  );
}
