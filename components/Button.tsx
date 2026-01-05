import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = ''
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm uppercase tracking-wider";
  
  const variants = {
    primary: "bg-brand-300 text-dark-900 hover:bg-brand-400 hover:shadow-[0_0_20px_rgba(190,242,100,0.4)]",
    secondary: "bg-white text-dark-900 hover:bg-gray-100",
    outline: "border-2 border-brand-300 text-brand-300 hover:bg-brand-300/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
};