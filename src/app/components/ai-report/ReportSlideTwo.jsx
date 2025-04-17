// src/app/components/ai-report/ReportSlideTwo.jsx
import Image from 'next/image';
import ChartSc from './ChartSc';
import SocialCard from './SocialCard';
import CriticalWarnings from './CriticalWarnings';

const ReportSlideTwo = () => {
  const cardData = [
    {
      platformName: 'Instagram',
      imageSrc: '/images/ai-report-img/instagram.png',
      engagementLabel: 'Excellent',
      engagementValue: '12.5K',
      progress: 75
    },
    {
      platformName: 'Facebook',
      imageSrc: '/images/ai-report-img/facebook.png',
      engagementLabel: 'Bad',
      engagementValue: '12.5K',
      progress: 30
    },
    {
      platformName: 'Website',
      imageSrc: '/images/ai-report-img/website.png',
      engagementLabel: 'Average',
      engagementValue: '12.5K',
      progress: 50
    }
  ];

  return (
    <div
      className="ReportSlideTwo"
      style={{ backgroundImage: "url('/images/ai-report-img/slide-img-2.png')" }}
    >
      <div className="ReportSlideLogo">
        <Image
          src="/images/logo-black.svg"
          alt="Logo"
          width={105}
          height={108}
          className="object-fit-contain"
        />
      </div>

      <h3>
        Performance Scorecard For <span>Social Vision</span>
      </h3>

      <ChartSc />

      <div className="SocialCardGrid">
        {cardData.map((data, idx) => (
          <SocialCard key={idx} {...data} />
        ))}
      </div>

      <CriticalWarnings />
    </div>
  );
};

export default ReportSlideTwo;
