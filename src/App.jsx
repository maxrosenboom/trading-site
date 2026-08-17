import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AlgoShowcase from './pages/AlgoShowcase'
import AlgoDashboard from './pages/AlgoDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/algo/showcase" element={<AlgoShowcase />} />
      <Route path="/algo/dashboard" element={<AlgoDashboard />} />
    </Routes>
  )
}

export default App