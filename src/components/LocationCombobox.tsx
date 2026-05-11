import React, { useEffect, useMemo, useState, useRef } from 'react';
import { MapPinIcon, SearchIcon } from 'lucide-react';
import { locations, Location } from '../data/locations';
type Props = {
  label: string;
  value: Location | null;
  onChange: (loc: Location) => void;
  placeholder?: string;
  bordered?: boolean;
};
export function LocationCombobox({
  label,
  value,
  onChange,
  placeholder,
  bordered = true
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return locations;
    return locations.filter(
      (l) =>
      l.city.toLowerCase().includes(q) ||
      l.country.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q)
    );
  }, [query]);
  const grouped = useMemo(() => {
    const map = new Map<string, Location[]>();
    filtered.forEach((l) => {
      if (!map.has(l.country)) map.set(l.country, []);
      map.get(l.country)!.push(l);
    });
    return Array.from(map.entries());
  }, [filtered]);
  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full text-left ${bordered ? 'px-4 md:px-5 py-2 md:py-3' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}>
        
        <span className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium">
          {label}
        </span>
        <span className="flex items-center gap-1.5 mt-1">
          {value ?
          <span className="text-xs md:text-sm text-ink/90 truncate">
              {value.city}, {value.country}
            </span> :

          <span className="text-xs md:text-sm text-ink/40 truncate">
              {placeholder ?? 'Select a city'}
            </span>
          }
        </span>
      </button>

      {open &&
      <div className="absolute left-0 right-0 mt-2 z-40 bg-white rounded-2xl shadow-2xl border border-ink/10 overflow-hidden w-[min(360px,90vw)] md:w-[360px]">
          <div className="p-3 border-b border-ink/10 flex items-center gap-2">
            <SearchIcon className="w-4 h-4 text-ink/40" />
            <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city or country..."
            className="w-full text-sm bg-transparent outline-none placeholder:text-ink/40" />
          
          </div>
          <div className="max-h-72 overflow-y-auto">
            {grouped.length === 0 &&
          <div className="px-4 py-6 text-xs text-ink/50 text-center">
                No locations found
              </div>
          }
            {grouped.map(([country, items]) =>
          <div key={country}>
                <div className="px-4 py-1.5 text-[10px] uppercase tracking-wider text-ink/40 bg-cream/60 font-medium">
                  {country}
                </div>
                {items.map((loc) => {
              const selected =
              value &&
              value.city === loc.city &&
              value.country === loc.country;
              return (
                <button
                  type="button"
                  key={`${loc.country}-${loc.city}`}
                  onClick={() => {
                    onChange(loc);
                    setOpen(false);
                    setQuery('');
                  }}
                  className={`w-full text-left px-4 py-2.5 flex items-center gap-2 hover:bg-cream transition-colors ${selected ? 'bg-cream' : ''}`}>
                  
                      <MapPinIcon className="w-3.5 h-3.5 text-ink/40 shrink-0" />
                      <span className="flex-1 text-sm text-ink/90">
                        {loc.city}
                      </span>
                      <span className="text-[10px] text-ink/40 font-mono">
                        {loc.code}
                      </span>
                    </button>);

            })}
              </div>
          )}
          </div>
        </div>
      }
    </div>);

}