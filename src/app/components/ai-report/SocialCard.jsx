// components/SocialCard.js
import Image from 'next/image';

const SocialCard = ({
  platformName,
  imageSrc,
  engagementLabel,
  engagementValue,
  progress
}) => {
  const platformClass = `social-${platformName.toLowerCase().replace(/\s+/g, '')}-card`;

  return (
    <div className={`social-card ${platformClass}`}>
      <div className='social-card-header'>
        <div className='platform-info'>
          <Image
            src={imageSrc}
            alt={`${platformName} logo`}
            width={26}
            height={26}
            className='platform-logo object-contain'
          />
          <h4 className='platform-name'>{platformName}</h4>
        </div>
        <div className='engagement-label'>{engagementLabel}</div>
      </div>

      <div className='social-card-body'>
        <div className='engagement-stats'>
          <span className='engagement-text'>Total Engagement Rate</span>
          <span className='engagement-value'>{engagementValue}</span>
        </div>
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin='0'
            aria-valuemax='100'
          />
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
