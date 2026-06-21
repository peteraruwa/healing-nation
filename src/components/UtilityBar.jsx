import { utilityLinks } from '../data/content';

export default function UtilityBar({ show }) {
  if (!show) return null;
  return (
    <div style={{ background: '#2c2925', color: '#cbc2b4' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '8px clamp(16px,5vw,40px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 22px', fontSize: 12.5, fontWeight: 600, letterSpacing: '.04em' }}>
        {utilityLinks.map((u) => (
          <a key={u} href="#" className="hn-util-link" style={{ color: '#cbc2b4' }}>{u}</a>
        ))}
        <div style={{ flex: 1 }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.08)', borderRadius: 4, padding: '5px 10px' }}>
          <span style={{ opacity: .6 }}>Search</span>
          <span style={{ opacity: .6 }}>⌕</span>
        </div>
        <a href="#" aria-label="Facebook" className="hn-fb-icon" style={{ width: 24, height: 24, display: 'grid', placeItems: 'center', background: 'var(--accent,#a9783f)', borderRadius: 4, color: '#fff', fontWeight: 800 }}>f</a>
      </div>
    </div>
  );
}
