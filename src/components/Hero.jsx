import heroJpg from '../assets/hero.jpg';
import heroWebp from '../assets/hero.webp';

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: 'clamp(240px,42vw,420px)', overflow: 'hidden', background: '#34304a' }}>
      <picture>
        <source srcSet={heroWebp} type="image/webp" />
        <img
          src={heroJpg}
          width={1080}
          height={810}
          alt="Healing Nations outreach"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', transformOrigin: 'center 35%', animation: 'hngKen 16s ease-out both' }}
        />
      </picture>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(20,18,16,.74) 0%,rgba(20,18,16,.40) 45%,rgba(20,18,16,.12) 100%)' }}></div>
      <div style={{ position: 'absolute', left: 0, bottom: 'clamp(20px,5vw,46px)', background: 'rgba(28,25,22,.74)', backdropFilter: 'blur(2px)', borderRadius: '0 14px 14px 0', padding: 'clamp(16px,3vw,30px) clamp(22px,5vw,56px) clamp(16px,3vw,30px) clamp(16px,5vw,40px)' }}>
        <div className="hn-rise" style={{ animationDelay: '.1s', color: 'var(--accent,#d6a96f)', fontSize: 'clamp(11px,1.6vw,14px)', fontWeight: 800, letterSpacing: '.22em' }}>OUR MINISTRY</div>
        <h1 className="hn-rise" style={{ animationDelay: '.22s', fontFamily: "'Lora',serif", color: '#fff', fontWeight: 700, fontSize: 'clamp(34px,7vw,72px)', lineHeight: 1.02, margin: '6px 0 0', textWrap: 'balance' }}>Healing the Nations</h1>
      </div>
    </section>
  );
}
