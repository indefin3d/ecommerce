import { motion } from 'framer-motion'
import { Flame, Plus, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { offerProducts, storeProducts } from '../../data/storeProducts'
import { ProductCard } from './ProductCard'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function getBadgeTheme(badge) {
  const key = badge.toLowerCase()

  if (key.includes('premium')) {
    return 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white border border-white/25'
  }

  if (key.includes('destaque')) {
    return 'bg-gradient-to-r from-sky-600 to-cyan-500 text-white border border-white/25'
  }

  if (key.includes('lote')) {
    return 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border border-white/30'
  }

  if (key.includes('off')) {
    return 'bg-gradient-to-r from-emerald-500 to-lime-400 text-white border border-white/25'
  }

  if (key.includes('oferta')) {
    return 'bg-gradient-to-r from-orange-500 to-rose-500 text-white border border-white/25'
  }

  if (key.includes('mais')) {
    return 'bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 border border-white/30'
  }

  return 'bg-gradient-to-r from-slate-700 to-slate-500 text-white border border-white/25'
}

function FlameBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
      <motion.span
        animate={{
          rotate: [-6, 6, -4, 0],
          scale: [1, 1.08, 0.98, 1],
          filter: [
            'drop-shadow(0 0 0px rgba(251,191,36,0.0))',
            'drop-shadow(0 0 8px rgba(251,191,36,0.55))',
            'drop-shadow(0 0 4px rgba(249,115,22,0.35))',
            'drop-shadow(0 0 0px rgba(251,191,36,0.0))',
          ],
        }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="inline-flex"
      >
        <Flame className="h-4 w-4 text-amber-300" />
      </motion.span>
      Ofertas da semana
    </div>
  )
}

export function ProductGrid({ onAddToCart }) {
  const promotionalProducts = offerProducts.slice(0, 2)

  return (
    <>
      <section id="produtos" className="px-4 py-20 sm:px-5 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Vitrine de produtos</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Produtos fictícios com estrutura real de e-commerce.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {storeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ofertas" className="py-20 lg:py-24">
        <div className="overflow-hidden bg-[#111827] shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
          <div className="grid xl:grid-cols-[1.06fr_0.94fr]">
            <div className="relative min-h-[520px] xl:min-h-[760px]">
              <img
                src={offerProducts[0].image}
                alt="Oferta premium da semana"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.28)_44%,rgba(17,24,39,0.84)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl p-6 sm:p-8 xl:left-0 xl:max-w-none xl:p-14">
                <FlameBadge />
                <h2 className="mt-6 max-w-[13ch] text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl">
                  Campanha visual com leitura comercial premium.
                </h2>
                <Link
                  to={`/loja-demo/produto/${offerProducts[0].slug}`}
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Ver oferta principal
                </Link>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-4xl flex-col px-5 py-8 sm:px-8 lg:px-10 xl:max-w-none xl:px-12 xl:py-12">
              <div className="max-w-[720px]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Seleção promocional</p>
                <h3 className="mt-4 max-w-[14ch] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                  Peças com margem de destaque e leitura imediata.
                </h3>
              </div>

              <div className="mt-10 flex flex-1 flex-col gap-5">
                {promotionalProducts.map((product, index) => (
                  <motion.div
                    key={`${product.id}-offer`}
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="overflow-hidden rounded-[2rem] border border-white/8 bg-white/6 p-5 backdrop-blur-md"
                  >
                    <div className="grid items-stretch gap-5 md:grid-cols-[180px_1fr]">
                      <Link
                        to={`/loja-demo/produto/${product.slug}`}
                        className="overflow-hidden rounded-[1.6rem] bg-white/5"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full min-h-[220px] w-full object-cover"
                        />
                      </Link>

                      <div className="flex min-h-[220px] flex-col text-left">
                        <motion.span
                          animate={{ y: [0, -2, 0], scale: [1, 1.03, 1] }}
                          transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                          className={`self-start rounded-full px-3 py-1 text-xs font-semibold shadow-[0_12px_24px_rgba(15,23,42,0.24)] ${getBadgeTheme(product.badge)}`}
                        >
                          {product.badge}
                        </motion.span>

                        <Link
                          to={`/loja-demo/produto/${product.slug}`}
                          className="mt-4 block max-w-[18ch] text-[1.9rem] font-semibold leading-[0.98] !text-white transition hover:text-white/88"
                        >
                          {product.name}
                        </Link>

                        <p className="mt-2 text-[15px] text-slate-400">{product.category}</p>

                        <div className="mt-3 space-y-0">
                          {product.oldPrice && (
                            <p className="text-[15px] text-slate-500 line-through">{formatPrice(product.oldPrice)}</p>
                          )}
                          <p className="text-[2.35rem] font-semibold leading-none tracking-[-0.04em] text-white">
                            {formatPrice(product.price)}
                          </p>
                        </div>

                        <div className="mt-2 text-[15px] leading-5 text-slate-300">
                          {formatPrice(product.pixPrice)} no PIX
                        </div>
                        <div className="mt-0.5 text-[15px] leading-5 text-slate-400">
                          ou {product.installments}x de {formatPrice(product.installmentValue)}
                        </div>

                        <button
                          type="button"
                          onClick={() => onAddToCart(product)}
                          className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-950 transition hover:-translate-y-0.5"
                          aria-label={`Adicionar ${product.name} ao carrinho`}
                        >
                          <Plus className="h-4 w-4" />
                          <ShoppingCart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
