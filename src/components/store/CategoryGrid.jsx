import { motion } from 'framer-motion'
import { Armchair, Dumbbell, Gem, MonitorSmartphone, Shirt, Sparkles } from 'lucide-react'
import { categories } from '../../data/storeProducts'

const icons = {
  Eletrônicos: MonitorSmartphone,
  Moda: Shirt,
  Casa: Armchair,
  Beleza: Sparkles,
  Esportes: Dumbbell,
  Acessórios: Gem,
}

export function CategoryGrid() {
  return (
    <section id="categorias" className="relative overflow-hidden bg-[#fbfaf7] px-4 py-20 sm:px-5 lg:px-8 lg:py-24">
      <motion.div
        animate={{ x: [0, 50, -10, 0], y: [0, -24, 18, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(148,163,184,0.14),_transparent_68%)]"
      />
      <motion.div
        animate={{ x: [0, -42, 12, 0], y: [0, 30, -16, 0] }}
        transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(226,232,240,0.6),_transparent_70%)]"
      />
      <motion.div
        animate={{ opacity: [0.18, 0.35, 0.18] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.55)_30%,transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Categorias</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Explore a loja como um ecommerce de verdade.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_22px_60px_rgba(148,163,184,0.12)]"
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={`Categoria ${category.name}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.0)_0%,rgba(15,23,42,0.78)_100%)]" />
                <div className="relative flex min-h-[330px] flex-col justify-end p-6">
                  <div className="mb-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/18 bg-white/12 text-white backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.14)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200">{category.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
