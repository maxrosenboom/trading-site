import { useNavigate } from 'react-router-dom'

function Algo() {
  const navigate = useNavigate()

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
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <p style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          ES Futures · Algorithmic Trading
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '1.5rem', lineHeight: 1.3 }}>
          Trading Algorithm
        </h1>
        <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button
            onClick={() => navigate('/algo/showcase')}
            style={{
              backgroundColor: '#ffffff',
              color: '#0a0a0a',
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            View Showcase →
          </button>
          <button
            onClick={() => navigate('/algo/dashboard')}
            style={{
              backgroundColor: 'transparent',
              color: '#888',
              border: '1px solid #333',
              padding: '0.75rem 1.5rem',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Live Dashboard →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Algo