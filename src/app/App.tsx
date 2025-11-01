import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/home'

function App() {
  return (
    <BrowserRouter basename="/react-slide-test">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
