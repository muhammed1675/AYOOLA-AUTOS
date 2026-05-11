import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, SearchIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { locations } from '../data/locations';
export function LocationsPage() {
  const [q, setQ] = useState('');
  const grouped = useMemo(() => {
    const filtered = locations.filter(
      (l) =>
      l.city.toLowerCase().includes(q.toLowerCase()) ||
      l.country.toLowerCase().includes(q.toLowerCase())
    );
    const map = new Map<string, typeof filtered>();
    filtered.forEach((l) => {
      if (!map.has(l.country)) map.set(l.country, []);
      map.get(l.country)!.push(l);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [q]);
  return (
    <>
      <PageHero
        title="Locations"
        subtitle={`Pick up and drop off across ${locations.length}+ cities worldwide.`} />
      
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 bg-cream rounded-full px-5 py-3 mb-10 max-w-md">
            <SearchIcon className="w-4 h-4 text-ink/40" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search city or country..."
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-ink/40" />
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grouped.map(([country, items]) =>
            <div key={country} className="bg-cream rounded-2xl p-5">
                <h3 className="font-serif-display text-lg mb-3">{country}</h3>
                <ul className="space-y-2">
                  {items.map((l) =>
                <li key={l.code}>
                      <Link
                    to="/booking"
                    className="flex items-center gap-2 text-sm text-ink/70 hover:text-ink transition-colors">
                    
                        <MapPinIcon className="w-3.5 h-3.5 text-ink/40" />
                        <span>{l.city}</span>
                        <span className="ml-auto text-[10px] text-ink/40 font-mono">
                          {l.code}
                        </span>
                      </Link>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>

          {grouped.length === 0 &&
          <p className="text-center text-ink/50 py-16">
              No locations match your search.
            </p>
          }
        </div>
      </section>
    </>);

}