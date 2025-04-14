// components/WhyUs.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const WhyUs = () => {
  return (
    <section className="WhyUs"  style={{ backgroundImage: 'url(/images/whyus-bg.png)' }}>
      <div className="container">
        <div className="heading-wrap">
          <div className="hd-box">Why Us</div>
          <h2>What We Do with AI</h2>
          <p>
            We harness the power of Artificial Intelligence to solve real-world problems, enhance user
            experiences, and drive smarter decision-making
          </p>
        </div>

        <div className="whyus-card">
          <div className="row">
            <div className="col-lg-4">
              <div className="whyus-card-item">
                <div className='whyus-card-img'>
                  <Image
                    src="/images/whyus-card-img/img-1.png"
                    width={38}
                    height={38}
                    alt="Digital Marketing"
                    className="object-fit-cover"
                  />
                </div>
                <h4>Digital Marketing</h4>
                <p>
                  Hospitality brands, local businesses, and e-commerce stores looking for visibility and ROI.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="whyus-card-item">
                <div className='whyus-card-img'>
                  <Image
                    src="/images/whyus-card-img/img-2.png"
                    width={38}
                    height={38}
                    alt="Digital Marketing"
                    className="object-fit-cover"
                  />
                </div>
                <h4>AI-Driven Services</h4>
                <p>
                  Restaurants, event spaces, takeaway services,
                  and brands wanting an edge over traditional
                  marketing.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="whyus-card-item">
                <div className='whyus-card-img'>
                  <Image
                    src="/images/whyus-card-img/img-3.png"
                    width={38}
                    height={38}
                    alt="Digital Marketing"
                    className="object-fit-cover"
                  />
                </div>
                <h4>Branding & Identity</h4>
                <p>
                  New businesses, rebrands, and companies
                  looking to align their digital presence with their
                  values.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="whyus-btm-card">
          Not sure what service is right for you? <Link href="#">Book a free discovery call</Link> and let’s figure it out together.
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
