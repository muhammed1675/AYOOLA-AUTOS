import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { LocationCombobox } from './LocationCombobox';
import { Location } from '../data/locations';
type Tab = 'distance' | 'hourly';
const durations = [
'1 hour',
'2 hours',
'4 hours',
'8 hours',
'12 hours',
'24 hours'];

export function BookingBar() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('distance');
  const [pickup, setPickup] = useState<Location | null>(null);
  const [dropoff, setDropoff] = useState<Location | null>(null);
  const [duration, setDuration] = useState<string>('4 hours');
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState<string>(today);
  const [time, setTime] = useState<string>('12:00');
  const handleSubmit = () => {
    navigate('/booking', {
      state: {
        tab,
        pickup,
        dropoff: tab === 'distance' ? dropoff : null,
        duration: tab === 'hourly' ? duration : null,
        date,
        time
      }
    });
  };
  return (
    <div id="booking" className="relative -mt-44 md:-mt-48 z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Tabs */}
        <div className="inline-flex bg-white rounded-t-xl overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setTab('distance')}
            className={`px-6 py-2.5 text-xs font-medium transition-colors ${tab === 'distance' ? 'bg-ink text-white' : 'bg-white text-ink/70 hover:text-ink'}`}>
            
            Distance
          </button>
          <button
            type="button"
            onClick={() => setTab('hourly')}
            className={`px-6 py-2.5 text-xs font-medium transition-colors ${tab === 'hourly' ? 'bg-ink text-white' : 'bg-white text-ink/70 hover:text-ink'}`}>
            
            Hourly
          </button>
        </div>

        {/* Bar */}
        <div className="bg-white rounded-2xl rounded-tl-none shadow-lg p-2 md:p-3 flex flex-col md:flex-row md:items-stretch gap-2 md:gap-0">
          {/* Pick Up Address */}
          <div className="flex-1 md:border-r md:border-ink/10 min-w-0">
            <LocationCombobox
              label="Pick Up Address"
              value={pickup}
              onChange={setPickup}
              placeholder="From: city, airport, hotel..." />
            
          </div>

          {/* Drop Off Address OR Duration */}
          <div className="flex-1 md:border-r md:border-ink/10 min-w-0">
            {tab === 'distance' ?
            <LocationCombobox
              label="Drop Off Address"
              value={dropoff}
              onChange={setDropoff}
              placeholder="To: city, airport, hotel..." /> :


            <div className="px-4 md:px-5 py-2 md:py-3">
                <label
                htmlFor="duration"
                className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium">
                
                  Duration
                </label>
                <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-transparent text-xs md:text-sm text-ink/90 mt-1 outline-none cursor-pointer">
                
                  {durations.map((d) =>
                <option key={d} value={d}>
                      {d}
                    </option>
                )}
                </select>
              </div>
            }
          </div>

          {/* Pick Up Date */}
          <div className="flex-1 md:border-r md:border-ink/10 px-4 md:px-5 py-2 md:py-3">
            <label
              htmlFor="pickup-date"
              className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium">
              
              Pick Up Date
            </label>
            <input
              id="pickup-date"
              type="date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-xs md:text-sm text-ink/90 mt-1 outline-none cursor-pointer" />
            
          </div>

          {/* Pick Up Time */}
          <div className="flex-1 px-4 md:px-5 py-2 md:py-3">
            <label
              htmlFor="pickup-time"
              className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium">
              
              Pick Up Time
            </label>
            <input
              id="pickup-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-transparent text-xs md:text-sm text-ink/90 mt-1 outline-none cursor-pointer" />
            
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-xl px-6 py-3 md:py-0 md:my-1 transition-colors">
            
            <CalendarIcon className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>
    </div>);

}