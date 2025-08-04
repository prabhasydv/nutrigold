"use client";
export default function AcceleratorSection() {
  return (
    <>
    <section className="relative bg-[#5c8d4e] text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
  {/* Background Image */}
  <img
    src="https://cdn.britannica.com/50/202950-050-DFF457E3/Farm-tractor-pesticides-crops.jpg" // <-- replace with your image path
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-20  pointer-events-none select-none"
    style={{ zIndex: 0 }}
  />

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Left: YouTube Video */}
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/tk9k33M-8Kg?controls=1&rel=0&playsinline=1&cc_load_policy=0"
        title="YouTube video"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>

    {/* Right: Text & Steps */}
    <div>
      <div className="mb-4">
        <button className="bg-white text-sm text-gray-900 font-medium px-4 py-1 rounded-full">
          ✨ Get To Know Us
        </button>
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
        Agriculture matters to the<br /> future of development
      </h2>
      <p className="text-gray-100 mb-8 max-w-xl">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which look even.
      </p>

      <div className="space-y-6">
        {[
          {
            num: "01",
            title: "Schedule Your Experience",
            desc: "Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.",
            active: true,
          },
          {
            num: "02",
            title: "Get Professional Advice",
            desc: "Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.",
          },
          {
            num: "03",
            title: "Meet Our Expert Farmer",
            desc: "Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.",
          },
          {
            num: "04",
            title: "Now Get A Best Products",
            desc: "Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.",
          },
        ].map(({ num, title, desc, active }, idx) => (
          <div
            key={idx}
            className={`flex gap-4 p-4 rounded-lg ${
              active ? "bg-white text-gray-900" : "border-b border-white/30"
            }`}
          >
            <div className={`text-2xl font-bold ${active ? "text-[#5c8d4e]" : "text-white/60"}`}>
              {num}
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${active ? "text-gray-900" : "text-white"}`}>
                {title}
              </h4>
              <p className={`text-sm ${active ? "text-gray-600" : "text-white/70"}`}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </>



  );
}
