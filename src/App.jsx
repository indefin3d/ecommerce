import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { StoreCheckoutPage } from './pages/StoreCheckoutPage'
import { StoreDemoPage } from './pages/StoreDemoPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loja-demo" element={<StoreDemoPage />} />
      <Route path="/loja-demo/checkout" element={<StoreCheckoutPage />} />
    </Routes>
  )
}

export default App
