import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { offerProducts, storeProducts } from '../../data/storeProducts'
import { ProductCard } from './ProductCard'

export function ProductGrid({ onAddToCart }) {
  return (
    <>
      <section id="produtos" className="px-4 py-16 sm:px-5 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Vitrine de produtos</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Produtos ficticios com estrutura real de ecommerce.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-500">
              Cards prontos para evoluir com backend, carrinho persistente, favoritos e filtros.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      <section id="ofertas" className="px-4 py-16 sm:px-5 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#111827_60%,#1d4ed8_100%)] px-5 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:px-7 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-cyan-100">
                <Flame className="h-4 w-4" />
                Ofertas da semana
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Promocoes com cara de campanha comercial pronta para conversao.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Esta secao simula uma area de destaque promocional com leitura visual forte e foco comercial.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {offerProducts.map((product) => (
              <div
                key={`${product.id}-offer`}
                className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md"
              >
                <div className="grid items-center gap-5 md:grid-cols-[0.9fr_1.1fr]">
                  <div className={`rounded-[1.6rem] bg-gradient-to-br ${product.palette} p-5`}>
                    <div className="mx-auto flex h-44 max-w-[220px] items-end justify-center rounded-[1.6rem] border border-white/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08))]">
                      <div className="mb-6 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_35%,_rgba(255,255,255,0.92),_rgba(255,255,255,0.38)_30%,_rgba(15,23,42,0.3)_70%,_rgba(15,23,42,0.7)_100%)]" />
                    </div>
                  </div>
                  <div>
                    <span className="rounded-full bg-amber-300/18 px-3 py-1 text-xs font-semibold text-amber-200">
                      {product.badge}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{product.name}</h3>
                    <p className="mt-2 text-sm text-slate-300">{product.category}</p>
                    <div className="mt-5 flex items-end gap-3">
                      <p className="text-3xl font-semibold text-white">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          maximumFractionDigits: 0,
                        }).format(product.price)}
                      </p>
                      <p className="pb-1 text-sm text-slate-400 line-through">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          maximumFractionDigits: 0,
                        }).format(product.oldPrice)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
