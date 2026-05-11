import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
const posts = [
{
  date: '20.09.2023',
  image:
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
  alt: 'Rose-gold convertible',
  title: 'Driving the Amalfi Coast: a five-day itinerary',
  excerpt:
  'Hairpin turns, lemon groves and the best espresso in the Mediterranean.'
},
{
  date: '20.10.2022',
  image:
  'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1200&q=80',
  alt: 'Yellow sports car on city street',
  title: 'Why the Lamborghini Huracán is still our most-booked supercar',
  excerpt:
  "A decade on, the V10 monster still tops every wish list — here's why."
},
{
  date: '19.10.2022',
  image:
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80',
  alt: 'Man in dark shirt',
  title: 'Meet the team: a day with our head of concierge',
  excerpt:
  'From dawn airport pickups to midnight Ferrari deliveries, no two days are alike.'
},
{
  date: '02.08.2022',
  image:
  'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80',
  alt: 'Rolls-Royce',
  title: 'Electric luxury: the Rolls-Royce Spectre joins the fleet',
  excerpt: 'Silent, opulent and emissions-free. We took delivery last week.'
},
{
  date: '14.06.2022',
  image:
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  alt: 'Red Ferrari',
  title: 'Track day at Imola: a guest experience',
  excerpt: 'One client. One Ferrari. Twenty laps of pure adrenaline.'
},
{
  date: '03.05.2022',
  image:
  'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=80',
  alt: 'Porsche on coastal road',
  title: 'Top 7 driving routes in Tuscany',
  excerpt:
  'Cypress-lined ridges and medieval hill towns at the end of every road.'
}];

export function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Stories, routes, and inspiration from the road." />
      
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) =>
          <article key={p.title} className="flex flex-col">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11]">
                <img
                src={p.image}
                alt={p.alt}
                className="w-full h-full object-cover" />
              
                <span className="absolute left-4 bottom-4 bg-accent text-white text-[10px] font-medium rounded-md px-2 py-1">
                  {p.date}
                </span>
                <button
                type="button"
                aria-label="Read article"
                className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors">
                
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-xs text-ink/60 leading-relaxed">
                {p.excerpt}
              </p>
            </article>
          )}
        </div>
      </section>
    </>);

}