import { arms } from '../data/content';

export default function ArmsSection() {
  return (
    <section style={{ background: '#eceae4', padding: 'clamp(40px,6vw,80px) clamp(16px,5vw,40px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="hn-reveal" style={{ textAlign: 'center', marginBottom: 'clamp(26px,4vw,44px)' }}>
          <div style={{ color: 'var(--accent,#a9783f)', fontSize: 13, fontWeight: 800, letterSpacing: '.2em' }}>HOW WE CARRY THE MANDATE</div>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,46px)', margin: '8px 0 0' }}>Our Three Arms</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(16px,2.5vw,26px)' }}>
          {arms.map((a) => (
            <div key={a.num} className="hn-reveal hn-arm-card" style={{ background: '#fff', borderRadius: 8, padding: 'clamp(26px,3vw,36px)', boxShadow: '0 10px 28px rgba(0,0,0,.07)', borderTop: '4px solid var(--accent,#a9783f)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Lora',serif", fontSize: 46, fontWeight: 700, color: 'var(--accent,#a9783f)', lineHeight: 1, opacity: .85 }}>{a.num}</div>
              <h3 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(20px,2.4vw,25px)', margin: '14px 0 10px', color: '#2c2925' }}>{a.title}</h3>
              <p style={{ margin: 0, fontSize: 15.5, color: '#5c574e' }}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
