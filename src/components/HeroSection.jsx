import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { chartBars, kpis } from '../data/homeContent'
import { Button } from './ui/Button'

function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(9,16,33,0.96),rgba(7,12,24,0.88))] p-4 shadow-[0_40px_140px_rgba(3,10,28,0.9)] backdrop-blur-2xl lg:p-6">
      <div className="absolute -left-8 top-14 hidden w-48 rounded-[1.5rem] border border-sky-400/20 bg-slate-950/75 p-4 shadow-[0_20px_60px_rgba(15,79,181,0.25)] backdrop-blur-xl md:block float-slow">
        <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Conversao em alta</p>
        <p className="mt-3 text-3xl font-semibold text-white">4,82%</p>
        <p className="mt-2 text-sm text-emerald-300">+0,9 p.p. nos ultimos 30 dias</p>
      </div>
      <div className="absolute -right-6 bottom-8 hidden w-52 rounded-[1.5rem] border border-white/12 bg-white/8 p-4 shadow-[0_20px_60px_rgba(15,79,181,0.2)] backdrop-blur-xl lg:block float-delayed">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white">Pedidos monitorados</p>
          <span className="rounded-full bg-emerald-400/14 px-2.5 py-1 text-xs font-medium text-emerald-300">
            Em tempo real
          </span>
        </div>
        <div className="mt-4 space-y-3">
          {[
            ['#1042', 'Pago'],
            ['#1041', 'Separacao'],
            ['#1039', 'Enviado'],
          ].map(([id, label]) => (
            <div key={id} className="flex items-center justify-between rounded-2xl border border-white/6 bg-black/20 px-3 py-2">
              <span className="text-sm text-slate-200">{id}</span>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-white/8 px-2 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Operating system</p>
          <h3 className="mt-2 text-xl font-semibold text-white">GoMaster Control Center</h3>
        </div>
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {kpis.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <span className="rounded-full bg-sky-400/12 px-2.5 py-1 text-xs font-medium text-sky-300">
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/65 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Receita dos ultimos 7 dias</p>
                <p className="mt-2 text-2xl font-semibold text-white">R$ 126.480</p>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                +24,8%
              </span>
            </div>

            <div className="mt-8 flex h-48 items-end justify-between gap-3">
              {chartBars.map((bar) => (
                <div key={bar.label} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-full w-full items-end rounded-t-[1.25rem] bg-white/[0.03] p-1">
                    <div
                      style={{ height: bar.height }}
                      className="w-full rounded-[1rem] bg-[linear-gradient(180deg,rgba(109,184,255,0.95),rgba(46,105,255,0.55))] shadow-[0_8px_30px_rgba(50,120,255,0.35)]"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/65 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Saude da operacao</p>
                <p className="mt-2 text-xl font-semibold text-white">Sync multicanal estavel</p>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-sky-300/25 bg-sky-400/12 text-sky-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                ['Marketplaces', '100%'],
                ['Gateways', '99,98%'],
                ['Logistica', '97,3%'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{label}</span>
                    <span className="text-slate-500">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/6">
                    <div
                      className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(96,165,250,0.9),rgba(29,78,216,0.8))]"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/65 p-5">
            <p className="text-sm text-slate-400">Automacoes inteligentes</p>
            <div className="mt-4 space-y-3">
              {[
                'Checkout com recuperacao de abandono',
                'Sincronizacao de estoque entre canais',
                'Atualizacao de frete e rastreio por evento',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-400/12 text-sky-300">
                    <Zap className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 xl:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/14 bg-sky-400/8 px-4 py-2 text-sm text-sky-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            Operacao unificada para escalar ecommerce com mais margem
          </div>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl xl:text-[5.2rem]">
            A plataforma que transforma sua loja em uma maquina de crescimento.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            GoMaster Ecommerce centraliza loja virtual, marketplaces, pagamentos, estoque,
            frete e analytics em uma experiencia premium pronta para operar como produto de
            mercado.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="group">
              Criar Loja
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary">Ver demonstracao</Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['+R$ 42 mi', 'transacionados por marcas em crescimento'],
              ['99,98%', 'estabilidade de pagamentos e sincronizacao'],
              ['7 canais', 'operando em uma camada unica de controle'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12 }}
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  )
}
