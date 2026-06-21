import { testimonials } from '../data/content';

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#eceae4', padding: 'clamp(40px,6vw,80px) clamp(16px,5vw,40px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="hn-reveal" style={{ textAlign: 'center', marginBottom: 'clamp(26px,4vw,44px)' }}>
          <div style={{ color: 'var(--accent-dark,#875f31)', fontSize: 13, fontWeight: 800, letterSpacing: '.2em' }}>LIVES TOUCHED</div>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,46px)', margin: '8px 0 0' }}>Testimonies</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(16px,2.5vw,26px)' }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className="hn-reveal hn-arm-card" style={{ background: '#fff', borderRadius: 8, padding: 'clamp(24px,3vw,32px)', boxShadow: '0 10px 28px rgba(0,0,0,.07)', display: 'flex', flexDirection: 'column', animationDelay: `${i * 0.12}s` }}>
              <div style={{ fontFamily: "'Lora',serif", fontSize: 40, color: 'var(--accent,#a9783f)', lineHeight: 1, opacity: .5 }} aria-hidden="true">“</div>
              <p style={{ margin: '4px 0 18px', fontSize: 15.5, color: '#4a463e', flex: 1, fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#2c2925' }}>{t.name}</div>
              <div style={{ fontSize: 13.5, color: '#7c8a57' }}>{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
