import { Quote } from 'lucide-react';
import Marquee from './Marquee';
import { testimonials } from '../data/content';

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#eceae4', padding: 'clamp(40px,6vw,76px) 0' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(16px,5vw,40px)' }}>
        <div className="hn-reveal" style={{ borderLeft: '4px solid var(--accent-dark,#875f31)', paddingLeft: 14, marginBottom: 'clamp(26px,4vw,40px)' }}>
          <div style={{ color: 'var(--accent-dark,#875f31)', fontSize: 12.5, fontWeight: 800, letterSpacing: '.22em' }}>LIVES TOUCHED</div>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,46px)', margin: '4px 0 0' }}>Testimonies</h2>
        </div>

        <Marquee
          items={testimonials}
          label="testimonials"
          arrowVariant="dark"
          renderItem={(t, i) => (
            <figure
              key={t.name + i}
              style={{
                flex: 'none',
                width: 'clamp(300px,32vw,380px)',
                margin: '0 10px',
                background: i % 2 === 0 ? '#fff' : '#2c2925',
                color: i % 2 === 0 ? '#2c2925' : '#f4f3ea',
                padding: '26px 26px 22px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Quote
                size={84}
                aria-hidden="true"
                style={{ position: 'absolute', top: -10, right: -10, opacity: i % 2 === 0 ? 0.06 : 0.1, color: i % 2 === 0 ? '#2c2925' : '#fff' }}
              />
              <blockquote style={{ margin: '0 0 18px', fontSize: 15.5, lineHeight: 1.55, fontStyle: 'italic', position: 'relative' }}>{t.quote}</blockquote>
              <figcaption style={{ borderTop: `2px solid ${i % 2 === 0 ? 'var(--accent,#a9783f)' : 'var(--accent,#d6a96f)'}`, paddingTop: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 14.5 }}>{t.name}</div>
                <div style={{ fontSize: 13, opacity: .7 }}>{t.location}</div>
              </figcaption>
            </figure>
          )}
        />
      </div>
    </section>
  );
}
