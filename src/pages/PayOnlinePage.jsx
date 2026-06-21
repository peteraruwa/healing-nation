import { useState } from 'react';
import { Link } from 'react-router-dom';
import { THEMES } from '../data/content';
import logoJpg from '../assets/HNGO_LOGO.jpg';

const BANK_ACCOUNT = {
  bank: 'GTBank (Guaranty Trust Bank)',
  accountName: 'Healing Nations Global Outreach',
  accountNumber: '0123456789',
};

const METHODS = [
  { id: 'card', label: 'Debit / Credit Card' },
  { id: 'transfer', label: 'Bank Transfer' },
  { id: 'stripe', label: 'Stripe' },
  { id: 'flutterwave', label: 'Flutterwave' },
];

function CardForm({ onSubmit, submitting }) {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="hn-pay-amount" className="hn-visually-hidden">Amount</label>
        <input id="hn-pay-amount" required placeholder="Amount (NGN)" type="number" min="1" className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="hn-pay-card-name" className="hn-visually-hidden">Name on card</label>
        <input id="hn-pay-card-name" required placeholder="Name on Card" className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="hn-pay-card-num" className="hn-visually-hidden">Card number</label>
        <input id="hn-pay-card-num" required placeholder="Card Number" inputMode="numeric" maxLength={19} className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
      </div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="hn-pay-card-exp" className="hn-visually-hidden">Expiry</label>
          <input id="hn-pay-card-exp" required placeholder="MM/YY" className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="hn-pay-card-cvv" className="hn-visually-hidden">CVV</label>
          <input id="hn-pay-card-cvv" required placeholder="CVV" inputMode="numeric" maxLength={4} className="hn-input" style={{ width: '100%', padding: '13px 14px', border: '1px solid #ddd', borderRadius: 5, fontSize: 15 }} />
        </div>
      </div>
      <button type="submit" disabled={submitting} className="hn-submit-btn" style={{ width: '100%', background: 'var(--accent,#a9783f)', color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, padding: '14px 30px', borderRadius: 5 }}>
        {submitting && <span className="hn-spinner" aria-hidden="true"></span>}
        {submitting ? 'Processing…' : 'Give Now'}
      </button>
    </form>
  );
}

function BankTransfer() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(BANK_ACCOUNT.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <p style={{ margin: '0 0 16px', color: '#5c574e', fontSize: 15 }}>Transfer your gift directly using the account details below, then send your proof of payment to our team.</p>
      <div style={{ background: '#f6f3ec', borderRadius: 8, padding: 22, border: '1px solid #eee' }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', color: '#8a8276' }}>BANK NAME</div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{BANK_ACCOUNT.bank}</div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', color: '#8a8276' }}>ACCOUNT NAME</div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{BANK_ACCOUNT.accountName}</div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', color: '#8a8276' }}>ACCOUNT NUMBER</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '.04em' }}>{BANK_ACCOUNT.accountNumber}</div>
            <button type="button" onClick={copy} className="hn-submit-btn" style={{ fontSize: 12.5, fontWeight: 700, padding: '6px 12px', borderRadius: 5, border: 'none', background: 'var(--accent,#a9783f)', color: '#fff' }}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
      <p style={{ margin: '14px 0 0', fontSize: 13, color: '#8a8276' }}>* Sample/mockup account for demonstration purposes.</p>
    </div>
  );
}

function GatewayButton({ provider, onPay, submitting }) {
  const styles = {
    stripe: { bg: '#635bff', label: 'Pay with Stripe' },
    flutterwave: { bg: '#f5a623', label: 'Pay with Flutterwave' },
  }[provider];
  return (
    <div>
      <p style={{ margin: '0 0 16px', color: '#5c574e', fontSize: 15 }}>You'll be redirected to {provider === 'stripe' ? 'Stripe' : 'Flutterwave'} to securely complete your payment.</p>
      <button type="button" onClick={onPay} disabled={submitting} className="hn-submit-btn" style={{ width: '100%', background: styles.bg, color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, padding: '14px 30px', borderRadius: 5 }}>
        {submitting && <span className="hn-spinner" aria-hidden="true"></span>}
        {submitting ? 'Redirecting…' : styles.label}
      </button>
    </div>
  );
}

export default function PayOnlinePage() {
  const theme = THEMES['Warm Tan'];
  const [method, setMethod] = useState('card');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const startMockPayment = (e) => {
    e?.preventDefault?.();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div style={{ '--accent': theme.main, '--accent-dark': theme.dark, minHeight: '100vh', background: '#eceae4' }}>
      <header style={{ background: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,.06)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '16px clamp(16px,5vw,40px)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" aria-label="Back to Healing Nations Global Outreach home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src={logoJpg} width={36} height={36} alt="" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 16 }}>Healing Nations</span>
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 600, margin: '0 auto', padding: 'clamp(28px,5vw,56px) clamp(16px,5vw,40px)' }}>
        <Link to="/" className="hn-nav-link" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--accent-dark,#875f31)' }}>&larr; Back to site</Link>
        <h1 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', margin: '12px 0 6px' }}>Give Online</h1>
        <p style={{ margin: '0 0 28px', color: '#5c574e', fontSize: 15.5 }}>Your generosity fuels crusades, discipleship, and outreach across nations. Choose a payment method below.</p>

        {success ? (
          <div role="status" aria-live="polite" style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 32, textAlign: 'center', boxShadow: '0 10px 28px rgba(0,0,0,.07)' }}>
            <div style={{ fontSize: 34, marginBottom: 10 }} aria-hidden="true">✦</div>
            <h2 style={{ fontFamily: "'Lora',serif", fontSize: 24, margin: '0 0 8px' }}>Thank you for your generosity!</h2>
            <p style={{ margin: '0 0 20px', color: '#5c574e' }}>Your gift has been received (mock transaction). A receipt confirmation will follow.</p>
            <Link to="/" className="hn-submit-btn" style={{ display: 'inline-block', background: 'var(--accent,#a9783f)', color: '#fff', fontWeight: 700, padding: '12px 26px', borderRadius: 5 }}>Return Home</Link>
          </div>
        ) : (
          <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 'clamp(20px,3vw,32px)', boxShadow: '0 10px 28px rgba(0,0,0,.07)' }}>
            <div role="tablist" aria-label="Payment method" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {METHODS.map((m) => (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={method === m.id}
                  onClick={() => setMethod(m.id)}
                  className="hn-link-pill"
                  style={{
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 13.5,
                    fontWeight: 700,
                    padding: '9px 16px',
                    borderRadius: 20,
                    background: method === m.id ? 'var(--accent,#a9783f)' : '#f1efe9',
                    color: method === m.id ? '#fff' : '#2c2925',
                  }}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {method === 'card' && <CardForm onSubmit={startMockPayment} submitting={submitting} />}
            {method === 'transfer' && <BankTransfer />}
            {method === 'stripe' && <GatewayButton provider="stripe" onPay={startMockPayment} submitting={submitting} />}
            {method === 'flutterwave' && <GatewayButton provider="flutterwave" onPay={startMockPayment} submitting={submitting} />}
          </div>
        )}
      </main>
    </div>
  );
}
