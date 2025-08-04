import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  const slides = [
    {
      title: "Experience",
      subtitle: "The Power of Nature",
      desktopImage:
        "https://naturegold.in/wp-content/uploads/2025/03/pexels-shvetsa-5231044-1.jpg",
      mobileImage:
        "https://naturegold.in/wp-content/uploads/2025/03/pexels-shvetsa-5231044-1.jpg",
    },
    {
      title: "Organic Goodness",
      subtitle: "From Earth to Table",
      desktopImage:
        "https://naturegold.in/wp-content/uploads/2025/03/pexels-arjun-mj-74910500-14944259-1.jpg",
      mobileImage:
        "https://naturegold.in/wp-content/uploads/2025/03/pexels-arjun-mj-74910500-14944259-1.jpg",
    },
    {
      title: "Pure Wellness",
      subtitle: "Naturally Sourced, Naturally Powerful",
      desktopImage:
        "https://naturegold.in/wp-content/uploads/2025/03/pexels-chi-n-ba-3626645-10310511-1.jpg.webp",
      mobileImage:
        "https://naturegold.in/wp-content/uploads/2025/03/pexels-chi-n-ba-3626645-10310511-1.jpg.webp",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden rounded-[2rem] mx-auto my-4 max-w-[1440px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper h-[60vh] sm:h-[70vh] rounded-[2rem]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-[60vh] sm:h-[70vh] w-full bg-cover bg-center relative flex items-center justify-center text-center px-4 sm:px-8">
              {/* Background Images */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center rounded-[2rem] hidden sm:block"
                style={{ backgroundImage: `url(${slide.desktopImage})` }}
              />
              <div
                className="absolute inset-0 z-0 bg-cover bg-center rounded-[2rem] sm:hidden"
                style={{ backgroundImage: `url(${slide.mobileImage})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10 rounded-[2rem]" />

              {/* Content */}
              <div className="z-20 text-white">
                <div className="inline-block px-4 py-1 border border-white rounded-full uppercase text-xs tracking-wider mb-4 backdrop-blur-sm">
                  Beneficial for Health
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-medium mt-2">
                  {slide.subtitle}
                </h2>
                <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium shadow hover:bg-yellow-400 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style jsx="true">{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
          width: 10px;
          height: 10px;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: white !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
