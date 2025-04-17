// src/app/components/ai-report/ReportSlideTwo.jsx
import Image from 'next/image';
import SocialPlatformInsight from './SocialPlatformInsight';
import AIRecommendations from './AIRecommendations';

const ReportSlideFour = () => {
  return (
    <div
      className="ReportSlideFour"
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
      <div className="SocialInsightEntries">
        <div className="social-insight-entry">
          <SocialPlatformInsight
            platformName="Ad Presence & Performance"
            platformLogo="/images/ai-report-img/instagram.png"
            icon="/images/ai-report-img/idea.svg"
            text="AI Insights: Your current ads lack video content — consider short-form testimonials or behind-the-scenes footage"
          />
        </div>

        <div className="social-insight-entry">
          <SocialPlatformInsight
            platformName="Competitor Snapshot"
            platformLogo="/images/ai-report-img/instagram.png"
            icon="/images/ai-report-img/idea.svg"
            text="AI Insights: Introduce retargeting campaigns for abandoned carts or web visitors"
          />
        </div>

        <div className="social-insight-entry">
          <SocialPlatformInsight
            platformName="Competitor Comparison"
            platformLogo="/images/ai-report-img/instagram.png"
            icon="/images/ai-report-img/idea.svg"
            text="AI Insights: Your current ads lack video content — consider short-form testimonials or behind-the-scenes footage"
          />
        </div>

        <div className="social-insight-entry">
          <SocialPlatformInsight
            platformName="AI Recommendations"
            platformLogo="/images/ai-report-img/ai-recommendations.png"
            icon="/images/ai-report-img/idea.svg"
            text="AI Insights: Introduce retargeting campaigns for abandoned carts or web visitors"
          />
          <AIRecommendations />
        </div>
      </div>

    </div>
  );
};

export default ReportSlideFour;
