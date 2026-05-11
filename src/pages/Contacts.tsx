import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, CheckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
export function Contacts() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        title="Contacts"
        subtitle="Reach our concierge team — we typically respond within an hour, day or night." />
      
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-cream rounded-2xl p-6 flex gap-4">
              <PhoneIcon className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <div className="text-xs text-ink/50">Hotline (24/7)</div>
                <div className="text-sm mt-1">+1 919-806-3277</div>
              </div>
            </div>
            <div className="bg-cream rounded-2xl p-6 flex gap-4">
              <MailIcon className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <div className="text-xs text-ink/50">Email</div>
                <div className="text-sm mt-1">drive.ayoola@gmail.com</div>
              </div>
            </div>
            <div className="bg-cream rounded-2xl p-6 flex gap-4">
              <MapPinIcon className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <div className="text-xs text-ink/50">Headquarters</div>
                <div className="text-sm mt-1 leading-relaxed">
                  Via Calliccatide 36
                  <br />
                  Roses, AnsiaadO 17100, Italy
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-cream rounded-2xl p-6 md:p-8">
            
            <h2 className="font-serif-display text-2xl mb-6">Send a message</h2>
            {sent ?
            <div className="text-center py-10">
                <div className="w-12 h-12 mx-auto rounded-full bg-olive text-white flex items-center justify-center">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <p className="mt-4 text-sm">
                  Thanks — we'll be in touch shortly.
                </p>
              </div> :

            <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium mb-1">
                    Name
                  </label>
                  <input
                  required
                  value={form.name}
                  onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value
                  })
                  }
                  className="w-full bg-white rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
                
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium mb-1">
                    Email
                  </label>
                  <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value
                  })
                  }
                  className="w-full bg-white rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
                
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-ink/50 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value
                  })
                  }
                  className="w-full bg-white rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/40 resize-none" />
                
                </div>
                <button
                type="submit"
                className="bg-ink hover:bg-ink-soft text-white text-sm rounded-full px-6 py-3 transition-colors">
                
                  Send message
                </button>
              </div>
            }
          </form>
        </div>
      </section>
    </>);

}