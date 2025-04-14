'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GiRoundStar } from 'react-icons/gi';
import Testimonials from '../common/Testimonials';

const OurTestimonials = () => {
  return (
    <section className="OurTestimonials" style={{ backgroundImage: 'url(/images/testimonail-bg.png)' }}>
      <div className="container">
        <div className="heading-wrap">
          <span className="hd-border-line center">Our Testimonials</span>
          <h2>AI Customer Testimonials</h2>
        </div>

        <div className="reviews-wrap">
          <div className="avatars">
            <Image src="/images/testimonials-img/img-1.png" alt="User 1" width={55} height={55} />
            <Image src="/images/testimonials-img/img-2.png" alt="User 2" width={55} height={55} />
            <Image src="/images/testimonials-img/img-3.png" alt="User 3" width={55} height={55} />
            <Image src="/images/testimonials-img/img-4.png" alt="User 4" width={55} height={55} />
          </div>

          <div className="rating-info">
            <div className='d-flex align-items-center gap-2'>
              <div className="ra-star">
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
              </div>
              <span className="rating-value">(4.8/5)</span>
            </div>
            <span className="reviews">Based on 1,258 reviews</span>
          </div>
        </div>

        <Testimonials />
      </div>
    </section>
  );
};

export default OurTestimonials;
