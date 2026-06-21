import { useEffect, useState } from 'react';
import UtilityBar from '../components/UtilityBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import ArmsSection from '../components/ArmsSection';
import FounderSection from '../components/FounderSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import LinksSection from '../components/LinksSection';
import FooterCTA from '../components/FooterCTA';
import { THEMES } from '../data/content';

export default function HomePage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = width < 920;
  const theme = THEMES['Warm Tan'];

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
      <UtilityBar show={true} />
      <Header isDesktop={!isMobile} menuOpen={isMobile && menuOpen} toggleMenu={() => setMenuOpen((m) => !m)} />
      <Hero />
      <StorySection />
      <ArmsSection />
      <FounderSection />
      <GallerySection />
      <ContactSection />
      <LinksSection />
      <FooterCTA />
    </div>
  );
}
