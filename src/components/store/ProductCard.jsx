import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function ProductCard({ product, onAddToCart }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_22px_60px_rgba(148,163,184,0.12)] transition-all duration-300"
    >
      <div className="relative overflow-hidden bg-[#f5f1e9] p-4">
        <div className="absolute right-4 top-4 z-10 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-slate-900 shadow-[0_10px_24px_rgba(148,163,184,0.18)]">
          {product.badge}
        </div>
        <div className="overflow-hidden rounded-[1.8rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-slate-500">{product.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-500">{product.description}</p>
        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={`${product.id}-${index}`}
              className={`h-4 w-4 ${
                index < product.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-slate-500">({product.rating}.0)</span>
        </div>
        <div className="mt-5 flex items-end gap-3">
          <p className="text-2xl font-semibold text-slate-950">{formatPrice(product.price)}</p>
          {product.oldPrice && (
            <p className="pb-1 text-sm text-slate-400 line-through">{formatPrice(product.oldPrice)}</p>
          )}
        </div>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao carrinho
        </button>
      </div>
    </motion.article>
  )
}
