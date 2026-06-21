import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Marquee({ items, renderItem, speed = 40, label, arrowVariant = 'light' }) {
  const viewportRef = useRef(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let raf;
    let last = performance.now();

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current) {
        el.scrollLeft += speed * dt;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  const nudge = (dir) => {
    const el = viewportRef.current;
    if (!el) return;
    pause();
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(resume, 3000);
  };

  const arrowStyle = arrowVariant === 'light'
    ? { background: 'rgba(255,255,255,.12)', color: '#fff', border: '1px solid rgba(255,255,255,.25)' }
    : { background: '#fff', color: '#2c2925', border: '1px solid #e4e0d6' };

  const doubled = [...items, ...items];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 14 }}>
        <button type="button" aria-label={`Scroll ${label} backward`} onClick={() => nudge(-1)} style={{ ...arrowStyle, width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button type="button" aria-label={`Scroll ${label} forward`} onClick={() => nudge(1)} style={{ ...arrowStyle, width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
      <div
        ref={viewportRef}
        className="hn-marquee-viewport"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        style={{ overflowX: 'auto', overflowY: 'hidden', maskImage: 'linear-gradient(90deg,transparent,#000 3%,#000 97%,transparent)' }}
      >
        <div style={{ display: 'flex', width: 'max-content' }}>
          {doubled.map((item, i) => renderItem(item, i))}
        </div>
      </div>
    </div>
  );
}
