import { Navigate, useParams } from 'react-router-dom'
import { ProductDetailPage } from '../components/store/ProductDetailPage'
import { StoreFooter } from '../components/store/StoreFooter'
import { StoreHeader } from '../components/store/StoreHeader'
import { storeProducts } from '../data/storeProducts'

export function StoreProductPage() {
  const { slug } = useParams()
  const product = storeProducts.find((item) => item.slug === slug)

  if (!product) {
    return <Navigate to="/loja-demo" replace />
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_25%,#faf7f2_68%,#f8fafc_100%)] text-slate-950">
      <StoreHeader cartCount={3} cartOpen={false} onCartClick={() => {}} />
      <main>
        <ProductDetailPage product={product} />
      </main>
      <StoreFooter />
    </div>
  )
}
