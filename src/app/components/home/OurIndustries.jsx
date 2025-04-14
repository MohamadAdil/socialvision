// components/OurIndustries.jsx
import React from 'react';
import Image from 'next/image';
const OurIndustries = () => {
  return (
    <section className="OurIndustries">
      <div className="container">
        <div className="heading-wrap">
          <span className="hd-border-line center">Our Industries</span>
          <h2>Industries We Serve</h2>
        </div>
        <div className="industries-card-wrap">
          <div className="row">
            <div className="col-lg-3">
              <div className="industries-card-item">
                <div className="industries-card-img">
                  <Image
                    src="/images/industries-img/img-1.png"
                    width={34}
                    height={34}
                    alt="Industry Icon"
                    className="object-fit-contain"
                  />
                </div>
                <h4>Restaurants / Hospitality</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="industries-card-item">
                <div className="industries-card-img">
                  <Image
                    src="/images/industries-img/img-2.png"
                    width={34}
                    height={34}
                    alt="Industry Icon"
                    className="object-fit-contain"
                  />
                </div>
                <h4>Retail</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="industries-card-item">
                <div className="industries-card-img">
                  <Image
                    src="/images/industries-img/img-3.png"
                    width={34}
                    height={34}
                    alt="Industry Icon"
                    className="object-fit-contain"
                  />
                </div>
                <h4>Local Service Businesses</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="industries-card-item">
                <div className="industries-card-img">
                  <Image
                    src="/images/industries-img/img-4.png"
                    width={34}
                    height={34}
                    alt="Industry Icon"
                    className="object-fit-contain"
                  />
                </div>
                <h4>Events & Wellness</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
