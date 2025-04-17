// src/app/components/ai-report/CriticalWarnings.jsx
import { BiSolidError } from 'react-icons/bi';

const warnings = [
  {
    title: '⏱️ Homepage speed score (desktop + mobile)',
    description:
      'A fast-loading homepage ensures a seamless user experience across devices. This score reflects how quickly your homepage performs on both desktop and mobile—crucial for engagement, SEO, and conversions.'
  },
  {
    title: '📉 SEO basics (meta title, H1, image alt tags)',
    description:
      'Strong SEO fundamentals help your website rank better on search engines. This score evaluates key elements like meta titles, H1 tags, and image alt texts to ensure your content is optimized for visibility and relevance.'
  },
  {
    title: '🎯 CTA visibility check (above the fold?)',
    description:
      'Your call-to-action (CTA) should grab attention instantly. This check ensures that important CTAs are clearly visible without scrolling—boosting user engagement and increasing conversions right from the first glance.'
  },
  {
    title: '💸 Lead capture presence (newsletter, popups)',
    description:
      'Capturing leads is key to growing your audience and conversions. This check reviews whether your site includes effective lead capture tools like newsletter signups or popups to engage visitors and collect valuable contacts.'
  },
  {
    title: '📱⭐️ Mobile responsiveness rating',
    description:
      'This rating measures how well your site adapts to mobile screens. A responsive design ensures smooth navigation, faster load times, and a better user experience on smartphones and tablets.'
  }
];

const CriticalWarnings = () => {
  return (
    <div className="CriticalWarnings">
      <h4>Critical Warnings Detected</h4>
      <div className="CriticalErrorList">
        {warnings.map((item, idx) => (
          <div key={idx} className="CriticalErrorItem">
            <div className="CriticalIcon">
              <BiSolidError size={20} color="#E18900" />
            </div>
            <div className="CriticalContent">
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalWarnings;
