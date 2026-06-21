import { useState } from 'react';

export default function FooterCTA() {
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section style={{ background: 'var(--accent,#a9783f)', color: '#fbf4ea', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .08, background: 'repeating-linear-gradient(135deg,#000 0 2px,transparent 2px 18px)' }}></div>
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(36px,5vw,64px) clamp(16px,5vw,40px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,5vw,64px)' }}>
        <div className="hn-reveal" style={{ flex: '1 1 300px' }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.16em', opacity: .9 }}>CONNECT WITH THE LIFE OF THE MINISTRY</div>
          <p style={{ margin: '10px 0 18px', fontSize: 15.5, maxWidth: 380, color: '#fbf1e3' }}>Get the Healing Nations app to follow crusades, watch sermons, and grow with us throughout the week.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a href="#" className="hn-app-btn" style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#2c2925', color: '#fff', padding: '9px 16px', borderRadius: 7 }}>
              <span style={{ fontSize: 18 }}></span>
              <span><span style={{ display: 'block', fontSize: 9, opacity: .75, letterSpacing: '.05em' }}>DOWNLOAD ON</span><span style={{ fontSize: 15, fontWeight: 700 }}>iOS App Store</span></span>
            </a>
            <a href="#" className="hn-app-btn" style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#2c2925', color: '#fff', padding: '9px 16px', borderRadius: 7 }}>
              <span style={{ width: 20, height: 22, display: 'inline-flex', flex: 'none' }}>
                <svg viewBox="0 0 512 512" width="20" height="22" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#00d0ff" d="M28.6 12.3C24.5 16.7 22 23.4 22 32v448c0 8.6 2.5 15.3 6.6 19.7l1.5 1.4L280 252v-3L30.1 11l-1.5 1.3z" />
                  <path fill="#fee000" d="M363 336 280 253v-4l83-83 1.9 1.1 98.4 56c28 16 28 42 0 58l-98 56-2.3 1z" />
                  <path fill="#f9412b" d="M365 335 280 250 28.6 501.6c9.3 9.8 24.5 11 41.7 1.2L365 335z" />
                  <path fill="#00f076" d="M365 165 70.3 9.2C53.1-.6 37.9.6 28.6 10.4L280 250l85-85z" />
                </svg>
              </span>
              <span><span style={{ display: 'block', fontSize: 9, opacity: .75, letterSpacing: '.05em' }}>GET IT ON</span><span style={{ fontSize: 15, fontWeight: 700 }}>Google Play</span></span>
            </a>
          </div>
        </div>
        <div className="hn-reveal" style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(26px,3.6vw,40px)', margin: '0 0 8px' }}>Sign Up for Updates!</h2>
          <p style={{ margin: '0 0 16px', fontSize: 15.5, color: '#fbf1e3' }}>Receive our weekly devotionals, crusade dates, and important announcements.</p>
          {!subscribed ? (
            <form onSubmit={onSubscribe} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 440 }}>
              <input value={subEmail} onChange={(e) => setSubEmail(e.target.value)} placeholder="Your email address" className="hn-input" style={{ flex: '1 1 200px', minWidth: 0, padding: '13px 14px', border: 'none', borderRadius: 5, fontSize: 15, color: '#2c2925' }} />
              <button type="submit" className="hn-sub-btn" style={{ background: '#2c2925', color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, padding: '13px 24px', borderRadius: 5 }}>Subscribe</button>
            </form>
          ) : (
            <div style={{ background: 'rgba(0,0,0,.18)', borderRadius: 8, padding: '18px 20px', maxWidth: 440, animation: 'hngFade .3s ease', fontSize: 15.5, fontWeight: 600 }}>You're subscribed — welcome to the family! ✦</div>
          )}
        </div>
      </div>
      <div style={{ position: 'relative', background: '#2c2925', color: '#b8ae9f' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '20px clamp(16px,5vw,40px)', display: 'flex', flexWrap: 'wrap', gap: '10px 24px', alignItems: 'center', fontSize: 13 }}>
          <span style={{ fontFamily: "'Lora',serif", fontWeight: 700, color: '#fff', fontSize: 16 }}>Healing Nations Global Outreach</span>
          <span style={{ opacity: .7 }}>Headquartered in Nigeria.</span>
          <div style={{ flex: 1 }}></div>
          <span style={{ opacity: .6 }}>© 2026 Healing Nations Global Outreach. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
