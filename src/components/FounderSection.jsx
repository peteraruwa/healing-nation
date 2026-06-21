import { credentials } from '../data/content';
import founderJpg from '../assets/Dr_Ezebue_Edafe.jpg';
import founderWebp from '../assets/Dr_Ezebue_Edafe.webp';

export default function FounderSection() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(40px,6vw,80px) clamp(16px,5vw,40px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,56px)', alignItems: 'center' }}>
        <div className="hn-reveal" style={{ flex: '1 1 280px', maxWidth: 420, margin: '0 auto' }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 10, overflow: 'hidden', background: '#2c2925', boxShadow: '0 16px 40px rgba(0,0,0,.18)' }}>
            <picture>
              <source srcSet={founderWebp} type="image/webp" />
              <img
                src={founderJpg}
                width={840}
                height={1131}
                alt="Dr. Edafe Kelvin Ezebue"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </picture>
          </div>
        </div>
        <div className="hn-reveal" style={{ animationDelay: '.12s', flex: '1.3 1 360px' }}>
          <div style={{ color: 'var(--accent,#a9783f)', fontSize: 13, fontWeight: 800, letterSpacing: '.2em' }}>MEET THE FOUNDER</div>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', margin: '8px 0 4px', lineHeight: 1.05 }}>Dr. Edafe Kelvin Ezebue</h2>
          <div style={{ fontFamily: "'Lora',serif", fontStyle: 'italic', fontSize: 'clamp(17px,2vw,21px)', color: '#7c8a57', marginBottom: 18 }}>Visionary · Evangelist · Medical Doctor</div>
          <p style={{ margin: '0 0 14px', fontSize: 'clamp(15px,1.5vw,17px)', color: '#4a463e' }}>Dr. Edafe Kelvin Ezebue — popularly known as PK — is a dynamic servant of God, a seasoned teacher of the Word, and a trained medical doctor — carrying a burning mandate to spread the Gospel of Jesus Christ across the nations. He is the visionary behind Healing Nations Global Outreach, committed to revival, transformation, and the raising of kingdom ambassadors.</p>
          <p style={{ margin: '0 0 18px', fontSize: 'clamp(15px,1.5vw,17px)', color: '#4a463e' }}>A graduate of Igbinedion University, Okada, he distinguished himself both academically and in spiritual leadership. Hailing from Delta State, Nigeria, he is widely recognized as a mentor and father to many — raising a generation of believers who walk in truth, power, and purpose.</p>
          <div style={{ display: 'grid', gap: 11, borderTop: '1px solid #eee', paddingTop: 18 }}>
            {credentials.map((c) => (
              <div key={c} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent,#a9783f)', fontSize: 13, marginTop: 3 }}>◆</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#2c2925' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
