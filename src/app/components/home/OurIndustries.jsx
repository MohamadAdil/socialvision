'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurIndustries = () => {
  const industries = [
    {
      title: 'Restaurants / Hospitality',
      img: '/images/industries-img/img-1.png',
    },
    {
      title: 'Retail',
      img: '/images/industries-img/img-2.png',
    },
    {
      title: 'Local Service Businesses',
      img: '/images/industries-img/img-3.png',
    },
    {
      title: 'Events & Wellness',
      img: '/images/industries-img/img-4.png',
    },
  ];

  return (
    <motion.section
      className="OurIndustries"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.div
          className="heading-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="hd-border-line center">Our Industries</span>
          <h2>Industries We Serve</h2>
        </motion.div>

        <div className="industries-card-wrap">
          <div className="row">
            {industries.map((item, index) => (
              <motion.div
                className="col-md-3 col-6 mb-md-0 mb-5"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="industries-card-item">
                  <div className="industries-card-img">
                    <Image
                      src={item.img}
                      width={34}
                      height={34}
                      alt={item.title}
                      className="object-fit-contain"
                    />
                  </div>
                  <h4>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurIndustries;
