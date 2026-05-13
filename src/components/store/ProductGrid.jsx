import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { offerProducts, storeProducts } from '../../data/storeProducts'
import { ProductCard } from './ProductCard'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function ProductGrid({ onAddToCart }) {
  return (
    <>
      <section id="produtos" className="px-4 py-20 sm:px-5 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Vitrine de produtos</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Produtos fictícios com estrutura real de e-commerce.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-500">
              Cards prontos para evoluir com backend, carrinho persistente, favoritos e filtros.
            </p>
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
          <div className="grid xl:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[460px] xl:min-h-[620px]">
              <img
                src={offerProducts[0].image}
                alt="Oferta premium da semana"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.12),rgba(17,24,39,0.82))]" />
              <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl p-6 sm:p-8 xl:left-0 xl:max-w-none xl:p-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                  <Flame className="h-4 w-4" />
                  Ofertas da semana
                </div>
                <h2 className="mt-5 max-w-lg text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Campanha visual com cara de e-commerce premium.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Destaques promocionais com imagem forte, preço hierarquizado e leitura mais confortável.
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8 xl:max-w-none xl:px-10 xl:py-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Seleção promocional</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Produtos em destaque com mais respiro visual.
                  </h3>
                </div>
                <p className="max-w-md text-base leading-7 text-slate-300">
                  A seção agora ocupa largura total e ficou menos comprimida, com foco em leitura e conversão.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {offerProducts.map((product) => (
                  <div
                    key={`${product.id}-offer`}
                    className="overflow-hidden rounded-[2rem] border border-white/8 bg-white/6 p-4 backdrop-blur-md"
                  >
                    <div className="grid items-center gap-5 md:grid-cols-[0.9fr_1.1fr]">
                      <div className="overflow-hidden rounded-[1.7rem]">
                        <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                      </div>
                      <div>
                        <span className="rounded-full bg-amber-300/18 px-3 py-1 text-xs font-semibold text-amber-200">
                          {product.badge}
                        </span>
                        <h3 className="mt-4 text-2xl font-semibold text-white">{product.name}</h3>
                        <p className="mt-2 text-sm text-slate-300">{product.category}</p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{product.description}</p>
                        <div className="mt-5 flex items-end gap-3">
                          <p className="text-3xl font-semibold text-white">{formatPrice(product.price)}</p>
                          <p className="pb-1 text-sm text-slate-400 line-through">
                            {formatPrice(product.oldPrice)}
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
          </div>
        </div>
      </section>
    </>
  )
}
