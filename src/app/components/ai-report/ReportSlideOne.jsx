// components/ReportSlideOne.js
import Image from 'next/image';

const ReportSlideOne = () => {
  return (
    <div className="ReportSlideOne" style={{ backgroundImage: "url('/images/ai-report-img/slide-img-1.png')" }}>
      <div className='ReportSlideLogo'>
        <Image
          src="/images/logo-black.svg"
          alt="Logo"
          width={105}
          height={108}
          className="object-fit-contain"
        />
      </div>
      <div className='ReportSlideText'>
        <p>ExampleCo Growth & Performance Snapshot</p>
        <h4>Powered by Social Vision</h4>
        <div className="datecard">
          <span>Date:</span>
          <h5>11 Apr 2025</h5>
          <Image
            src="/images/ai-report-img/calendar-icon.svg"
            alt="Calendar Icon"
            width={55}
            height={55}
            className="object-fit-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportSlideOne;
