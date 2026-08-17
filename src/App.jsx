import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        ES Futures Trading Algorithm
      </h1>
      <p style={{ color: '#888', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        Dashboard coming soon
      </p>
      <div style={{ marginTop: '3rem', width: '40px', height: '1px', backgroundColor: '#333' }} />
      <p style={{ marginTop: '1rem', color: '#444', fontSize: '0.75rem' }}>
        maxrosenboom.com
      </p>
    </div>
  )
}

export default App
