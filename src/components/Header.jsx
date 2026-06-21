import { navLinks } from '../data/content';
import logoJpg from '../assets/HNGO_LOGO.jpg';
import logoWebp from '../assets/HNGO_LOGO.webp';

export default function Header({ isDesktop, menuOpen, toggleMenu }) {
  return (
    <header style={{ background: '#fff', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 1px 0 rgba(0,0,0,.06)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(16px,5vw,40px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
        <a href="#" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 12, background: 'var(--accent,#a9783f)', color: '#fbf6ee', padding: '11px clamp(18px,3vw,28px) 13px', borderRadius: '0 0 12px 12px', textAlign: 'left', boxShadow: '0 6px 14px rgba(0,0,0,.12)' }}>
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logoJpg}
              width={96}
              height={96}
              alt="Healing Nations Global Outreach logo"
              fetchPriority="high"
              className="hn-logo-img"
              style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', flex: 'none', background: '#000', boxShadow: '0 0 0 2px rgba(255,255,255,.35)', animation: 'hngGlow 3.6s ease-in-out infinite' }}
            />
          </picture>
          <div style={{ lineHeight: 1.05 }}>
            <div style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(17px,2.4vw,23px)', letterSpacing: '.02em', lineHeight: 1.05 }}>Healing Nations</div>
            <div style={{ fontFamily: "'Lora',serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(15px,2vw,20px)', lineHeight: 1.05, marginTop: 1 }}>Global Outreach</div>
            <div style={{ fontSize: 9, letterSpacing: '.18em', fontWeight: 700, marginTop: 6, opacity: .85 }}>EVANGELISM · DISCIPLESHIP · REVIVAL</div>
          </div>
        </a>

        {isDesktop ? (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.2vw,30px)', padding: '22px 0 0', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {navLinks.map((n) => (
              <a key={n} href="#" className="hn-nav-link" style={{ fontSize: 15, fontWeight: 600, color: '#2c2925' }}>{n}</a>
            ))}
            <a href="#" className="hn-give-btn" style={{ fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--accent,#a9783f)', padding: '10px 18px', borderRadius: 5 }}>Give Online</a>
            <a href="#" className="hn-partner-btn" style={{ fontSize: 14, fontWeight: 700, color: '#2c2925', border: '1.5px solid #2c2925', padding: '8.5px 16px', borderRadius: 5 }}>Partner With Us</a>
          </nav>
        ) : (
          <button onClick={toggleMenu} aria-label="Menu" style={{ marginTop: 16, width: 46, height: 46, border: 'none', borderRadius: 8, background: 'var(--accent,#a9783f)', display: 'grid', placeItems: 'center', gap: 4, cursor: 'pointer', padding: 0 }}>
            <span style={{ display: 'block', width: 20, height: 2.4, background: '#fff', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 20, height: 2.4, background: '#fff', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 20, height: 2.4, background: '#fff', borderRadius: 2 }}></span>
          </button>
        )}
      </div>

      {!isDesktop && menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #eee', padding: '8px clamp(16px,5vw,40px) 18px', animation: 'hngFade .25s ease' }}>
          {navLinks.map((n) => (
            <a key={n} href="#" style={{ display: 'block', padding: '13px 4px', fontSize: 16, fontWeight: 600, borderBottom: '1px solid #f0ede7' }}>{n}</a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <a href="#" style={{ flex: 1, textAlign: 'center', fontSize: 15, fontWeight: 700, color: '#fff', background: 'var(--accent,#a9783f)', padding: 12, borderRadius: 6 }}>Give Online</a>
            <a href="#" style={{ flex: 1, textAlign: 'center', fontSize: 15, fontWeight: 700, color: '#2c2925', border: '1.5px solid #2c2925', padding: 11, borderRadius: 6 }}>Partner</a>
          </div>
        </div>
      )}
    </header>
  );
}
