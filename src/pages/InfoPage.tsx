import React from 'react';
import { PageHero } from '../components/PageHero';
type Section = {
  heading: string;
  body: string;
};
type InfoConfig = {
  title: string;
  subtitle: string;
  sections: Section[];
};
const configs: Record<string, InfoConfig> = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use and protect your personal information.',
    sections: [
    {
      heading: 'Information we collect',
      body: 'We collect information you provide when making a booking — including name, contact details, driving licence, and payment information. We also collect technical data such as IP address and browser type for security and analytics.'
    },
    {
      heading: 'How we use it',
      body: 'Your information is used solely to provide rental services, communicate about bookings, and meet legal requirements. We never sell your data.'
    },
    {
      heading: 'Data retention',
      body: 'Booking records are retained for 7 years to comply with EU tax regulations. Marketing data may be deleted at any time on request.'
    },
    {
      heading: 'Your rights',
      body: 'You may request access to, correction of, or deletion of your personal data at any time by emailing privacy@ayoola.com.'
    }]

  },
  cookies: {
    title: 'Cookies Policy',
    subtitle: 'The cookies we use and how to control them.',
    sections: [
    {
      heading: 'What are cookies?',
      body: 'Cookies are small text files stored on your device. They allow our site to remember your preferences and improve your experience.'
    },
    {
      heading: 'Types of cookies',
      body: 'We use essential cookies (required for booking), analytics cookies (anonymous usage data), and marketing cookies (only with your consent).'
    },
    {
      heading: 'Managing cookies',
      body: 'You can disable non-essential cookies via the banner on first visit, or through your browser settings at any time.'
    }]

  },
  legal: {
    title: 'Legal Information',
    subtitle: 'Company details and terms of service.',
    sections: [
    {
      heading: 'Company',
      body: 'Ayoola LLC, registered in Italy. VAT IT12345678901. Registered office: Via Calliccatide 36, Roses, AnsiaadO 17100.'
    },
    {
      heading: 'Terms of service',
      body: 'Use of this website is subject to our Terms of Service. By making a booking you agree to the rental terms outlined in your confirmation.'
    },
    {
      heading: 'Disputes',
      body: 'Any disputes shall be governed by the laws of Italy and resolved in the courts of Rome.'
    }]

  },
  help: {
    title: 'Help Center',
    subtitle: 'Find answers, contact support, and access resources.',
    sections: [
    {
      heading: 'Booking support',
      body: 'Need to modify a booking? Contact our 24/7 hotline at +1 919-806-3277 or email support@ayoola.com.'
    },
    {
      heading: 'Roadside assistance',
      body: 'All rentals include free 24/7 roadside assistance throughout Europe. Call the number on your rental card.'
    },
    {
      heading: 'Lost & found',
      body: "If you've left something in a vehicle, contact the pickup location within 14 days and we'll do our best to recover it."
    }]

  },
  partners: {
    title: 'Partners',
    subtitle: 'Trusted brands we work with.',
    sections: [
    {
      heading: 'Hospitality partners',
      body: 'We partner with leading hotels across Italy and Europe — including The Belmond, Aman, and Rocco Forte properties — to deliver seamless guest experiences.'
    },
    {
      heading: 'Manufacturers',
      body: 'Direct relationships with McLaren, Ferrari, Bentley, Lamborghini, Porsche, and Rolls-Royce give us first access to new releases.'
    },
    {
      heading: 'Become a partner',
      body: 'Hotels, concierges, and travel agencies — partner with us to offer luxury mobility to your clients. Email partners@ayoola.com.'
    }]

  }
};
type Props = {
  slug: keyof typeof configs;
};
export function InfoPage({ slug }: Props) {
  const cfg = configs[slug];
  return (
    <>
      <PageHero title={cfg.title} subtitle={cfg.subtitle} />
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {cfg.sections.map((s) =>
          <article key={s.heading}>
              <h2 className="font-serif-display text-2xl mb-3">{s.heading}</h2>
              <p className="text-sm text-ink/65 leading-relaxed">{s.body}</p>
            </article>
          )}
        </div>
      </section>
    </>);

}