import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, CircleDashed, Package, PanelLeftClose, Search } from 'lucide-react'
import { channels, recentOrders, topProducts } from '../data/homeContent'
import { SectionTitle } from './ui/SectionTitle'

const linePoints = '0,118 40,90 86,95 132,66 178,72 224,30 270,45 316,14'

export function DashboardShowcase() {
  return (
    <section id="produto" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Visualize a operacao inteira em um painel com linguagem de produto real."
          description="A demonstracao abaixo simula o tipo de experiencia que uma marca espera de uma plataforma premium: leitura rapida, feedback claro e decisao assistida por dados."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,29,0.95),rgba(6,10,19,0.92))] shadow-[0_30px_120px_rgba(2,8,24,0.65)]"
        >
          <div className="grid xl:grid-cols-[260px_1fr]">
            <aside className="border-b border-white/8 bg-[#050b17]/90 p-5 xl:border-b-0 xl:border-r">
              <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <Search className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-500">Buscar modulo ou pedido</span>
              </div>

              <div className="mt-6 space-y-2">
                {[
                  ['Visao geral', true],
                  ['Pedidos'],
                  ['Produtos'],
                  ['Clientes'],
                  ['Financeiro'],
                  ['Marketing'],
                  ['Logistica'],
                ].map(([item, active]) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                      active
                        ? 'border border-sky-300/18 bg-sky-400/12 text-white'
                        : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
                    }`}
                  >
                    <span>{item}</span>
                    <PanelLeftClose className="h-4 w-4" />
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-sm text-slate-400">Health center</p>
                <div className="mt-4 space-y-4">
                  {[
                    ['Catalogo sincronizado', true],
                    ['Webhook de frete ativo', true],
                    ['Fila de conciliacao', false],
                  ].map(([item, ok]) => (
                    <div key={item} className="flex items-center gap-3">
                      {ok ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      ) : (
                        <CircleDashed className="h-4 w-4 text-amber-300" />
                      )}
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="p-5 lg:p-7">
              <div className="flex flex-col gap-4 border-b border-white/8 pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Dashboard de vendas</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Operacao multicanal em ritmo de escala
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Hoje', '7 dias', '30 dias'].map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-full px-4 py-2 text-sm ${
                        index === 1
                          ? 'border border-sky-300/24 bg-sky-400/10 text-white'
                          : 'border border-white/8 bg-white/[0.03] text-slate-300'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-[1.18fr_0.82fr]">
                <div className="space-y-5">
                  <div className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Receita consolidada</p>
                        <p className="mt-2 text-3xl font-semibold text-white">R$ 482.940</p>
                      </div>
                      <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-medium text-emerald-300">
                        +18,4%
                      </span>
                    </div>

                    <div className="mt-8">
                      <svg viewBox="0 0 316 128" className="h-40 w-full">
                        <defs>
                          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                          <linearGradient id="area" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(96,165,250,0.35)" />
                            <stop offset="100%" stopColor="rgba(37,99,235,0.02)" />
                          </linearGradient>
                        </defs>
                        <path
                          d={`M0,128 L${linePoints.replaceAll(' ', ' L')} L316,128 Z`}
                          fill="url(#area)"
                        />
                        <polyline
                          fill="none"
                          stroke="url(#line)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={linePoints}
                        />
                        {linePoints.split(' ').map((point) => {
                          const [cx, cy] = point.split(',')
                          return <circle key={point} cx={cx} cy={cy} r="5" fill="#93c5fd" />
                        })}
                      </svg>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-400">Pedidos recentes</p>
                        <a href="#pedidos" className="inline-flex items-center gap-2 text-sm text-sky-300">
                          Ver fila
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="mt-5 space-y-3">
                        {recentOrders.map((order) => (
                          <div
                            key={order.id}
                            className="grid grid-cols-[0.8fr_1.2fr_0.8fr_auto] items-center gap-3 rounded-2xl border border-white/6 bg-black/20 px-4 py-3 text-sm"
                          >
                            <span className="font-medium text-white">{order.id}</span>
                            <span className="text-slate-300">{order.client}</span>
                            <span className="text-slate-400">{order.total}</span>
                            <span className="rounded-full bg-white/6 px-2.5 py-1 text-xs text-slate-300">
                              {order.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-sm text-slate-400">Canais de venda</p>
                      <div className="mt-4 grid h-40 place-items-center">
                        <div className="relative grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(from_220deg,_#5eb7ff_0_34%,_#2a67ff_34%_56%,_#81d4ff_56%_73%,_#133d9f_73%_100%)]">
                          <div className="grid h-24 w-24 place-items-center rounded-full bg-[#07111e]">
                            <span className="text-sm text-slate-300">ROI</span>
                            <span className="text-xl font-semibold text-white">4,7x</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 space-y-3">
                        {channels.map((channel) => {
                          const Icon = channel.icon
                          return (
                            <div key={channel.name} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/6 text-sky-300">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <span className="text-sm text-slate-300">{channel.name}</span>
                              </div>
                              <span className="text-sm text-slate-400">{channel.value}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-400">Produtos em destaque</p>
                      <Package className="h-5 w-5 text-sky-300" />
                    </div>
                    <div className="mt-5 space-y-4">
                      {topProducts.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-2xl border border-white/6 bg-black/20 px-4 py-4"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="font-medium text-white">{item.name}</p>
                              <p className="mt-1 text-sm text-slate-400">{item.stock}</p>
                            </div>
                            <span className="text-sm text-sky-300">{item.revenue}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(72,126,255,0.12),rgba(255,255,255,0.03))] p-5">
                    <p className="text-sm text-slate-300">Marketplace sync</p>
                    <h4 className="mt-2 text-2xl font-semibold text-white">Todos os canais em compasso unico</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Publicacao de catalogo, estoque compartilhado, status de pedidos e atendimento operacional sincronizados no mesmo centro de comando.
                    </p>
                    <div className="mt-6 grid gap-3">
                      {[
                        'Mercado Livre e Shopee com publicacao automatizada',
                        'Amazon com status de envio e rastreio em lote',
                        'WhatsApp para suporte comercial e notificacoes',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
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
