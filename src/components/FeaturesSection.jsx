import { motion } from 'framer-motion'
import { features } from '../data/homeContent'
import { SectionTitle } from './ui/SectionTitle'

export function FeaturesSection() {
  return (
    <section id="recursos" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Infraestrutura visualmente premium, operacionalmente completa."
          description="Cada modulo foi desenhado para parecer produto de tecnologia de ponta e, ao mesmo tempo, refletir o fluxo real de uma operacao profissional de ecommerce."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-[0_20px_50px_rgba(2,10,28,0.35)] backdrop-blur-xl"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-sky-300/25 bg-sky-400/10 text-sky-300 transition duration-300 group-hover:border-sky-200/40 group-hover:bg-sky-400/16">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{feature.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
