'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const GrowTogether = () => {
  return (
    <motion.section
      className="GrowTogether"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.div
          className="GrowTogether-wrap"
          style={{ backgroundImage: 'url(/images/grow-bg.png)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Let’s Grow Together</h2>
          <p>
            Book a free call today and discover how AI can revolutionize your marketing strategy.
            From smarter campaigns to personalized customer experiences, let artificial intelligence
            take your brand to the next level
          </p>
          <Link href="/contact" className="btn-main">
            Schedule Your Strategy Call
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GrowTogether;
