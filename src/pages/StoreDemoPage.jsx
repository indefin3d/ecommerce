import { useMemo, useState } from 'react'
import { CategoryGrid } from '../components/store/CategoryGrid'
import { CartPreview } from '../components/store/CartPreview'
import { ProductGrid } from '../components/store/ProductGrid'
import { StoreFooter } from '../components/store/StoreFooter'
import { StoreHeader } from '../components/store/StoreHeader'
import { StoreHero } from '../components/store/StoreHero'
import { initialCartItems } from '../data/storeProducts'

export function StoreDemoPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [cartOpen, setCartOpen] = useState(false)

  function handleAddToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]
    })

    setCartOpen(true)
  }

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_25%,#faf7f2_68%,#f8fafc_100%)] text-slate-950">
      <StoreHeader
        cartCount={cartCount}
        cartOpen={cartOpen}
        onCartClick={() => setCartOpen((open) => !open)}
      />
      <main>
        <StoreHero />
        <CategoryGrid />
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>
      <StoreFooter />
      <CartPreview
        items={cartItems}
        isOpen={cartOpen}
        onToggle={() => setCartOpen((open) => !open)}
      />
    </div>
  )
}
