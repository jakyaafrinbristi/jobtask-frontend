'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';

const images = [
  '/images/yogurt.png',
  '/images/waffle.png',
  '/images/crepe.png',
  '/images/waffle.png',
];

const backgroundColors = ['#880808', '#8b3054', '#3c5f58', '#003049'];
const leftCircleColors = ['#A52A2A', '#5A1D36', '#2B4741', '#001F2B'];
const rightCircleColors = ['#A52A2A', '#6B1B3B', '#1F3D39', '#001321'];

export default function BreakfastSection() {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className="relative text-white overflow-hidden mx-auto"
      style={{
        backgroundColor: backgroundColors[selected],
        fontFamily: 'Poppins, sans-serif',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      }}
    >
      {/* Left Circle */}
      <div
        className="absolute rounded-full hidden md:block"
        style={{
          width: '800px',
          height: '800px',
          top: '-300px',
          left: '-200px',
          backgroundColor: leftCircleColors[selected],
          transform: 'rotate(-14.55deg)',
          zIndex: 0,
        }}
      />

      {/* Right Circle */}
      <div
        className="absolute rounded-full hidden md:block"
        style={{
          width: '1000px',
          height: '1000px',
          top: '400px',
          left: '850px',
          backgroundColor: rightCircleColors[selected],
          transform: 'rotate(-52.22deg)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between h-auto lg:h-[768px] px-6 lg:px-16 pt-12 lg:pt-16 max-w-[1366px] w-full mx-auto">
        {/* Left Content */}
        <div className="flex flex-col mb-12 lg:mb-0">
          <h2 className="text-white text-2xl lg:text-[32px] font-bold mb-2 lg:mb-4">RESTAURANT</h2>

          <h1 className="text-white text-[42px] lg:text-[96px] font-normal leading-none mb-4">
            BREAKFAST
          </h1>

          <p className="text-white text-base lg:text-[20px] font-bold leading-tight w-full lg:w-[900px] mb-8">
            Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.
          </p>

          {/* Thumbnails */}
          <div className="flex items-center gap-4 lg:gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className="relative cursor-pointer w-[72px] h-[72px] lg:w-[120px] lg:h-[120px] rounded-full overflow-visible"
              >
                <Image
                  src={img}
                  alt={`Dish ${index}`}
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, 120px"
                  priority={index === selected}
                />
                {selected === index && (
                  <div className="absolute bottom-[-6px] lg:bottom-[-8px] left-1/2 -translate-x-1/2 w-[40px] lg:w-[50px] h-[4px] bg-white rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center justify-start">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full px-3 lg:px-4 py-2 lg:py-3 w-full max-w-[320px] lg:w-[380px] mb-6 lg:mb-8">
            <FiSearch size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search...."
              className="flex-1 bg-transparent outline-none text-black placeholder:text-gray-400"
            />
          </div>

          {/* Big Image */}
          <motion.div
            key={selected}
            initial={{
              opacity: 0,
              rotate: 120,
              x: 100,
              y: 100,
              transformOrigin: '100% 100%',
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="w-[240px] h-[240px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden mt-8 lg:mt-12"
          >
            <Image
              src={images[selected]}
              alt="Main Dish"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
