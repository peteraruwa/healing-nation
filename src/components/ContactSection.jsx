import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const setField = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section style={{ background: '#7c8a57', color: '#f4f3ea', padding: 'clamp(40px,6vw,76px) clamp(16px,5vw,40px)' }}>
      <div className="hn-reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,42px)', margin: '0 0 14px' }}>We'd Love to Hear From You</h2>
        <p style={{ margin: '0 0 4px', fontSize: 'clamp(15px,1.5vw,17px)', color: '#eef0e4' }}>Whether you're seeking prayer, want to host a crusade, join a campus fellowship, or partner with the ministry — we're here to connect.</p>
        <p style={{ margin: '0 0 16px', fontSize: 'clamp(15px,1.5vw,17px)', color: '#eef0e4' }}>We look forward to walking with you.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 14px', margin: '0 0 26px' }}>
          <a href="tel:+2348121848107" className="hn-phone-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,.16)', padding: '10px 18px', borderRadius: 6 }}>☏&nbsp; +234 812 184 8107</a>
          <a href="tel:+2347035216257" className="hn-phone-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,.16)', padding: '10px 18px', borderRadius: 6 }}>☏&nbsp; 0703 521 6257</a>
        </div>

        {!sent ? (
          <form onSubmit={onSubmit}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
              <input value={form.name} onChange={setField('name')} placeholder="Name" className="hn-input" style={{ flex: '1 1 160px', minWidth: 0, padding: '13px 14px', border: 'none', borderRadius: 5, fontSize: 15, color: '#2c2925' }} />
              <input value={form.phone} onChange={setField('phone')} placeholder="Phone" className="hn-input" style={{ flex: '1 1 160px', minWidth: 0, padding: '13px 14px', border: 'none', borderRadius: 5, fontSize: 15, color: '#2c2925' }} />
              <input value={form.email} onChange={setField('email')} placeholder="Email" className="hn-input" style={{ flex: '1 1 160px', minWidth: 0, padding: '13px 14px', border: 'none', borderRadius: 5, fontSize: 15, color: '#2c2925' }} />
            </div>
            <textarea value={form.message} onChange={setField('message')} placeholder="Message" rows={6} className="hn-input" style={{ width: '100%', padding: '13px 14px', border: 'none', borderRadius: 5, fontSize: 15, color: '#2c2925', resize: 'vertical', marginBottom: 16 }}></textarea>
            <button type="submit" className="hn-submit-btn" style={{ background: 'var(--accent,#a9783f)', color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, padding: '13px 30px', borderRadius: 5 }}>Send Message</button>
          </form>
        ) : (
          <div style={{ background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.3)', borderRadius: 8, padding: 30, textAlign: 'center', animation: 'hngFade .3s ease' }}>
            <div style={{ fontSize: 30, marginBottom: 8 }}>✦</div>
            <h3 style={{ fontFamily: "'Lora',serif", fontSize: 24, margin: '0 0 6px' }}>Thank you — your message is on its way.</h3>
            <p style={{ margin: 0, color: '#eef0e4' }}>A member of our team will reach out to you shortly. God bless you.</p>
          </div>
        )}
      </div>
    </section>
  );
}
