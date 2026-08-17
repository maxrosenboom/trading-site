function AlgoDashboard() {
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
        Algorithm Dashboard
      </h1>
      <p style={{ color: '#888', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        Live data coming soon
      </p>
      <a href="/" style={{ marginTop: '2rem', color: '#444', textDecoration: 'none', fontSize: '0.75rem' }}>
        ← Back
      </a>
    </div>
  )
}

export default AlgoDashboard