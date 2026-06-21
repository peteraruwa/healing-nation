import { Clock, MapPin, ArrowUpRight } from 'lucide-react';
import Marquee from './Marquee';
import { events } from '../data/content';

export default function EventsSection() {
  return (
    <section style={{ background: '#7c8a57', color: '#f4f3ea', padding: 'clamp(40px,6vw,76px) 0' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(16px,5vw,40px)' }}>
        <div className="hn-reveal" style={{ borderLeft: '4px solid #fff', paddingLeft: 18, marginBottom: 'clamp(26px,4vw,40px)' }}>
          <div style={{ color: '#2c2925', fontSize: 12.5, fontWeight: 800, letterSpacing: '.22em' }}>WHERE WE'RE GOING NEXT</div>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,46px)', margin: '4px 0 0', color: '#fff' }}>Upcoming Events</h2>
        </div>

        <Marquee
          items={events}
          label="events"
          arrowVariant="light"
          renderItem={(ev, i) => (
            <article key={ev.title + ev.location + i} className="hn-ticket" style={{ flex: 'none', width: 'clamp(300px,30vw,360px)', display: 'flex', margin: '0 10px' }}>
              <div style={{ flex: 'none', width: 78, background: '#2c2925', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '18px 6px' }}>
                <div style={{ fontFamily: "'Lora',serif", fontSize: 30, fontWeight: 700, lineHeight: 1 }}>{ev.date.split(', ')[1].split(' ')[1].replace(',', '')}</div>
                <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '.1em', marginTop: 2 }}>{ev.date.split(', ')[1].split(' ')[0].slice(0, 3).toUpperCase()}</div>
                <div style={{ fontSize: 10.5, opacity: .85, marginTop: 6 }}>{ev.date.split(',')[0]}</div>
              </div>
              <div style={{ flex: 1, background: '#3a352f', borderLeft: '1px dashed rgba(255,255,255,.25)', padding: '18px 20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.1em', color: '#d6a96f', marginBottom: 6 }}>{ev.tag.toUpperCase()}</div>
                <h3 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 19, margin: '0 0 8px', color: '#fff' }}>{ev.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#c9c0b2', marginBottom: 4 }}>
                  <MapPin size={14} aria-hidden="true" /> {ev.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#c9c0b2', marginBottom: 12 }}>
                  <Clock size={14} aria-hidden="true" /> {ev.time}
                </div>
                <p style={{ margin: '0 0 14px', fontSize: 13.5, color: '#9a9183', flex: 1, lineHeight: 1.5 }}>{ev.body}</p>
                <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: '#fff' }}>
                  Register interest <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}
