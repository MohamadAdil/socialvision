import Image from 'next/image';

const AIRecommendations = () => {
  const aiRecommendations = [
    {
      description: "Increase Reels to 3x per week using trending sounds",
      icon: "/images/ai-report-img/tick.svg",
    },
    {
      description: "Add clear CTAs to homepage above the fold",
      icon: "/images/ai-report-img/tick.svg",
    },
    {
      description: "Use testimonials to enhance storytelling",
      icon: "/images/ai-report-img/tick.svg",
    },
    {
      description: "Launch retargeting ad campaigns",
      icon: "/images/ai-report-img/tick.svg",
    },
    {
      description: "Improve website speed via image compression",
      icon: "/images/ai-report-img/tick.svg",
    },
  ];

  return (
    <div className="ai-recommendations">
      {aiRecommendations.map((item, idx) => (
        <div key={idx} className="ai-rec-item d-flex align-items-baseline gap-2">
          <div className="ai-rec-icon">
            <Image
              src={item.icon}
              alt="idea"
              width={24}
              height={24}
              className="object-fit-contain"
            />
          </div>
          <p className="ai-rec-text">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AIRecommendations;
