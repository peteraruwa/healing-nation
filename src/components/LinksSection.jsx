import { Link } from 'react-router-dom';
import { links } from '../data/content';

const LINK_TARGETS = {
  'Find a Crusade': '#events',
  'Join Campus Fellowship': '#events',
  'Apply to Bible School': '#arms',
  'Partner With Us': '/partner',
  'Prayer Request': '#contact',
  'Watch Sermons': '#gallery',
};

export default function LinksSection() {
  return (
    <section style={{ background: '#eceae4', padding: 'clamp(28px,4vw,48px) clamp(16px,5vw,40px)' }}>
      <div className="hn-reveal" style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 18, padding: 'clamp(28px,4vw,48px)', boxShadow: '0 12px 34px rgba(0,0,0,.08)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(24px,3.4vw,38px)', margin: '0 0 24px' }}>Helpful Links</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          {links.map((l) => {
            const target = LINK_TARGETS[l] || '#';
            const style = { background: 'var(--accent,#a9783f)', color: '#fff', fontSize: 14, fontWeight: 700, padding: '11px 22px', borderRadius: 5 };
            return target.startsWith('/') ? (
              <Link key={l} to={target} className="hn-link-pill" style={style}>{l}</Link>
            ) : (
              <a key={l} href={target} className="hn-link-pill" style={style}>{l}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
