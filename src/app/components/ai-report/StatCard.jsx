import Image from 'next/image';
import { LuArrowDownLeft } from 'react-icons/lu';
import { FiArrowUpRight } from 'react-icons/fi';

const StatCard = ({
  icon,
  label,
  value,
  percentage,
  isPositive,
  timeframe = 'Last 30 Days',
}) => {
  const cardClass = `stat-${label.toLowerCase().replace(/\s+/g, '')}`;

  return (
    <div className={`stat-card ${cardClass}`}>
      <div className="stat-top">
        <div className="stat-icon">
          <Image
            src={icon}
            alt={label}
            width={20}
            height={20}
            className="object-fit-contain"
          />
        </div>
        <div className="stat-info">
          <span className="stat-label">{label}</span>
          <h3 className="stat-value">{value}</h3>
        </div>
      </div>

      <div className="stat-bottom">
        <div className="stat-change">
          <div className='icon-stat-chang'>
            {isPositive ? <FiArrowUpRight size={8} /> : <LuArrowDownLeft size={8} />}
          </div>
          <h4>{percentage}</h4>
        </div>
        <span className="divider">|</span>
        <span className="timeframe">{timeframe}</span>
      </div>
    </div>
  );
};

export default StatCard;
