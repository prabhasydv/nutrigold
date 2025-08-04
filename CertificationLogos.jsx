import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CertificationLogos() {
  const items = [
    "Agriculture",
    "Farming",
    "Organic",
    "Vegetables",
    "Ayurveda",
    "Sustainability",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap py-8 mb-10 bg-[#faf9f3] dark:bg-neutral-900">
      <div className="animate-marquee inline-flex gap-6 sm:gap-12 text-2xl sm:text-4xl font-extrabold uppercase">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-2 text-transparent dark:text-white stroke-text dark:stroke-text-dark"
          >
            {item}
            <span className="text-green-700 text-2xl sm:text-4xl">*</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #222;
        }
        .dark .stroke-text-dark {
          -webkit-text-stroke: 1px #fff;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
