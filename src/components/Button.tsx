import React from 'react';
import { Tooltip } from 'react-tooltip';

type IconPosition = 'left' | 'right';
type ButtonSize = 'small' | 'medium' | 'large';
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface ButtonProps {
  label: string;
  backgroundColor?: 'blue' | 'red' | 'green'; // Dinamis background 3 warna
  icon?: React.ReactNode; // Ikon dapat ditampilkan
  iconPosition?: IconPosition; // Posisi ikon
  size?: ButtonSize; // Ukuran button
  tooltip?: string; // Tooltip konten
  tooltipPosition?: TooltipPosition; // Posisi tooltip
  onClick?: () => void; // Event handler
  className?: string; // Custom class
}

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = 'blue',
  icon,
  iconPosition = 'left',
  size = 'medium',
  tooltip,
  tooltipPosition = 'top',
  onClick,
  className = '',
}) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const backgroundClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    red: 'bg-red-500 hover:bg-red-600',
    green: 'bg-green-500 hover:bg-green-600',
  };

  return (
    <div className="relative inline-block">
      {tooltip && <Tooltip id="button-tooltip" place={tooltipPosition} content={tooltip} />}
      <button
        className={`flex items-center justify-center gap-2 text-white font-medium rounded ${sizeClasses[size]} ${backgroundClasses[backgroundColor]} ${className}`}
        onClick={onClick}
        data-tooltip-id={tooltip ? 'button-tooltip' : undefined}
      >
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        <span>{label}</span>
        {icon && iconPosition === 'right' && <span>{icon}</span>}
      </button>
    </div>
  );
};

export default Button;
