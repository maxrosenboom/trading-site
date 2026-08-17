import { Routes, Route, Navigate } from 'react-router-dom'
import Algo from './pages/Algo'
import AlgoShowcase from './pages/AlgoShowcase'
import AlgoDashboard from './pages/AlgoDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/algo" replace />} />
      <Route path="/algo" element={<Algo />} />
      <Route path="/algo/showcase" element={<AlgoShowcase />} />
      <Route path="/algo/dashboard" element={<AlgoDashboard />} />
    </Routes>
  )
}

export default App