import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckIcon, CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { LocationCombobox } from '../components/LocationCombobox';
import { Location } from '../data/locations';
import { vehiclesData } from '../data/vehicles';
type State = {
  tab?: 'distance' | 'hourly';
  pickup?: Location | null;
  dropoff?: Location | null;
  duration?: string | null;
  date?: string;
  time?: string;
};
export function Booking() {
  const navigate = useNavigate();
  const { state } = useLocation() as {
    state: State | null;
  };
  const [tab, setTab] = useState<'distance' | 'hourly'>(
    state?.tab ?? 'distance'
  );
  const [pickup, setPickup] = useState<Location | null>(state?.pickup ?? null);
  const [dropoff, setDropoff] = useState<Location | null>(
    state?.dropoff ?? null
  );
  const [duration, setDuration] = useState<string>(state?.duration ?? '4 hours');
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState<string>(state?.date ?? today);
  const [time, setTime] = useState<string>(state?.time ?? '12:00');
  const [vehicleId, setVehicleId] = useState<string>(vehiclesData[0].id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'details' | 'confirmed'>('details');
  const vehicle = vehiclesData.find((v) => v.id === vehicleId)!;
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (step === 'confirmed') {
    return (
      <>
        <PageHero title="Booking confirmed" breadcrumb="Booking" />
        <section className="bg-white py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-olive text-white rounded-full mx-auto flex items-center justify-center">
              <CheckIcon className="w-7 h-7" />
            </div>
            <h2 className="font-serif-display text-3xl mt-6">
              Thank you, {name || 'guest'}!
            </h2>
            <p className="mt-4 text-sm text-ink/65 leading-relaxed">
              Your {vehicle.name} is reserved. A confirmation has been sent to{' '}
              <span className="text-ink">{email || 'your inbox'}</span>. Our
              concierge will reach out within 1 hour to finalise delivery
              details.
            </p>

            <div className="mt-8 bg-cream rounded-2xl p-6 text-left text-sm">
              <div className="flex items-center gap-2 text-ink/60 mb-3">
                <MapPinIcon className="w-4 h-4" />
                <span>
                  {pickup ? `${pickup.city}, ${pickup.country}` : '—'}
                </span>
                {tab === 'distance' && dropoff &&
                <span className="text-ink/40">→ {dropoff.city}</span>
                }
              </div>
              <div className="flex items-center gap-2 text-ink/60 mb-3">
                <CalendarIcon className="w-4 h-4" />
                <span>{date}</span>
                <ClockIcon className="w-4 h-4 ml-2" />
                <span>{time}</span>
              </div>
              <div className="text-ink/60">
                Vehicle: <span className="text-ink">{vehicle.name}</span> · $
                {vehicle.price}/day
              </div>
              {tab === 'hourly' &&
              <div className="text-ink/60 mt-1">Duration: {duration}</div>
              }
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="bg-ink hover:bg-ink-soft text-white text-sm rounded-full px-6 py-3 transition-colors">
                
                Back to home
              </Link>
              <button
                type="button"
                onClick={() => {
                  setStep('details');
                  navigate('/booking', {
                    replace: true
                  });
                }}
                className="border border-ink/15 hover:bg-cream text-sm rounded-full px-6 py-3 transition-colors">
                
                Make another booking
              </button>
            </div>
          </div>
        </section>
      </>);

  }
  return (
    <>
      <PageHero
        title="Complete your booking"
        subtitle="Confirm your trip details, select a vehicle and we'll handle the rest." />
      
      <section className="bg-white py-12 md:py-16">
        <form
          onSubmit={onSubmit}
          className="max-w-5xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trip */}
            <div className="bg-cream rounded-2xl p-6 md:p-8">
              <h2 className="font-serif-display text-2xl mb-6">Trip details</h2>

              <div className="inline-flex bg-white rounded-full p-1 mb-5">
                <button
                  type="button"
                  onClick={() => setTab('distance')}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${tab === 'distance' ? 'bg-ink text-white' : 'text-ink/60'}`}>
                  
                  Distance
                </button>
                <button
                  type="button"
                  onClick={() => setTab('hourly')}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${tab === 'hourly' ? 'bg-ink text-white' : 'text-ink/60'}`}>
                  
                  Hourly
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white rounded-2xl p-3">
                <div className="md:border-r md:border-ink/10">
                  <LocationCombobox
                    label="Pick Up Address"
                    value={pickup}
                    onChange={setPickup} />
                  
                </div>
                {tab === 'distance' ?
                <LocationCombobox
                  label="Drop Off Address"
                  value={dropoff}
                  onChange={setDropoff} /> :


                <div className="px-4 md:px-5 py-2 md:py-3">
                    <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium">
                      Duration
                    </label>
                    <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-transparent text-sm mt-1 outline-none">
                    
                      {[
                    '1 hour',
                    '2 hours',
                    '4 hours',
                    '8 hours',
                    '12 hours',
                    '24 hours'].
                    map((d) =>
                    <option key={d}>{d}</option>
                    )}
                    </select>
                  </div>
                }
                <div className="px-4 md:px-5 py-2 md:py-3 md:border-r md:border-ink/10">
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium">
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-sm mt-1 outline-none" />
                  
                </div>
                <div className="px-4 md:px-5 py-2 md:py-3">
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium">
                    Pick Up Time
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-transparent text-sm mt-1 outline-none" />
                  
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="bg-cream rounded-2xl p-6 md:p-8">
              <h2 className="font-serif-display text-2xl mb-6">
                Select your vehicle
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehiclesData.map((v) =>
                <label
                  key={v.id}
                  className={`flex gap-3 items-center bg-white rounded-xl p-3 cursor-pointer border-2 transition-colors ${vehicleId === v.id ? 'border-accent' : 'border-transparent hover:border-ink/10'}`}>
                  
                    <input
                    type="radio"
                    name="vehicle"
                    value={v.id}
                    checked={vehicleId === v.id}
                    onChange={() => setVehicleId(v.id)}
                    className="sr-only" />
                  
                    <div className="w-20 h-14 rounded-lg overflow-hidden bg-cream shrink-0">
                      <img
                      src={v.image}
                      alt={v.alt}
                      className="w-full h-full object-cover" />
                    
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">
                        {v.name}
                      </div>
                      <div className="text-xs text-ink/55">
                        ${v.price}
                        <span className="text-ink/35">/day</span> · {v.category}
                      </div>
                    </div>
                  </label>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-cream rounded-2xl p-6 md:p-8">
              <h2 className="font-serif-display text-2xl mb-6">Your details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium mb-1">
                    Full name
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
                  
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium mb-1">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
                  
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium mb-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
                  
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-1">
            <div className="bg-ink text-white rounded-2xl p-6 md:p-8 lg:sticky lg:top-6">
              <h3 className="font-serif-display text-2xl mb-6">Summary</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-white/60">Vehicle</dt>
                  <dd className="text-right">{vehicle.name}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-white/60">Pickup</dt>
                  <dd className="text-right">{pickup ? pickup.city : '—'}</dd>
                </div>
                {tab === 'distance' &&
                <div className="flex justify-between gap-3">
                    <dt className="text-white/60">Drop off</dt>
                    <dd className="text-right">
                      {dropoff ? dropoff.city : '—'}
                    </dd>
                  </div>
                }
                {tab === 'hourly' &&
                <div className="flex justify-between gap-3">
                    <dt className="text-white/60">Duration</dt>
                    <dd>{duration}</dd>
                  </div>
                }
                <div className="flex justify-between gap-3">
                  <dt className="text-white/60">Date</dt>
                  <dd>{date}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-white/60">Time</dt>
                  <dd>{time}</dd>
                </div>
              </dl>
              <div className="border-t border-white/15 my-5" />
              <div className="flex justify-between font-serif-display text-xl">
                <span>Total</span>
                <span>
                  ${vehicle.price}
                  <span className="text-white/50 text-sm">/day</span>
                </span>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-full py-3 transition-colors">
                
                Confirm booking
              </button>
              <p className="text-[10px] text-white/40 mt-3 text-center">
                Demo only — no payment will be charged.
              </p>
            </div>
          </aside>
        </form>
      </section>
    </>);

}