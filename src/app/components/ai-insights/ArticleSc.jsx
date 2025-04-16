'use client';

import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import ArticleCard from './ArticleCard';

const ArticleSc = () => {
  const articles = [
    {
      imageSrc: '/images/ai-insights/articles/img-1.png',
      category: 'Digital Marketing',
      date: '15 April 2025',
      author: 'Rubin Flex',
      title: 'Social Spry with 400+ AI Engineers from around the world to SF’s largest AI agent hackathon',
      description: 'Social Spry is proud to collaborate with over 400 AI engineers from around the world at San Francisco’s largest AI agent hackathon',
      link: '/blog/ai-agent-hackathon',
    },
    {
      imageSrc: '/images/ai-insights/articles/img-2.png',
      category: 'Digital Marketing',
      date: '15 April 2025',
      author: 'Rubin Flex',
      title: 'Social Spry with 400+ AI Engineers from around the world to SF’s largest AI agent hackathon',
      description: 'Social Spry is proud to collaborate with over 400 AI engineers from around the world at San Francisco’s largest AI agent hackathon',
      link: '/blog/ai-agent-hackathon',
    },
    {
      imageSrc: '/images/ai-insights/articles/img-3.png',
      category: 'Digital Marketing',
      date: '15 April 2025',
      author: 'Rubin Flex',
      title: 'Social Spry with 400+ AI Engineers from around the world to SF’s largest AI agent hackathon',
      description: 'Social Spry is proud to collaborate with over 400 AI engineers from around the world at San Francisco’s largest AI agent hackathon',
      link: '/blog/ai-agent-hackathon',
    },
    {
      imageSrc: '/images/ai-insights/articles/img-4.png',
      category: 'Digital Marketing',
      date: '15 April 2025',
      author: 'Rubin Flex',
      title: 'Social Spry with 400+ AI Engineers from around the world to SF’s largest AI agent hackathon',
      description: 'Social Spry is proud to collaborate with over 400 AI engineers from around the world at San Francisco’s largest AI agent hackathon',
      link: '/blog/ai-agent-hackathon',
    },
  ];

  return (
    <div className="ArticleSc">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Triggers animation every time the element is in view
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time element enters the viewport
        >
          Our latest Articles
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="row g-4">
              {articles.map((article, index) => (
                <div key={index} className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // Animation triggers each time element is in view
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <ArticleCard {...article} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ReportCardWrap">
              <h4>Our Reports</h4>
              <div>
                {articles.slice(0, 2).map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // Animation triggers each time element is in view
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <ArticleCard
                      imageSrc={article.imageSrc}
                      category={article.category}
                      title={article.title}
                      link={article.link}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSc;
