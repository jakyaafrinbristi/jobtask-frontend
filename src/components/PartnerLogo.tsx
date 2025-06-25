'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

const logos = [
  '/images/img-1.png',
  '/images/img-2.png',
  '/images/img-3.png',
  '/images/img-4.png',
  '/images/img-5.png',
  '/images/img-6.png',
];

export default function PartnerLogos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-[#F7F7F7] py-10">
      <div className="text-center mb-6">
        <p className="text-sm text-[#A52A2A] font-semibold">Partners & Clients</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#333]">
          We work with the best people
        </h2>
      </div>

      {/* For mobile: slower left-to-right marquee */}
      {isMobile ? (
        <Marquee direction="left" speed={40} gradient={false}>
          {logos.map((src, index) => (
            <div key={index} className="mx-6">
              <Image
                src={src}
                alt={`logo-${index}`}
                width={100}
                height={50}
                className="opacity-60 object-contain"
              />
            </div>
          ))}
        </Marquee>
      ) : (
        // For desktop: left-to-right marquee with faster speed
        <Marquee direction="left" speed={100} gradient={false}>
          {logos.map((src, index) => (
            <div key={index} className="mx-6">
              <Image
                src={src}
                alt={`logo-${index}`}
                width={100}
                height={50}
                className="opacity-60 object-contain"
              />
            </div>
          ))}
        </Marquee>
      )}
    </section>
  );
}