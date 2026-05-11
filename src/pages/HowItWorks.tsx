import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, CarIcon, KeyRoundIcon, MapPinIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
const steps = [
{
  icon: SearchIcon,
  title: 'Choose your trip',
  text: "Tell us where you're going and when. Distance or hourly — both available worldwide."
},
{
  icon: CarIcon,
  title: 'Pick your vehicle',
  text: 'Browse the fleet and select the perfect car for the occasion.'
},
{
  icon: KeyRoundIcon,
  title: 'Confirm details',
  text: 'Provide your driver info and we handle the paperwork before you arrive.'
},
{
  icon: MapPinIcon,
  title: 'Meet your car',
  text: 'Free delivery to your hotel, residence, or airport. Hand-over takes minutes.'
}];

export function HowItWorks() {
  return (
    <>
      <PageHero
        title="How it works"
        subtitle="From inquiry to ignition in four simple steps." />
      
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) =>
          <article key={s.title} className="bg-cream rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="mt-4 text-xs text-ink/40 font-mono">0{i + 1}</div>
              <h3 className="font-serif-display text-xl mt-1">{s.title}</h3>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                {s.text}
              </p>
            </article>
          )}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/booking"
            className="inline-flex bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-full px-7 py-3 transition-colors">
            
            Start booking
          </Link>
        </div>
      </section>
    </>);

}