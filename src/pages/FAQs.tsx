import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
const faqs = [
{
  q: 'What documents do I need to rent a vehicle?',
  a: "A valid driving licence (held for at least 3 years), a passport or government-issued ID, and a credit card in the primary driver's name."
},
{
  q: 'Is there a minimum age requirement?',
  a: 'Yes — drivers must be 25 or older for our standard fleet and 30+ for the supercar collection.'
},
{
  q: 'Can I have the vehicle delivered to my hotel?',
  a: 'Absolutely. Free delivery is included within city limits of any of our hub locations; long-distance delivery is quoted separately.'
},
{
  q: 'Is insurance included?',
  a: 'Comprehensive insurance with a deductible is included. Zero-deductible upgrades are available at booking.'
},
{
  q: 'Can I drive across borders?',
  a: 'Cross-border travel within the EU is permitted with prior approval. A small administrative fee applies.'
},
{
  q: 'What is your cancellation policy?',
  a: 'Free cancellation up to 48 hours before pickup. Within 48 hours a 25% fee applies.'
},
{
  q: 'Do you offer chauffeur service?',
  a: 'Yes — professional chauffeurs are available for hourly, daily, or multi-day engagements.'
}];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        title="FAQs"
        subtitle="Answers to the questions we hear most often." />
      
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <ul className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="bg-cream rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-cream/70 transition-colors"
                    aria-expanded={isOpen}>
                    
                    <span className="text-sm font-medium">{f.q}</span>
                    {isOpen ?
                    <MinusIcon className="w-4 h-4 shrink-0" /> :

                    <PlusIcon className="w-4 h-4 shrink-0" />
                    }
                  </button>
                  {isOpen &&
                  <div className="px-6 pb-5 text-sm text-ink/65 leading-relaxed">
                      {f.a}
                    </div>
                  }
                </li>);

            })}
          </ul>
        </div>
      </section>
    </>);

}