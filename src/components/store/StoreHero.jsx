import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { storeHero } from '../../data/storeProducts'

export function StoreHero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[#f3efe7]" />
      <div className="absolute inset-0">
        <img
          src={storeHero.image}
          alt="Banner editorial da Urban Store"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.48)_34%,rgba(15,23,42,0.18)_62%,rgba(15,23,42,0.06)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[740px] max-w-7xl items-end px-4 pb-14 pt-12 sm:px-5 lg:min-h-[820px] lg:px-8 lg:pb-20 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
            Curadoria premium para rotina urbana
          </p>
          <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl xl:text-[6.1rem]">
            {storeHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
            {storeHero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.28)] transition hover:-translate-y-0.5"
            >
              Ver produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#ofertas"
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5"
            >
              Ofertas da semana
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
