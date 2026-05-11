import React from 'react';
import { Link, useLocation } from 'react-router-dom';
type Props = {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
};
export function PageHero({ title, subtitle, breadcrumb }: Props) {
  const { pathname } = useLocation();
  return (
    <section className="bg-cream pt-16 pb-16 md:pt-24 md:pb-20 border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-xs text-ink/50 mb-4">
          <Link to="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink/80">{breadcrumb ?? title}</span>
        </nav>
        <h1 className="font-serif-display text-5xl md:text-6xl tracking-tight">
          {title}
        </h1>
        {subtitle &&
        <p className="mt-4 text-sm text-ink/60 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        }
        <span className="sr-only">{pathname}</span>
      </div>
    </section>);

}