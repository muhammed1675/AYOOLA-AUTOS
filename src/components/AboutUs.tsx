import React from 'react';
export function AboutUs() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Text */}
        <div>
          <h2 className="font-serif-display text-5xl md:text-6xl tracking-tight">
            About Us
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink/70 max-w-md">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2 rounded-2xl overflow-hidden bg-cream">
            <img
              src="images/about1.jpg"
              alt="Green Bentley-style luxury coupe parked outside a classic Italian building"
              className="w-full h-full object-cover min-h-[280px]" />
            
          </div>
          <div className="rounded-2xl bg-ink text-white p-6 flex flex-col justify-center min-h-[170px]">
            <div className="font-serif-display text-4xl md:text-5xl leading-none">
              +10 years
            </div>
            <div className="text-xs text-white/60 mt-2 tracking-wide">
              Experience
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-cream">
            <img
              src="images/about2.jpg"
              alt="Silver luxury convertible"
              className="w-full h-full object-cover min-h-[170px]" />
            
          </div>
        </div>
      </div>
    </section>);

}
