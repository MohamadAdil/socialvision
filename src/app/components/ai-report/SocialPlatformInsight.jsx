import Image from 'next/image';

const SocialPlatformInsight = ({ platformName, platformLogo, icon, text }) => {
  // Create dynamic class based on platformName
  const platformClass = `social-${platformName.toLowerCase().replace(/\s+/g, '')}-card`;

  return (
    <div className={`social-platform-insight-wrapper ${platformClass}`}>
      <div className="platform-logo-container">
        <Image
          src={platformLogo}
          alt={`${platformName} logo`}
          width={26}
          height={26}
          className="platform-logo object-fit-contain"
        />
      </div>
      <div className="platform-insight-details">
        <h4 className="platform-title">{platformName}</h4>
        <div className="insight-item d-flex align-items-center gap-1">
          <Image
            src={icon}
            alt="Insight icon"
            width={20}
            height={20}
            className="insight-icon object-fit-contain"
          />
          <p className="insight-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialPlatformInsight;
