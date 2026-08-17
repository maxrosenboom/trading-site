const metrics = {
  strategy: "Mean Reversion",
  instrument: "ES Futures (S&P 500)",
  timeframe: "5m",
  winRate: "64%",
  avgReturn: "0.8%",
  sharpe: "1.4",
  maxDrawdown: "-3.2%",
  tradesPerMonth: "~40",
}

function AlgoShowcase() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        Algorithm Showcase
      </h1>
      <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '3rem' }}>
        Simulated performance metrics
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '480px',
      }}>
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} style={{
            backgroundColor: '#111',
            border: '1px solid #222',
            borderRadius: '8px',
            padding: '1.25rem',
          }}>
            <div style={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 500 }}>
              {value}
            </div>
          </div>
        ))}
      </div>
      <a href="/" style={{ marginTop: '3rem', color: '#444', textDecoration: 'none', fontSize: '0.75rem' }}>
        ← Back
      </a>
    </div>
  )
}

export default AlgoShowcase