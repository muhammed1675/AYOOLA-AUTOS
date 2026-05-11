import React from 'react';
import { Hero } from '../components/Hero';
import { BookingBar } from '../components/BookingBar';
import { AboutUs } from '../components/AboutUs';
import { BestOffer } from '../components/BestOffer';
import { Vehicles } from '../components/Vehicles';
import { Blog } from '../components/Blog';
import { Subscribe } from '../components/Subscribe';
export function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <BookingBar />
      </div>
      <AboutUs />
      <BestOffer />
      <Vehicles />
      <Blog />
      <Subscribe />
    </>);

}