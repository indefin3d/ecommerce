import { CheckoutPreview } from '../components/store/CheckoutPreview'
import { StoreFooter } from '../components/store/StoreFooter'
import { StoreHeader } from '../components/store/StoreHeader'
import { initialCartItems } from '../data/storeProducts'

export function StoreCheckoutPage() {
  const cartCount = initialCartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_25%,#faf7f2_68%,#f8fafc_100%)] text-slate-950">
      <StoreHeader cartCount={cartCount} cartOpen={false} onCartClick={() => {}} />
      <main className="pt-4">
        <CheckoutPreview items={initialCartItems} />
      </main>
      <StoreFooter />
    </div>
  )
}
