// src/app/components/ai-report/ReportSlideTwo.jsx
import Image from 'next/image';
import CriticalWarnings from './CriticalWarnings';
import SocialPlatformInsight from './SocialPlatformInsight';
import StatCard from './StatCard';

const ReportSlideThree = () => {
  return (
    <div
      className="ReportSlideThree"
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
      <div className='SocialInsightWrap'>
        {/* Instagram Insights */}
        <SocialPlatformInsight
          platformName="Instagram"
          platformLogo="/images/ai-report-img/instagram.png"
          icon="/images/ai-report-img/idea.svg"
          text="Reels get 40% more engagement. Boost their frequency."
        />
        <div className="EngWrap">
          <StatCard
            icon="/images/ai-report-img/followers.svg"
            label="Followers"
            value="12.4K"
            percentage="+20.00%"
            isPositive={true}
          />

          <StatCard
            icon="/images/ai-report-img/engagement.svg"
            label="Engagement Rate"
            value="4.2%"
            percentage="+20.00%"
            isPositive={true}
          />

          <StatCard
            icon="/images/ai-report-img/avg-likes.svg"
            label="Avg Likes"
            value="520"
            percentage="+20.00%"
            isPositive={true}
          />
        </div>

      </div>
      <div className='SocialInsightWrap'>
        {/* Facebook Insights */}
        <SocialPlatformInsight
          platformName="Facebook Overview "
          platformLogo="/images/ai-report-img/facebook.png"
          icon="/images/ai-report-img/idea.svg"
          text="AI Insight: Increase post frequency to 3x/week"
        />
        <div className='EngWrap'>
          <StatCard
            icon="/images/ai-report-img/likes.svg"
            label="Page Likes"
            value="3.2K"
            percentage="+20.00%"
            isPositive={true}
          />

          <StatCard
            icon="/images/ai-report-img/engagement.svg"
            label="Engagement Rate"
            value="1.8%"
            percentage="+20.00%"
            isPositive={true}
          />

          <StatCard
            icon="/images/ai-report-img/frequency.svg"
            label="Frequency"
            value="1x/week"
            percentage="-20.00%"
            isPositive={true}
          />
        </div>
      </div>
      <div className='SocialInsightWrap'>
        <SocialPlatformInsight
          platformName="Website Overview"
          platformLogo="/images/ai-report-img/website.png"
          icon="/images/ai-report-img/idea.svg"
          text="Compress images & enable caching"
        />
        <CriticalWarnings />
        <div className='MesBtm'>
          <SocialPlatformInsight
            platformName="Messaging & Brand Voice"
            platformLogo="/images/ai-report-img/messaging.png"
            icon="/images/ai-report-img/idea.svg"
            text=" AI Insight: Use customer testimonials and founder story snippets to create stronger emotional engagement"
          />
          <div className='MesDtWrap'>
            Brand voice is warm and conversational. However, product descriptions lack emotional appeal or
            storytelling elements
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReportSlideThree;
