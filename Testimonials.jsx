import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Stephen Welch",
    role: "WORKER",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Olivia Mason",
    role: "FARMER",
    text: "Amazing experience! Truly organic and sustainable practices. Changed my view on farming.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ethan Clark",
    role: "GARDENER",
    text: "I've learned so much about permaculture and soil health. This team is passionate and knowledgeable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full bg-[#faf9f3] dark:bg-neutral-900 overflow-hidden">
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Side */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-white dark:bg-neutral-800 rounded-full text-sm font-medium border border-gray-300 dark:border-neutral-700 mb-4">
                <span className="text-green-600">✦</span> Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
                What our clients <br /> say about us
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                ref={prevRef}
                className="border border-gray-400 dark:border-gray-600 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800 dark:text-white" />
              </button>
              <button
                ref={nextRef}
                className="border border-gray-400 dark:border-gray-600 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <ChevronRight className="h-5 w-5 text-gray-800 dark:text-white" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-2">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={32}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              pagination={{ clickable: true }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-800 p-6 sm:p-10 rounded-[1.5rem] border border-gray-200 dark:border-neutral-700 shadow-md transition duration-300 ease-in-out">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-5 w-5 inline-block ${
                            i < item.rating
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                      “{item.text}”
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Swiper Pagination Style */}
            <style >{`
              .swiper-pagination-bullet {
                background-color: #3b3b3b;
                opacity: 0.5;
              }
              .swiper-pagination-bullet-active {
                background-color: #facc15;
                opacity: 1;
              }
              .dark .swiper-pagination-bullet {
                background-color: #fff;
                opacity: 0.3;
              }
              .dark .swiper-pagination-bullet-active {
                background-color: #facc15;
                opacity: 1;
              }
            `}</style>
          </div>
        </div>
      </section>
      <div className="mt-4 mb-6 px-4 sm:px-8">
  {/* Mobile: Horizontal scroll */}
  <div className="flex sm:hidden overflow-x-auto space-x-6 scrollbar-hide grayscale opacity-60">
    {[
      "https://naturegold.in/wp-content/uploads/2024/11/18-1.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/22-1.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/21.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/5-1.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/15-1.jpg.webp",
    ].map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Logo ${idx + 1}`}
        className="h-12 object-contain bg-transparent dark:bg-transparent flex-shrink-0"
      />
    ))}
  </div>

  {/* Desktop: Grid layout */}
  <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center grayscale opacity-50">
    {[
      "https://naturegold.in/wp-content/uploads/2024/11/18-1.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/22-1.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/21.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/5-1.jpg.webp",
      "https://naturegold.in/wp-content/uploads/2024/11/15-1.jpg.webp",
    ].map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Logo ${idx + 1}`}
        className="h-12 object-contain bg-transparent dark:bg-transparent"
      />
    ))}
  </div>
</div>



    </div>
  );
};

export default Testimonials;
