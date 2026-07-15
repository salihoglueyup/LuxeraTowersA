import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LuxuryButton = ({
  children,
  variant = 'primary', // primary, outline, ghost
  size = 'md', // sm, md, lg
  className = '',
  icon,
  iconPosition = 'right',
  onClick,
  href,
  disabled = false,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 uppercase tracking-widest font-bold overflow-hidden transition-all duration-300 group";
  
  const variants = {
    primary: "bg-luxera-gold text-luxera-navy hover:bg-white",
    outline: "border border-luxera-gold text-luxera-gold hover:bg-luxera-gold hover:text-luxera-navy",
    ghost: "text-luxera-gold hover:text-white"
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-1">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      
      {/* Shine Effect */}
      {variant !== 'ghost' && !disabled && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"></div>
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={buttonClasses} onClick={onClick} {...props}>
          {renderContent()}
        </a>
      );
    }
    return (
      <Link to={href} className={buttonClasses} onClick={onClick} {...props}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default LuxuryButton;
