import { events } from '../data/content';

export default function EventsSection() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(40px,6vw,80px) clamp(16px,5vw,40px)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="hn-reveal" style={{ textAlign: 'center', marginBottom: 'clamp(26px,4vw,44px)' }}>
          <div style={{ color: 'var(--accent-dark,#875f31)', fontSize: 13, fontWeight: 800, letterSpacing: '.2em' }}>WHERE WE'RE GOING NEXT</div>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,46px)', margin: '8px 0 0' }}>Upcoming Events</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(16px,2.5vw,26px)' }}>
          {events.map((ev, i) => (
            <div key={ev.title + ev.location} className="hn-reveal hn-arm-card" style={{ background: '#f6f3ec', borderRadius: 8, padding: 'clamp(24px,3vw,32px)', boxShadow: '0 10px 28px rgba(0,0,0,.06)', display: 'flex', flexDirection: 'column', animationDelay: `${i * 0.12}s` }}>
              <span style={{ alignSelf: 'flex-start', fontSize: 11.5, fontWeight: 800, letterSpacing: '.1em', color: '#fff', background: 'var(--accent,#a9783f)', padding: '4px 10px', borderRadius: 20, marginBottom: 14 }}>{ev.tag.toUpperCase()}</span>
              <h3 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(20px,2.4vw,25px)', margin: '0 0 4px', color: '#2c2925' }}>{ev.title}</h3>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#7c8a57', marginBottom: 10 }}>{ev.location}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', fontSize: 13.5, fontWeight: 700, color: '#5c574e', marginBottom: 14 }}>
                <span>📅&nbsp; {ev.date}</span>
                <span>🕒&nbsp; {ev.time}</span>
              </div>
              <p style={{ margin: '0 0 18px', fontSize: 15, color: '#5c574e', flex: 1 }}>{ev.body}</p>
              <a href="#contact" className="hn-link-pill" style={{ alignSelf: 'flex-start', background: 'var(--accent,#a9783f)', color: '#fff', fontSize: 13.5, fontWeight: 700, padding: '9px 18px', borderRadius: 5 }}>Register Interest</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
