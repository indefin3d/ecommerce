import { Route, Routes } from 'react-router-dom'
import { ProductPaymentWindow } from './components/store/ProductPaymentWindow'
import { HomePage } from './pages/HomePage'
import { StoreCheckoutPage } from './pages/StoreCheckoutPage'
import { StoreDemoPage } from './pages/StoreDemoPage'
import { StoreProductPage } from './pages/StoreProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loja-demo" element={<StoreDemoPage />} />
      <Route path="/loja-demo/checkout" element={<StoreCheckoutPage />} />
      <Route path="/loja-demo/produto/:slug" element={<StoreProductPage />} />
      <Route
        path="/loja-demo/produto/:slug/formas-de-pagamento"
        element={<ProductPaymentWindow />}
      />
    </Routes>
  )
}

export default App
