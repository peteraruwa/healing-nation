import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { utilityLinks, searchIndex } from '../data/content';

const SOCIAL_ICONS = [
  { label: 'Visit our Facebook page', symbol: 'f', className: 'hn-fb-icon' },
  { label: 'Visit our Instagram page', symbol: '◎', className: 'hn-fb-icon' },
  { label: 'Visit our YouTube channel', symbol: '▶', className: 'hn-fb-icon' },
  { label: 'Visit our X (Twitter) page', symbol: '𝕏', className: 'hn-fb-icon' },
];

const UTILITY_TARGETS = {
  Crusades: '#events',
  'Campus Invasion': '#arms',
  'Bible School': '#arms',
  Testimonies: '#testimonials',
};

export default function UtilityBar({ show }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  if (!show) return null;

  const matches = query.trim()
    ? searchIndex.filter((s) => s.label.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6)
    : [];

  const goTo = (target) => {
    setQuery('');
    setOpen(false);
    if (target.startsWith('/')) {
      navigate(target);
      return;
    }
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (matches.length > 0) goTo(matches[0].target);
  };

  return (
    <div className="hn-on-dark" style={{ background: '#2c2925', color: '#cbc2b4' }}>
      <nav aria-label="Utility" className="hn-utility-nav" style={{ maxWidth: 1180, margin: '0 auto', padding: '8px clamp(16px,5vw,40px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 22px', fontSize: 12.5, fontWeight: 600, letterSpacing: '.04em' }}>
        <div className="hn-utility-links" style={{ display: 'flex', alignItems: 'center', gap: 18, overflowX: 'auto' }}>
          {utilityLinks.map((u) => (
            <a key={u} href={UTILITY_TARGETS[u] || '#'} className="hn-util-link" style={{ color: '#cbc2b4', whiteSpace: 'nowrap', flex: 'none' }}>{u}</a>
          ))}
        </div>
        <div className="hn-hide-mobile" style={{ flex: 1 }}></div>
        <div className="hn-utility-second-row" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <form role="search" onSubmit={onSubmit} style={{ position: 'relative' }}>
            <label htmlFor="hn-search-input" className="hn-visually-hidden">Search the site</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.08)', borderRadius: 4, padding: '5px 10px' }}>
              <input
                id="hn-search-input"
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 120)}
                placeholder="Search"
                autoComplete="off"
                role="combobox"
                aria-expanded={open && matches.length > 0}
                aria-controls="hn-search-results"
                style={{ background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 12.5, fontWeight: 600, width: 92 }}
              />
              <span aria-hidden="true" style={{ opacity: .6 }}>⌕</span>
            </div>
            {open && matches.length > 0 && (
              <ul id="hn-search-results" role="listbox" style={{ position: 'absolute', top: '100%', right: 0, marginTop: 6, minWidth: 220, background: '#fff', color: '#2c2925', borderRadius: 6, boxShadow: '0 14px 30px rgba(0,0,0,.22)', listStyle: 'none', padding: 6, zIndex: 60 }}>
                {matches.map((m) => (
                  <li key={m.label}>
                    <button
                      type="button"
                      role="option"
                      aria-selected="false"
                      onClick={() => goTo(m.target)}
                      className="hn-mobile-nav-link"
                      style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'none', padding: '9px 10px', fontSize: 13.5, fontWeight: 600, borderRadius: 4, cursor: 'pointer', color: '#2c2925' }}
                    >
                      {m.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </form>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {SOCIAL_ICONS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className={s.className} style={{ width: 24, height: 24, display: 'grid', placeItems: 'center', background: 'var(--accent,#a9783f)', borderRadius: 4, color: '#fff', fontWeight: 800, fontSize: 12 }}>{s.symbol}</a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
