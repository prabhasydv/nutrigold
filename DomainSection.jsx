import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "1987",
    title: "Open my Farm",
    desc: "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.",
  },
  {
    year: "1995",
    title: "Farm Remodelacion",
    desc: "Majority have suffered alteration in some form by injected humor culpa odio temporibus.",
  },
  {
    year: "2000",
    title: "Grainfarmers Formed",
    desc: "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit.",
  },
  {
    year: "1910",
    title: "Start of Agriculture",
    desc: "Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.",
  },
  {
    year: "2020",
    title: "Modern Organic",
    desc: "Ut fugit amet nihil blanditiis! Reprehenderit totam sequi quam veritatis harum quae obcaecati.",
  },
];

export default function DomainsSection() {
  return (
    <div className="w-full bg-[#faf9f3] dark:bg-neutral-900 py-24 px-6 sm:px-12 xl:px-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white dark:bg-neutral-800 rounded-full text-sm font-medium border border-gray-300 dark:border-neutral-700 mb-6">
          <span className="text-green-600">📜</span> Our History
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-white mb-5">
          Farming since 1866
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-24 w-full border-t border-gray-300 dark:border-neutral-700">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-20 text-center pt-16 relative px-4 sm:px-12 xl:px-24">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Dot indicator */}
              <div className="w-4 h-4 bg-green-600 rounded-full absolute -top-7 left-1/2 transform -translate-x-1/2 shadow-lg shadow-green-400" />
              {/* Year */}
              <div className="text-4xl sm:text-5xl font-bold text-transparent stroke-text mb-4">
                {item.year}
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom stroke-text style */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #3c3c3c;
        }
        .dark .stroke-text {
          -webkit-text-stroke: 1px #ffffff;
        }
      `}</style>
    </div>
  );
}
