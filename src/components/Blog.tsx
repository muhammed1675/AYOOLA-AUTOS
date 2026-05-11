import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
type Post = {
  date: string;
  image: string;
  alt: string;
};
const posts: Post[] = [
{
  date: '20.09.2023',
  image:
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
  alt: 'Rose-gold luxury convertible'
},
{
  date: '20.10.2022',
  image:
  'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1200&q=80',
  alt: 'Yellow sports car on a city street'
},
{
  date: '19.10.2022',
  image:
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80',
  alt: 'Man in dark shirt sitting in a styled interior'
}];

export function Blog() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end gap-8">
          <h2 className="font-serif-display text-5xl md:text-6xl tracking-tight">
            Blog
          </h2>
          <p className="text-xs text-ink/60 max-w-[260px] mb-3 hidden md:block">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) =>
          <article key={p.date} className="flex flex-col">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-cream">
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
              <h3 className="mt-5 text-base font-semibold text-ink leading-snug">
                Lorem Ipsum is simply dummy
                <br /> text of the printing...
              </h3>
              <p className="mt-3 text-xs text-ink/60 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing
                <br /> and typesetting industry.
              </p>
            </article>
          )}
        </div>
      </div>
    </section>);

}