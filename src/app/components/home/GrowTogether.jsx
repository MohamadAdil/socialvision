'use client';

import Link from 'next/link';

const GrowTogether = () => {
  return (
    <section className="GrowTogether">
      <div className="container">
        <div
          className="GrowTogether-wrap"
          style={{ backgroundImage: 'url(/images/grow-bg.png)' }}
        >
          <h2>Let’s Grow Together</h2>
          <p>
            Book a free call today and discover how AI can revolutionize your marketing strategy. From smarter campaigns to personalized customer experiences, let artificial intelligence take your brand to the next level
          </p>
          <Link href="/contact" className="btn-main">
            Schedule Your Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowTogether;
