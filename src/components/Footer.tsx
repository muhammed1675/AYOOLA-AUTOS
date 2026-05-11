import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon } from
'lucide-react';
const forRenters: {
  label: string;
  to: string;
}[] = [
{
  label: 'About Us',
  to: '/about'
},
{
  label: 'How it works',
  to: '/how-it-works'
},
{
  label: 'Our fleet',
  to: '/our-fleet'
},
{
  label: 'FAQs',
  to: '/faqs'
},
{
  label: 'Contact',
  to: '/contacts'
},
{
  label: 'Locations',
  to: '/locations'
}];

const resources: {
  label: string;
  to: string;
}[] = [
{
  label: 'Media & Blog',
  to: '/blog'
},
{
  label: 'Partners',
  to: '/partners'
},
{
  label: 'Privacy policy',
  to: '/privacy'
},
{
  label: 'Cookies policy',
  to: '/cookies'
},
{
  label: 'Legal information',
  to: '/legal'
},
{
  label: 'Help center',
  to: '/help'
}];

export function Footer() {
  return (
    <footer id="contacts" className="bg-ink-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-wordmark text-3xl">
            ayoola
          </Link>
          <address className="not-italic mt-6 text-xs leading-relaxed text-white/70">
            Via Calliccatide 36
            <br />
            Roses, AnsiaadO, 17100
          </address>
          <p className="mt-3 text-xs text-white/70">0321 0570140</p>
          <div className="mt-6 flex items-center gap-4 text-white/70">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors">
              
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors">
              
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors">
              
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors">
              
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* For Renters */}
        <div>
          <h3 className="text-sm font-semibold mb-5">For Renters</h3>
          <ul className="space-y-3 text-xs text-white/70">
            {forRenters.map((l) =>
            <li key={l.label}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold mb-5">Resources</h3>
          <ul className="space-y-3 text-xs text-white/70">
            {resources.map((l) =>
            <li key={l.label}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-sm font-semibold mb-5">Contact Us</h3>
          <dl className="space-y-4 text-xs text-white/70">
            <div>
              <dt className="text-white/50">Monday - Sunday</dt>
              <dd className="mt-1">8:00 AM - 5:00 PM (AST)</dd>
            </div>
            <div>
              <dt className="text-white/50">Hotline</dt>
              <dd className="mt-1">
                <a
                  href="tel:+19198063277"
                  className="hover:text-white transition-colors">
                  
                  919-806-3277
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:drive.ayoola@gmail.com"
                  className="hover:text-white transition-colors">
                  
                  drive.ayoola@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-center text-[11px] text-white/50">
          © 2026 Ayoola LLC. All rights reserved
        </p>
      </div>
    </footer>);

}