
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const BreakingNewsBanner: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-secondary text-white py-2 overflow-hidden">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        <span className="font-bold text-sm uppercase mx-4 tracking-wider">{t('breakingNews')}</span>
        <i className="fa-solid fa-bolt mx-2"></i>
        <p className="text-sm">Government Unveils New Economic Stimulus Package to Boost Growth...</p>
        <span className="font-bold text-sm uppercase mx-4 tracking-wider">{t('breakingNews')}</span>
        <i className="fa-solid fa-bolt mx-2"></i>
        <p className="text-sm">Kenyan Shilling Shows Resilience Amidst Global Market Volatility...</p>
         <span className="font-bold text-sm uppercase mx-4 tracking-wider">{t('breakingNews')}</span>
        <i className="fa-solid fa-bolt mx-2"></i>
        <p className="text-sm">Government Unveils New Economic Stimulus Package to Boost Growth...</p>
        <span className="font-bold text-sm uppercase mx-4 tracking-wider">{t('breakingNews')}</span>
        <i className="fa-solid fa-bolt mx-2"></i>
        <p className="text-sm">Kenyan Shilling Shows Resilience Amidst Global Market Volatility...</p>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BreakingNewsBanner;
