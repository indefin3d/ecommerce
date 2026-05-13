import { motion } from 'framer-motion'
import { ArrowRight, BadgePercent, Sparkles } from 'lucide-react'

export function StoreHero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-5 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_80%_25%,_rgba(244,114,182,0.14),_transparent_24%),linear-gradient(180deg,#fffaf1_0%,#fffdf8_55%,#f8fafc_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm text-slate-600 shadow-[0_12px_30px_rgba(148,163,184,0.12)]">
            <Sparkles className="h-4 w-4 text-sky-500" />
            Curadoria premium para rotina urbana
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl xl:text-[5.25rem]">
            Produtos que fazem sua casa, estilo e tecnologia parecerem mais caros.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A Urban Store combina design, performance e ofertas selecionadas para criar
            uma experiencia de compra elegante, aspiracional e objetiva.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5"
            >
              Ver produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#ofertas"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-[0_12px_30px_rgba(148,163,184,0.12)] transition hover:-translate-y-0.5"
            >
              Ofertas da semana
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {['Entrega expressa', 'Pagamento seguro', 'Troca facilitada'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm text-slate-600 shadow-[0_10px_25px_rgba(148,163,184,0.08)]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -left-6 top-10 hidden rounded-[1.75rem] border border-white/60 bg-white/80 p-4 shadow-[0_18px_50px_rgba(148,163,184,0.18)] backdrop-blur-xl md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                <BadgePercent className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Sale drop</p>
                <p className="text-sm text-slate-500">Descontos selecionados ate domingo</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(145deg,#111827_0%,#0f172a_36%,#1d4ed8_100%)] p-5 shadow-[0_35px_100px_rgba(15,23,42,0.22)] sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_28%),radial-gradient(circle_at_25%_75%,_rgba(34,211,238,0.22),_transparent_30%)]" />
            <div className="relative grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="rounded-[1.8rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm text-slate-200">Colecao flagship</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Tecnologia com acabamento editorial.</p>
                  <div className="mt-8 h-52 rounded-[1.75rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.22),rgba(255,255,255,0.05))] p-4">
                    <div className="flex h-full items-end justify-between rounded-[1.4rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.22),rgba(255,255,255,0.08))] p-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-100">Audio premium</p>
                        <p className="mt-2 text-2xl font-semibold text-white">Headphone Urban X1</p>
                      </div>
                      <div className="h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_35%,_rgba(255,255,255,0.8),_rgba(14,165,233,0.2)_35%,_rgba(2,6,23,0.8)_70%)] shadow-[inset_0_8px_20px_rgba(255,255,255,0.25)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.8rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm text-slate-200">A partir de</p>
                  <p className="mt-3 text-4xl font-semibold text-white">R$ 189</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Itens com estica, clean design e acabamento pensado para conversao.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.8rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-sm text-slate-200">Frete</p>
                    <p className="mt-2 text-2xl font-semibold text-white">24h</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cyan-100">
                      capitais selecionadas
                    </p>
                  </div>
                  <div className="rounded-[1.8rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-sm text-slate-200">Avaliacoes</p>
                    <p className="mt-2 text-2xl font-semibold text-white">4.9/5</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cyan-100">clientes recorrentes</p>
                  </div>
                </div>
                <div className="rounded-[1.8rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm text-slate-200">Drop da semana</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xl font-semibold text-white">Essenciais para casa e setup</p>
                      <p className="mt-2 text-sm text-slate-300">Design funcional com leitura premium.</p>
                    </div>
                    <div className="h-16 w-16 rounded-[1.4rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.35),rgba(255,255,255,0.08))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
