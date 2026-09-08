import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  baseUrl?: string;
}

export default function Logo({ variant = 'dark', baseUrl = '/' }: LogoProps) {
  const home = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

  return (
    <a href={home} className="flex items-center group" aria-label="CodCentral — Home">
      <img
        src={`${baseUrl}/codcentral-logo.png`.replace('//', '/')}
        alt="CodCentral"
        className={`h-[88px] w-auto object-contain transition-all duration-200 group-hover:scale-105 ${
          variant === 'light' ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]' : ''
        }`}
      />
    </a>
  );
}
