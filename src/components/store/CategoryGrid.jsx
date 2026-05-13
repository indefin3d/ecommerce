import { motion } from 'framer-motion'
import { Armchair, Dumbbell, Gem, MonitorSmartphone, Shirt, Sparkles } from 'lucide-react'
import { categories } from '../../data/storeProducts'

const icons = {
  Eletronicos: MonitorSmartphone,
  Moda: Shirt,
  Casa: Armchair,
  Beleza: Sparkles,
  Esportes: Dumbbell,
  Acessorios: Gem,
}

export function CategoryGrid() {
  return (
    <section id="categorias" className="px-4 py-16 sm:px-5 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Categorias</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Explore a loja como um ecommerce de verdade.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-500">
            Cada vitrine foi desenhada para se parecer com uma operacao real de varejo digital.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = icons[category.name]

            return (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(148,163,184,0.12)]"
              >
                <div className={`bg-gradient-to-br ${category.accent} p-5`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-slate-900 shadow-[0_10px_25px_rgba(255,255,255,0.3)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold text-slate-950">{category.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{category.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
