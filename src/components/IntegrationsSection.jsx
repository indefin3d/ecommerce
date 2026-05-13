import { motion } from 'framer-motion'
import { integrations } from '../data/homeContent'
import { SectionTitle } from './ui/SectionTitle'

export function IntegrationsSection() {
  return (
    <section id="integracoes" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
        <SectionTitle
          title="Conecte marketplace, pagamento, frete e conversa sem costura visivel."
          description="A experiencia visual das integrações foi pensada como parte central do produto, nao como add-on. Cada canal entra na operacao com leitura clara e status confiavel."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 shadow-[0_20px_60px_rgba(2,8,24,0.45)] backdrop-blur-xl"
              >
                <div className={`rounded-[1.35rem] bg-gradient-to-br ${item.tone} p-4`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/14 bg-[#071322]/80 text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-10 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-white">{item.name}</p>
                      <p className="mt-2 text-sm text-slate-300">Sincronizacao pronta para escala</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-sky-200">Online</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
