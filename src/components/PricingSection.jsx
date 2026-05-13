import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { plans } from '../data/homeContent'
import { Button } from './ui/Button'
import { SectionTitle } from './ui/SectionTitle'

export function PricingSection() {
  return (
    <section id="planos" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Planos desenhados para maturidade operacional real."
          description="Da primeira venda estruturada ao ecommerce com alto volume, a mesma linguagem visual premium acompanha a evolucao da operacao."
          align="center"
        />

        <div className="mt-14 grid gap-5 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className={`rounded-[2rem] border p-7 backdrop-blur-xl ${
                plan.highlight
                  ? 'border-sky-300/24 bg-[linear-gradient(180deg,rgba(39,104,255,0.18),rgba(255,255,255,0.04))] shadow-[0_30px_90px_rgba(36,107,255,0.24)]'
                  : 'border-white/10 bg-white/[0.04]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">{plan.description}</p>
                </div>
                {plan.highlight && (
                  <span className="rounded-full border border-sky-300/20 bg-sky-400/12 px-3 py-1 text-xs font-medium text-sky-200">
                    Mais escolhido
                  </span>
                )}
              </div>

              <div className="mt-8 border-t border-white/8 pt-8">
                <p className="text-4xl font-semibold tracking-[-0.04em] text-white">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-500">por mes</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-sky-400/12 text-sky-200">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'primary' : 'secondary'}
                className="mt-10 w-full justify-center"
              >
                {plan.highlight ? 'Comecar agora' : 'Falar com especialista'}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
