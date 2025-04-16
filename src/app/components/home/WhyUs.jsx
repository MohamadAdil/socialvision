'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <motion.section
      className="WhyUs"
      style={{ backgroundImage: 'url(/images/whyus-bg.png)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container">
        <motion.div
          className="heading-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="hd-box">Why Us</div>
          <h2>What We Do with AI</h2>
          <p>
            We harness the power of Artificial Intelligence to solve real-world problems, enhance user
            experiences, and drive smarter decision-making
          </p>
        </motion.div>

        <div className="whyus-card">
          <div className="row">
            {[
              {
                title: 'Digital Marketing',
                img: '/images/whyus-card-img/img-1.png',
                desc: 'Hospitality brands, local businesses, and e-commerce stores looking for visibility and ROI.',
              },
              {
                title: 'AI-Driven Services',
                img: '/images/whyus-card-img/img-2.png',
                desc: 'Restaurants, event spaces, takeaway services, and brands wanting an edge over traditional marketing.',
              },
              {
                title: 'Branding & Identity',
                img: '/images/whyus-card-img/img-3.png',
                desc: 'New businesses, rebrands, and companies looking to align their digital presence with their values.',
              },
            ].map((item, index) => (
              <motion.div
                className="col-md-4 mb-md-0 mb-5"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <div className="whyus-card-item">
                  <div className="whyus-card-img">
                    <Image
                      src={item.img}
                      width={38}
                      height={38}
                      alt={item.title}
                      className="object-fit-cover"
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="whyus-btm-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
        >
          Not sure what service is right for you?{' '}
          <Link href="/contact-us">Book a free discovery call</Link> and let’s figure it out together.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
