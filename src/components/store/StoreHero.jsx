import { motion } from 'framer-motion'
import { ArrowRight, BadgePercent, Search, Sparkles, Star } from 'lucide-react'
import { storeHero } from '../../data/storeProducts'

export function StoreHero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#f3efe7]" />
      <div className="absolute inset-0">
        <img
          src={storeHero.image}
          alt="Banner editorial da Urban Store"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.85)_0%,rgba(15,23,42,0.58)_34%,rgba(15,23,42,0.22)_60%,rgba(15,23,42,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_28%),radial-gradient(circle_at_78%_24%,_rgba(56,189,248,0.18),_transparent_22%)]" />

      <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-end gap-10 px-4 pb-12 pt-12 sm:px-5 lg:min-h-[840px] lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-16 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-sky-300" />
            Curadoria premium para rotina urbana
          </div>
          <h1 className="mt-7 max-w-[12ch] text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl xl:text-[6rem]">
            {storeHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
            {storeHero.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
          <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              ['Entrega expressa', '24h nas capitais'],
              ['Pagamento seguro', 'PIX, cartão e boleto'],
              ['Curadoria editorial', 'Drops semanais exclusivos'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.45rem] border border-white/12 bg-white/10 p-4 text-white backdrop-blur-md"
              >
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative lg:pb-4"
        >
          <div className="absolute -left-6 top-10 hidden rounded-[1.75rem] border border-white/12 bg-[#0f172a]/78 p-4 text-white shadow-[0_18px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/14 text-emerald-300">
                <BadgePercent className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Sale drop</p>
                <p className="text-sm text-slate-300">Descontos selecionados até domingo</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/12 bg-[#0f172a]/54 p-4 shadow-[0_40px_120px_rgba(15,23,42,0.3)] backdrop-blur-2xl sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Coleção flagship</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Design que vende pela imagem.</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-white/8 px-3 py-1.5 text-sm text-amber-200">
                    <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                    4,9
                  </div>
                </div>
                <div className="mt-5 overflow-hidden rounded-[1.8rem]">
                  <img
                    src={storeHero.offerImage}
                    alt="Lifestyle editorial da Urban Store"
                    className="h-[300px] w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/18 px-4 py-3">
                  <div>
                    <p className="text-sm text-slate-300">Drop da semana</p>
                    <p className="mt-1 text-lg font-semibold text-white">Seleção com moda, tech e casa</p>
                  </div>
                  <a
                    href="#ofertas"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Busca inteligente</p>
                      <p className="mt-2 text-3xl font-semibold text-white">Encontre peças desejáveis em segundos.</p>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white">
                      <Search className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5">
                    <p className="text-sm text-slate-300">A partir de</p>
                    <p className="mt-3 text-4xl font-semibold text-white">R$ 189</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Itens com imagem forte, leitura limpa e alto potencial comercial.
                    </p>
                  </div>
                  <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5">
                    <p className="text-sm text-slate-300">Curadoria</p>
                    <p className="mt-3 text-4xl font-semibold text-white">8+</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Produtos de demonstração com estrutura pronta para catálogo real.
                    </p>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      ['Compra segura', 'Checkout protegido'],
                      ['Entrega rápida', 'Capitais em 24h'],
                      ['Suporte premium', 'Atendimento humanizado'],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-[1.5rem] border border-white/8 bg-black/18 p-4">
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                      </div>
                    ))}
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
