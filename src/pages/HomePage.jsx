import { useEffect, useState, Suspense, lazy } from 'react';
import UtilityBar from '../components/UtilityBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import ArmsSection from '../components/ArmsSection';
import FounderSection from '../components/FounderSection';
import { THEMES } from '../data/content';

const GallerySection = lazy(() => import('../components/GallerySection'));
const EventsSection = lazy(() => import('../components/EventsSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const LinksSection = lazy(() => import('../components/LinksSection'));
const FooterCTA = lazy(() => import('../components/FooterCTA'));

export default function HomePage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setWidth(window.innerWidth));
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  const isMobile = width < 920;

  useEffect(() => {
    document.body.style.overflow = isMobile && menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobile, menuOpen]);

  useEffect(() => {
    if (isMobile) return;
    setMenuOpen(false);
  }, [isMobile]);

  const theme = THEMES['Warm Tan'];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      style={{
        '--accent': theme.main,
        '--accent-dark': theme.dark,
        minHeight: '100vh',
        background: '#eceae4',
        overflowX: 'hidden',
      }}
    >
      <a href="#main" className="hn-skip-link">Skip to main content</a>
      <UtilityBar show={true} />
      <Header isDesktop={!isMobile} menuOpen={isMobile && menuOpen} toggleMenu={() => setMenuOpen((m) => !m)} closeMenu={closeMenu} />
      <main id="main">
        <Hero />
        <div id="story">
          <StorySection />
        </div>
        <div id="arms">
          <ArmsSection />
        </div>
        <div id="founder">
          <FounderSection />
        </div>
        <Suspense fallback={<div style={{ minHeight: 400 }} />}>
          <div id="events">
            <EventsSection />
          </div>
          <div id="gallery">
            <GallerySection />
          </div>
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
          <LinksSection />
          <FooterCTA />
        </Suspense>
      </main>
    </div>
  );
}
