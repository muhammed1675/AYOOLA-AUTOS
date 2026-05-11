import React, { useState } from 'react';
export function Subscribe() {
  const [email, setEmail] = useState('');
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif-display text-3xl md:text-4xl leading-tight tracking-tight text-ink">
          Subscribe and get 20% off
          <br /> your first rental.
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 max-w-md mx-auto bg-cream/70 rounded-full p-1.5 flex items-center">
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            aria-label="Email address"
            className="flex-1 bg-transparent px-5 py-2 text-sm text-ink placeholder:text-ink/40 outline-none" />
          
          <button
            type="submit"
            className="bg-ink hover:bg-ink-soft text-white text-sm font-medium rounded-full px-6 py-2.5 transition-colors">
            
            Submit
          </button>
        </form>
      </div>
    </section>);

}