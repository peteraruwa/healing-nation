import { useEffect, useRef } from 'react';
import { gallery } from '../data/content';
import outreachVideo from '../assets/outreach-video.mp4';
import posterImg from '../assets/gallery/85423AM-gallery.jpg';

const VIDEO_KEY = 'hngo-video-1-time';

export default function GallerySection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const saved = parseFloat(localStorage.getItem(VIDEO_KEY) || '0');
    const setSaved = () => { try { v.currentTime = saved; } catch (e) {} };
    if (saved > 0) v.addEventListener('loadedmetadata', setSaved, { once: true });
    const save = () => { try { localStorage.setItem(VIDEO_KEY, String(v.currentTime)); } catch (e) {} };
    v.addEventListener('timeupdate', save);
    return () => {
      v.removeEventListener('loadedmetadata', setSaved);
      v.removeEventListener('timeupdate', save);
    };
  }, []);

  return (
    <section style={{ background: '#2c2925', color: '#f4f3ea', padding: 'clamp(40px,6vw,80px) clamp(16px,5vw,40px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="hn-reveal" style={{ textAlign: 'center', marginBottom: 'clamp(24px,4vw,40px)' }}>
          <div style={{ color: 'var(--accent,#d6a96f)', fontSize: 13, fontWeight: 800, letterSpacing: '.2em' }} aria-hidden="true">THE WORK IN MOTION</div>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,46px)', margin: '8px 0 0', color: '#fff' }}>Outreach Gallery</h2>
          <p style={{ maxWidth: 580, margin: '12px auto 0', color: '#c9c0b2', fontSize: 15.5 }}>Moments from the field — taking healing, hope, and the Gospel to communities and the streets.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(10px,1.5vw,16px)' }}>
          {gallery.map((g, i) => (
            <div key={i} className="hn-reveal" style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 8, overflow: 'hidden', background: '#3a352f', animationDelay: `${(i % 5) * 0.08}s` }}>
              <picture>
                <source srcSet={g.webp} type="image/webp" />
                <img
                  src={g.jpg}
                  width={g.width}
                  height={g.height}
                  alt="Healing Nations outreach moment"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="hn-gallery-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </picture>
            </div>
          ))}
        </div>
        <div className="hn-reveal" style={{ marginTop: 'clamp(24px,3.5vw,40px)' }}>
          <div style={{ textAlign: 'center', color: 'var(--accent,#d6a96f)', fontSize: 13, fontWeight: 800, letterSpacing: '.2em', marginBottom: 16 }} aria-hidden="true">WATCH FROM THE FIELD</div>
          <div style={{ maxWidth: 860, margin: '0 auto', borderRadius: 10, overflow: 'hidden', background: '#000', boxShadow: '0 18px 44px rgba(0,0,0,.4)' }}>
            <video ref={videoRef} src={outreachVideo} poster={posterImg} controls playsInline preload="none" style={{ width: '100%', maxHeight: '72vh', display: 'block', background: '#000', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
