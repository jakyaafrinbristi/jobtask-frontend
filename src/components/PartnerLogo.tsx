'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [1, 2, 3, 4, 5, 6];

export default function PartnerLogos() {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[#A52A2A] text-sm font-medium mb-2">Partners & Clients</p>
        <h2 className="text-[#333] font-bold text-[32px] sm:text-[48px] leading-tight mb-8">
          We work with the best people
        </h2>

        {/* Marquee Animation */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {logos.map((i) => (
              <div key={i} className="w-[239px] h-[128px] relative grayscale opacity-70">
                <Image
                  src={`/images/img (${i}).png`}
                  alt={`Partner ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for smooth loop */}
            {logos.map((i) => (
              <div key={`clone-${i}`} className="w-[239px] h-[128px] relative grayscale opacity-70">
                <Image
                  src={`/images/img (${i}).png`}
                  alt={`Partner ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
