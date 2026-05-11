import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { vehiclesData, VehicleData } from '../data/vehicles';
const categories: Array<VehicleData['category'] | 'All'> = [
'All',
'Sport',
'Luxury',
'SUV',
'Convertible',
'Sedan'];

export function VehiclesPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const filtered = useMemo(
    () =>
    filter === 'All' ?
    vehiclesData :
    vehiclesData.filter((v) => v.category === filter),
    [filter]
  );
  return (
    <>
      <PageHero
        title="Our Fleet"
        subtitle="Browse the full collection of luxury, sport, and grand-touring vehicles available for rental." />
      
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) =>
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${filter === c ? 'bg-ink text-white' : 'bg-cream text-ink/70 hover:bg-ink/10'}`}>
              
                {c}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v) =>
            <article
              key={v.id}
              className="bg-cream rounded-2xl p-5 flex flex-col hover:shadow-lg transition-shadow">
              
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-medium">{v.name}</h3>
                    <p className="text-xs text-ink/55 mt-1">
                      ${v.price}
                      <span className="text-ink/40">/day</span>
                      <span className="mx-2 text-ink/30">·</span>
                      {v.category}
                    </p>
                  </div>
                  <Link
                  to="/booking"
                  aria-label={`Book ${v.name}`}
                  className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center hover:bg-ink-soft transition-colors">
                  
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="rounded-xl overflow-hidden bg-white mt-4 aspect-[16/10]">
                  <img
                  src={v.image}
                  alt={v.alt}
                  className="w-full h-full object-cover" />
                
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-ink/60">
                  <div>
                    <span className="text-ink/40">Seats:</span> {v.specs.seats}
                  </div>
                  <div>
                    <span className="text-ink/40">Trans:</span>{' '}
                    {v.specs.transmission}
                  </div>
                  <div>
                    <span className="text-ink/40">Fuel:</span> {v.specs.fuel}
                  </div>
                  <div>
                    <span className="text-ink/40">Top:</span> {v.specs.topSpeed}
                  </div>
                </div>
                <p className="mt-4 text-xs text-ink/65 leading-relaxed">
                  {v.description}
                </p>
              </article>
            )}
          </div>

          {filtered.length === 0 &&
          <p className="text-center text-ink/50 py-16">
              No vehicles in this category yet.
            </p>
          }
        </div>
      </section>
    </>);

}