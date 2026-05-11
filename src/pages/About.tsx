import React from 'react';
import { PageHero } from '../components/PageHero';
export function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A decade of curating Italy's finest luxury automotive experiences." />
      
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5 text-sm leading-relaxed text-ink/70">
            <p>
              Founded in 2014, Ayoola began as a single-garage operation in the
              heart of Rome. Today, we operate the largest private fleet of
              exotic and luxury vehicles across Italy, with concierge desks in
              Milan, Florence, Venice, and along the Amalfi coast.
            </p>
            <p>
              Our mission is simple: deliver an automotive experience worthy of
              the destination. From McLaren and Ferrari to Rolls-Royce and
              Bentley, every vehicle is hand-selected, meticulously maintained,
              and delivered to your doorstep.
            </p>
            <p>
              We serve over 12,000 clients each year — from honeymooners to
              Formula One teams — and remain proudly independent and family-run.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80"
                alt="Green luxury coupe"
                className="w-full h-full object-cover min-h-[320px]" />
              
            </div>
            <div className="rounded-2xl bg-ink text-white p-6 flex flex-col justify-center min-h-[180px]">
              <div className="font-serif-display text-4xl md:text-5xl leading-none">
                +10 yrs
              </div>
              <div className="text-xs text-white/60 mt-2 tracking-wide">
                Experience
              </div>
            </div>
            <div className="rounded-2xl bg-olive text-white p-6 flex flex-col justify-center min-h-[180px]">
              <div className="font-serif-display text-4xl md:text-5xl leading-none">
                12k+
              </div>
              <div className="text-xs text-white/70 mt-2 tracking-wide">
                Clients served
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-10">
            Our values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
            {
              t: 'Discretion',
              d: 'Private deliveries, signed NDAs on request, and zero footprint.'
            },
            {
              t: 'Precision',
              d: 'Every vehicle is inspected before and after each rental.'
            },
            {
              t: 'Hospitality',
              d: '24/7 multilingual concierge wherever the road takes you.'
            }].
            map((v) =>
            <article key={v.t} className="bg-white rounded-2xl p-8">
                <h3 className="font-serif-display text-2xl">{v.t}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                  {v.d}
                </p>
              </article>
            )}
          </div>
        </div>
      </section>
    </>);

}