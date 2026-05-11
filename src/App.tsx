import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Subscribe } from './components/Subscribe';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { VehiclesPage } from './pages/VehiclesPage';
import { Booking } from './pages/Booking';
import { Contacts } from './pages/Contacts';
import { FAQs } from './pages/FAQs';
import { LocationsPage } from './pages/Locations';
import { HowItWorks } from './pages/HowItWorks';
import { BlogPage } from './pages/BlogPage';
import { InfoPage } from './pages/InfoPage';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);
  return null;
}
export function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <main className="w-full min-h-screen bg-white text-ink flex flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/our-fleet" element={<VehiclesPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/media" element={<BlogPage />} />
          <Route path="/privacy" element={<InfoPage slug="privacy" />} />
          <Route path="/cookies" element={<InfoPage slug="cookies" />} />
          <Route path="/legal" element={<InfoPage slug="legal" />} />
          <Route path="/help" element={<InfoPage slug="help" />} />
          <Route path="/partners" element={<InfoPage slug="partners" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      {!isHome && <Subscribe />}
      <Footer />
    </main>);

}