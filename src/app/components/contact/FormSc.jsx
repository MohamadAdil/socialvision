import React from 'react';
import ContactCard from './ContactCard';
import ContactForm from '../common/forms/ContactForm';
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa'; 

const FormSc = () => {
  return (
    <div className="FormSc">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className='CnCardWrap'>
              <ContactCard
                imgSrc={<FaPhoneAlt size={20} />}
                altText="Phone Icon"
                label="Call Us"
                linkText="+1-76269 77694"
                linkHref="tel:+17626977694"
              />
              <ContactCard
                imgSrc={<IoMdMail size={20} />}
                altText="Email Icon"
                label="Email Us"
                linkText="example12321@gmail.com"
                linkHref="mailto:example12321@gmail.com"
              />
              <ContactCard
                imgSrc={<TiLocation size={20} />}
                altText="Location Icon"
                label="Our Location"
                linkText="2nd Floor, F-426, St. Sebastian Road Industrial Area, California, USA"
                linkHref={null}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSc;
