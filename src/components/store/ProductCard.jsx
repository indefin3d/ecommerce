import { motion } from 'framer-motion'
import { CreditCard, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function getBadgeTheme(badge) {
  const key = badge.toLowerCase()

  if (key.includes('premium')) {
    return 'bg-gradient-to-r from-violet-500/18 to-fuchsia-500/18 text-violet-200 border border-violet-300/18'
  }

  if (key.includes('destaque')) {
    return 'bg-gradient-to-r from-sky-500/18 to-cyan-500/18 text-sky-200 border border-sky-300/18'
  }

  if (key.includes('lote')) {
    return 'bg-gradient-to-r from-amber-500/18 to-yellow-500/18 text-amber-200 border border-amber-300/18'
  }

  if (key.includes('off')) {
    return 'bg-gradient-to-r from-emerald-500/18 to-lime-500/18 text-emerald-200 border border-emerald-300/18'
  }

  if (key.includes('novo')) {
    return 'bg-gradient-to-r from-indigo-500/18 to-blue-500/18 text-blue-200 border border-blue-300/18'
  }

  if (key.includes('oferta')) {
    return 'bg-gradient-to-r from-orange-500/18 to-rose-500/18 text-orange-200 border border-orange-300/18'
  }

  return 'bg-gradient-to-r from-stone-500/18 to-slate-500/18 text-slate-200 border border-white/18'
}

function PixMark() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/14 text-[10px] font-bold text-emerald-700">
      P
    </span>
  )
}

export function ProductCard({ product, onAddToCart }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_22px_60px_rgba(148,163,184,0.12)] transition-all duration-300"
    >
      <div className="relative overflow-hidden bg-[#f5f1e9] p-4">
        <motion.div
          animate={{ y: [0, -2, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold shadow-[0_10px_24px_rgba(148,163,184,0.18)] ${getBadgeTheme(product.badge)}`}
        >
          {product.badge}
        </motion.div>
        <Link
          to={`/loja-demo/produto/${product.slug}`}
          className="block overflow-hidden rounded-[1.8rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      </div>

      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">{product.category}</p>
        <Link to={`/loja-demo/produto/${product.slug}`} className="mt-2 block text-xl font-semibold text-slate-950">
          {product.name}
        </Link>

        <div className="mt-4">
          <div className="flex items-end gap-3">
            <p className="text-[1.65rem] font-semibold leading-none text-slate-950">
              {formatPrice(product.price)}
            </p>
            {product.oldPrice && (
              <p className="pb-1 text-sm text-slate-400 line-through">{formatPrice(product.oldPrice)}</p>
            )}
          </div>

          <div className="mt-3 space-y-1.5 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <PixMark />
              <span>
                <span className="font-medium text-slate-700">{formatPrice(product.pixPrice)}</span> no PIX
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-slate-400" />
              <span>
                ou {product.installments}x de{' '}
                <span className="font-medium text-slate-700">
                  {formatPrice(product.installmentValue)}
                </span>{' '}
                com juros
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao carrinho
        </button>
      </div>
    </motion.article>
  )
}
