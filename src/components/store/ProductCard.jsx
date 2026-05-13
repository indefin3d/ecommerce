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
      className="group overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(148,163,184,0.12)] transition-all duration-300"
    >
      <div className={`relative overflow-hidden bg-gradient-to-br ${product.palette} p-5`}>
        <div className="absolute right-4 top-4 rounded-full bg-slate-950/82 px-3 py-1 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,23,42,0.22)]">
          {product.badge}
        </div>
        <div className="mx-auto mt-10 flex h-52 w-full max-w-[220px] items-end justify-center">
          <div className="relative h-44 w-full rounded-[2rem] border border-white/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08))] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
            <div className="absolute inset-x-6 bottom-6 h-12 rounded-full bg-slate-950/18 blur-xl" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.95),_rgba(255,255,255,0.35)_28%,_rgba(15,23,42,0.12)_60%,_rgba(15,23,42,0.5)_100%)]" />
            <div className="absolute inset-x-9 bottom-8 h-18 rounded-[1.5rem] border border-white/18 bg-[linear-gradient(180deg,rgba(15,23,42,0.26),rgba(255,255,255,0.1))]" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-slate-500">{product.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950">{product.name}</h3>
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
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao carrinho
        </button>
      </div>
    </motion.article>
  )
}
