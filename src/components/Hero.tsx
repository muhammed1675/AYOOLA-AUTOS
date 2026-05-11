import React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import hero from "../assets/hero.jpg";
export function Hero() {
  return (
    <section className="relative w-full bg-ink-deep text-white overflow-hidden min-h-[680px] md:min-h-[760px] lg:min-h-[820px]">
      {/* Background image — replace src with your AI-generated image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Luxury copper-colored coupe parked in a lush Italian garden at dusk"
          className="w-full h-full object-cover object-center"
        />

        {/* Subtle top/bottom darkening so header + heading + descriptor stay legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/55" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 md:pt-32 pb-48 md:pb-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Heading + CTA (left) */}
          <div className="lg:col-span-7">
            <h1 className="font-serif-display text-[44px] sm:text-6xl md:text-[80px] lg:text-[92px] leading-[0.98] tracking-tight">
              Luxury car
              <br />
              rental in Italy
            </h1>
            <div className="mt-7">
              <a
                href="#booking"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-full px-7 py-3 transition-colors shadow-sm"
              >
                Rent Now
              </a>
            </div>
          </div>

          {/* Floating price card (top right) */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="bg-white text-ink rounded-2xl p-2.5 w-full max-w-[280px] shadow-2xl">
              <div className="flex items-center justify-between px-2.5 pt-1 pb-2.5">
                <span className="font-serif-display text-lg">
                  $1600<span className="text-ink/60">/day</span>
                </span>
                <button
                  type="button"
                  aria-label="View details"
                  className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center hover:bg-ink-soft transition-colors"
                >
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="rounded-xl overflow-hidden bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80"
                  alt="White luxury convertible"
                  className="w-full h-28 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lower right descriptor — sits above the booking bar */}
        <div className="hidden md:block absolute right-6 lg:right-10 bottom-52 md:bottom-56 max-w-[240px] text-right">
          <p className="text-[11px] leading-[1.6] text-white/75">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
}
