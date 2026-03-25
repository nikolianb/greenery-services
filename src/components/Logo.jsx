import { Leaf } from 'lucide-react';

export default function Logo({ variant = 'light', size = 'md' }) {
  const titleSize = size === 'sm' ? 'text-xl' : 'text-2xl';
  const subSize = size === 'sm' ? 'text-[10px]' : 'text-xs';
  const iconSize = size === 'sm' ? 'w-5 h-5' : 'w-6 h-6';

  const titleColor = variant === 'dark' ? 'text-white' : 'text-green-900';
  const iconColor = variant === 'dark' ? 'text-green-400' : 'text-green-700';
  const subColor = variant === 'dark' ? 'text-green-400' : 'text-green-600';

  return (
    <div className="leading-tight">
      <span className="inline-flex items-start">
        <span className={`${titleSize} font-heading font-bold ${titleColor}`}>
          Greenery
        </span>
        <Leaf className={`${iconSize} ${iconColor} -mt-1`} />
      </span>
      <span
        className={`block ${subSize} tracking-[0.3em] uppercase ${subColor} font-semibold`}
      >
        Services
      </span>
    </div>
  );
}
