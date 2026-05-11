import React, { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
type Vehicle = {
  name: string;
  price: string;
  image: string;
  alt: string;
};
const vehicles: Vehicle[] = [
{
  name: 'Mclaren 720s',
  price: '$420',
  image:
  'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=900&q=80',
  alt: 'Blue Mclaren 720s sports car'
},
{
  name: 'Bentley Continental GT V8',
  price: '$380',
  image:
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80',
  alt: 'Tan Bentley Continental GT convertible'
},
{
  name: 'Rolls-Royce Spectre',
  price: '$400',
  image:
  'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=900&q=80',
  alt: 'Yellow Rolls-Royce Spectre'
},
{
  name: 'Ferrari',
  price: '$380',
  image:
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
  alt: 'Red Ferrari sports car'
}];

export function Vehicles() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * (dir === 'next' ? 1 : -1);
    el.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  };
  return (
    <section id="vehicles" className="bg-cream py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex items-end gap-8">
            <h2 className="font-serif-display text-5xl md:text-6xl tracking-tight">
              Vehicles
            </h2>
            <p className="text-xs text-ink/60 max-w-[220px] mb-3 hidden md:block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy('prev')}
              className="w-10 h-10 rounded-full border border-ink/15 bg-white hover:bg-ink hover:text-white text-ink flex items-center justify-center transition-colors">
              
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy('next')}
              className="w-10 h-10 rounded-full border border-ink/15 bg-white hover:bg-ink hover:text-white text-ink flex items-center justify-center transition-colors">
              
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollerRef}
          className="mt-10 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          
          {vehicles.map((v, i) =>
          <article
            key={v.name}
            className="snap-start shrink-0 w-[78%] sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white rounded-2xl p-5 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            
              <div>
                <h3 className="text-sm font-medium text-ink">{v.name}</h3>
                <p className="text-xs text-ink/60 mt-1">
                  {v.price}
                  <span className="text-ink/40">/day</span>
                </p>
              </div>
              <div className="rounded-xl overflow-hidden bg-cream aspect-[16/10]">
                <img
                src={v.image}
                alt={v.alt}
                className="w-full h-full object-cover" />
              
              </div>
              {i === 0 &&
            <div className="flex justify-end">
                  <button
                type="button"
                aria-label={`View ${v.name}`}
                className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center hover:bg-ink-soft transition-colors">
                
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
            }
            </article>
          )}
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ink" />
          <span className="w-2 h-2 rounded-full bg-ink/25" />
          <span className="w-2 h-2 rounded-full bg-ink/25" />
        </div>
      </div>
    </section>);

}