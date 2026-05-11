import React from "react";
import bestOffer from "../assets/best-offer.png";

export function BestOffer() {
  return (
    <section className="bg-cream py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-olive rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">

            {/* Text */}
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <h2 className="font-serif-display text-5xl md:text-6xl tracking-tight">
                Best offer
              </h2>

              <p className="mt-8 text-lg md:text-xl">
                Bentley Flying Spur
              </p>

              <p className="text-lg md:text-xl">
                for <span className="text-white">$400</span>
                <span className="text-white/70">/day</span>
              </p>

              <div className="mt-8">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-full px-7 py-3 transition-colors"
                >
                  Rent Now
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="h-full">
              <img
                src={bestOffer}
                alt="Dark blue Bentley Flying Spur luxury sedan"
                className="w-full h-full object-cover object-center min-h-[260px] md:min-h-[340px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}