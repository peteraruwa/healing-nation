import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { THEMES, partnerTiers, partnerImpact } from '../data/content';
import logoJpg from '../assets/HNGO_LOGO.jpg';

export default function PartnerPage() {
  const theme = THEMES['Warm Tan'];
  const [tier, setTier] = useState(partnerTiers[1].name);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const setField = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div style={{ '--accent': theme.main, '--accent-dark': theme.dark, minHeight: '100vh', background: '#fbf9f5' }}>
      <header style={{ background: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,.06)' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '16px clamp(16px,5vw,40px)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" aria-label="Back to Healing Nations Global Outreach home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src={logoJpg} width={36} height={36} alt="" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 16 }}>Healing Nations</span>
          </Link>
        </div>
      </header>

      {/* Asymmetric intro band */}
      <section style={{ background: '#2c2925', color: '#f4f3ea', padding: 'clamp(40px,7vw,90px) clamp(16px,5vw,40px) clamp(50px,8vw,110px)' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 'clamp(24px,5vw,56px)', alignItems: 'end' }}>
          <div>
            <Link to="/" className="hn-nav-link" style={{ fontSize: 13, fontWeight: 700, color: '#c9c0b2' }}>&larr; Back to site</Link>
            <div style={{ color: 'var(--accent,#d6a96f)', fontSize: 12.5, fontWeight: 800, letterSpacing: '.22em', marginTop: 18 }}>STAND WITH THE MANDATE</div>
            <h1 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(34px,6vw,58px)', lineHeight: 1.04, margin: '8px 0 0' }}>Partner With Us</h1>
            <p style={{ margin: '18px 0 0', fontSize: 'clamp(15px,1.6vw,17px)', color: '#c9c0b2', maxWidth: 480 }}>
              Crusades, campus fellowships, medical outreaches, and discipleship don't run on vision alone — they run on partners. Join a community of givers carrying the mandate with us, one nation at a time.
            </p>
          </div>
          <dl style={{ display: 'flex', flexDirection: 'column', gap: 14, borderLeft: '1px solid rgba(255,255,255,.18)', paddingLeft: 'clamp(18px,3vw,32px)' }}>
            {partnerImpact.map((s) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <dt style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,30px)', color: '#fff' }}>{s.value}</dt>
                <dd style={{ margin: 0, fontSize: 13.5, color: '#9a9183' }}>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Tier list — typographic rows, not cards */}
      <section style={{ padding: 'clamp(40px,6vw,72px) clamp(16px,5vw,40px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(24px,3.4vw,32px)', margin: '0 0 8px' }}>Choose how you'll give</h2>
          <p style={{ margin: '0 0 28px', color: '#5c574e', fontSize: 15 }}>Every tier sustains real ministry work. Select one to begin.</p>
          {partnerTiers.map((t, i) => {
            const active = tier === t.name;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => setTier(t.name)}
                aria-pressed={active}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  borderTop: i === 0 ? '1px solid #e4e0d6' : 'none',
                  borderBottom: '1px solid #e4e0d6',
                  padding: '22px 4px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        border: `2px solid ${active ? 'var(--accent,#a9783f)' : '#cfc8b8'}`,
                        display: 'grid',
                        placeItems: 'center',
                        flex: 'none',
                        background: active ? 'var(--accent,#a9783f)' : 'transparent',
                      }}
                    >
                      {active && <Check size={13} color="#fff" />}
                    </span>
                    <span style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(19px,2.4vw,24px)', color: '#2c2925' }}>{t.name}</span>
                  </div>
                  <span style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(18px,2.2vw,22px)', color: 'var(--accent-dark,#875f31)', whiteSpace: 'nowrap' }}>
                    {t.amount}<span style={{ fontSize: 12.5, fontWeight: 600, color: '#8a8276' }}> {t.cadence}</span>
                  </span>
                </div>
                <p style={{ margin: '10px 0 0 30px', fontSize: 14.5, color: '#5c574e', maxWidth: 540 }}>{t.benefits}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Sign-up form */}
      <section style={{ background: '#fff', borderTop: '1px solid #eee', padding: 'clamp(40px,6vw,72px) clamp(16px,5vw,40px)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          {submitted ? (
            <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '20px 0' }}>
              <h2 style={{ fontFamily: "'Lora',serif", fontSize: 26, margin: '0 0 8px' }}>You're in, partner.</h2>
              <p style={{ margin: '0 0 20px', color: '#5c574e' }}>Thank you for committing to the {tier} tier. Our partnerships team will reach out with next steps.</p>
              <Link to="/" className="hn-submit-btn" style={{ display: 'inline-block', background: 'var(--accent,#a9783f)', color: '#fff', fontWeight: 700, padding: '12px 26px', borderRadius: 5 }}>Return Home</Link>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,28px)', margin: '0 0 6px' }}>Confirm your partnership</h2>
              <p style={{ margin: '0 0 22px', color: '#5c574e', fontSize: 14.5 }}>Selected tier: <strong style={{ color: '#2c2925' }}>{tier}</strong></p>
              <form onSubmit={onSubmit}>
                <div style={{ marginBottom: 12 }}>
                  <label htmlFor="hn-partner-name" className="hn-visually-hidden">Full name</label>
                  <input id="hn-partner-name" required value={form.name} onChange={setField('name')} placeholder="Full Name" className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
                </div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="hn-partner-email" className="hn-visually-hidden">Email</label>
                    <input id="hn-partner-email" required type="email" value={form.email} onChange={setField('email')} placeholder="Email" className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="hn-partner-phone" className="hn-visually-hidden">Phone</label>
                    <input id="hn-partner-phone" type="tel" value={form.phone} onChange={setField('phone')} placeholder="Phone" className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="hn-partner-message" className="hn-visually-hidden">Message</label>
                  <textarea id="hn-partner-message" value={form.message} onChange={setField('message')} placeholder="Anything you'd like us to know? (optional)" rows={4} className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15, resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" disabled={submitting} className="hn-submit-btn" style={{ width: '100%', background: 'var(--accent,#a9783f)', color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, padding: '14px 30px', borderRadius: 5 }}>
                  {submitting && <span className="hn-spinner" aria-hidden="true"></span>}
                  {submitting ? 'Submitting…' : `Become a ${tier}`}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
