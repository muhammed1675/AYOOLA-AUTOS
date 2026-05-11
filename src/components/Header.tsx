import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDownIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';

const navLinks = [
  { label: 'About',    to: '/about'    },
  { label: 'Vehicles', to: '/vehicles' },
  { label: 'Booking',  to: '/booking'  },
  { label: 'Contacts', to: '/contacts' },
];

export function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname }            = useLocation();
  const isHome                  = pathname === '/';

  /* Shrink header on scroll (home page only) */
  useEffect(() => {
    if (!isHome) return;
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isHome]);

  /* ── colour tokens ────────────────────────────────────────────── */
  const onHero   = isHome && !scrolled;
  const headerBg = onHero
    ? 'bg-transparent'
    : 'bg-cream border-b border-accent/20 shadow-[0_1px_12px_rgba(232,154,92,0.08)]';

  const wordmarkColor = onHero ? 'text-white'      : 'text-ink';
  const navColor      = onHero ? 'text-white/85'   : 'text-ink/60';
  const navHover      = onHero ? 'hover:text-white' : 'hover:text-accent';
  const activeColor   = onHero ? 'text-white'       : 'text-accent';

  const pillBase = 'transition-all duration-200 border';
  const pillStyle = onHero
    ? `${pillBase} border-white/20 bg-white/10 hover:bg-white/20 text-white`
    : `${pillBase} border-accent/25 bg-accent/8 hover:bg-accent/15 text-ink`;

  return (
    <header
      className={`
        ${isHome ? 'absolute' : 'relative'}
        ${headerBg}
        top-0 left-0 right-0 z-30
        transition-all duration-300
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* ── Left nav ──────────────────────────────────────────── */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `relative text-[13px] font-medium tracking-widest uppercase transition-colors duration-200
                 ${navColor} ${navHover}
                 ${isActive ? activeColor : ''}
                 group`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {/* animated underline */}
                  <span
                    className={`
                      absolute -bottom-0.5 left-0 h-px bg-accent
                      transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                      ${onHero ? '!bg-white' : 'bg-accent'}
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── Centre wordmark ───────────────────────────────────── */}
        <Link
          to="/"
          className={`font-wordmark text-[26px] leading-none select-none tracking-tight transition-colors duration-300 ${wordmarkColor}`}
          aria-label="Ayoola Autos home"
        >
          ayoola
          <span className={`ml-[2px] ${onHero ? 'text-accent-light' : 'text-accent'}`}>.</span>
        </Link>

        {/* ── Right utilities ───────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
          {/* Language pill */}
          <button
            type="button"
            className={`flex items-center gap-1.5 backdrop-blur-sm rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide ${pillStyle}`}
          >
            <span aria-hidden className="text-sm leading-none">🇬🇧</span>
            <span>ENG</span>
            <ChevronDownIcon className="w-3 h-3 opacity-70" />
          </button>

          {/* Account pill */}
          <button
            type="button"
            aria-label="Account"
            className={`w-9 h-9 rounded-full flex items-center justify-center ${pillStyle}`}
          >
            <UserIcon className="w-4 h-4" />
          </button>

          {/* CTA */}
          <Link
            to="/booking"
            className={`
              ml-2 px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase
              transition-all duration-200
              ${onHero
                ? 'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/30'
                : 'bg-ink text-cream hover:bg-ink/80'}
            `}
          >
            Book Now
          </Link>
        </div>

        {/* ── Mobile toggle ─────────────────────────────────────── */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center ${pillStyle}`}
        >
          {open
            ? <XIcon    className="w-5 h-5" />
            : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────────── */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="mx-4 mb-4 rounded-2xl bg-ink text-cream border border-accent/20 shadow-xl shadow-ink/30 p-6">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="
                  flex items-center justify-between
                  py-3 px-2 rounded-xl
                  text-sm font-medium tracking-wide
                  text-cream/70 hover:text-cream hover:bg-white/5
                  border-b border-white/5 last:border-0
                  transition-colors duration-150
                "
              >
                {l.label}
                <span className="text-accent/60 text-xs">→</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/10">
            <span className="text-xs text-cream/50 tracking-wide">🇬🇧 ENG</span>
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="ml-auto px-5 py-2 bg-accent hover:bg-accent-dark text-white text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}