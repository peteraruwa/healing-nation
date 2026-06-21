import { facts } from '../data/content';
import storyImg from '../assets/story-panel.jpeg';

export default function StorySection() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(36px,6vw,72px) clamp(16px,5vw,40px)' }}>
      <div className="hn-reveal" style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', borderRadius: 6, overflow: 'hidden', boxShadow: '0 18px 44px rgba(0,0,0,.10)' }}>
        <div style={{ flex: '1 1 320px', background: '#2c2925', color: '#e8e1d6', padding: '0 0 30px' }}>
          <div style={{ position: 'relative', height: 'clamp(150px,22vw,210px)', background: '#2c2925', overflow: 'hidden' }}>
            <img src={storyImg} alt="Ministry gathering" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          </div>
          <div style={{ padding: 'clamp(24px,3.5vw,36px) clamp(22px,4vw,40px) 0' }}>
            <div style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(26px,3.6vw,38px)', lineHeight: 1.05, color: '#fff' }}>Healing Nations</div>
            <div style={{ fontFamily: "'Lora',serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(20px,2.8vw,28px)', color: 'var(--accent,#d6a96f)', marginBottom: 18 }}>Global Outreach</div>
            <div style={{ display: 'grid', gap: 14 }}>
              {facts.map((f) => (
                <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, borderBottom: '1px solid rgba(255,255,255,.12)', paddingBottom: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#a89c8b' }}>{f.label}</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600, textAlign: 'right' }}>{f.value}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Lora',serif", fontStyle: 'italic', fontSize: 15, color: '#cfc6b8', margin: '22px 0 0', lineHeight: 1.5 }}>
              "…and the leaves of the tree were for the healing of the nations."<br />
              <span style={{ fontStyle: 'normal', fontFamily: "'Hanken Grotesk'", fontSize: 12, fontWeight: 700, letterSpacing: '.06em', color: 'var(--accent,#d6a96f)' }}>REVELATION 22:2</span>
            </p>
          </div>
        </div>
        <div style={{ flex: '1.2 1 340px', background: '#7c8a57', color: '#f4f3ea', padding: 'clamp(28px,4.5vw,52px) clamp(24px,4.5vw,52px)' }}>
          <h2 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(26px,3.6vw,40px)', margin: '0 0 18px', lineHeight: 1.05 }}>Our Story</h2>
          <p style={{ margin: '0 0 16px', fontSize: 'clamp(15px,1.5vw,17px)', color: '#f0efe4' }}>Healing Nations Global Outreach was birthed out of a divine mandate to take the Gospel of Jesus Christ beyond borders — to bring healing, revival, and transformation to nations. Founded by Pastor Edafe Kelvin Ezebue, the ministry began as a response to a deep burden for souls and a passion to see lives aligned with God's purpose.</p>
          <p style={{ margin: '0 0 16px', fontSize: 'clamp(15px,1.5vw,17px)', color: '#f0efe4' }}>What started as a campus-driven vision during his university days has grown into a dynamic and expanding global outreach — marked by consistency in evangelism, discipleship, and the demonstration of God's power.</p>
          <p style={{ margin: 0, fontSize: 'clamp(15px,1.5vw,17px)', color: '#f0efe4' }}>Today the ministry advances with a clear apostolic vision: to reach the lost, equip the saints, and raise a generation that will carry the fire of God into every sphere of influence — bringing healing and transformation to nations.</p>
        </div>
      </div>
    </section>
  );
}
