function Home() {
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
        ES Futures Trading Algorithm
      </h1>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <a href="/algo/showcase" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
          Showcase →
        </a>
        <a href="/algo/dashboard" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
          Dashboard →
        </a>
      </div>
      <p style={{ marginTop: '3rem', color: '#444', fontSize: '0.75rem' }}>
        maxrosenboom.com
      </p>
    </div>
  )
}

export default Home