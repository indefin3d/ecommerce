import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
  ChevronRight,
  Headset,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const primaryNavItems = ['Início', 'Produtos', 'Ofertas', 'Categorias', 'Contato']
const secondaryNavItems = ['Todas as categorias', 'Eletrônicos', 'Moda', 'Casa', 'Beleza', 'Acessórios', 'Oferta']

function toAnchorId(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function StoreHeader({ cartCount, cartOpen, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-center gap-2 px-4 py-2.5 text-center text-[12px] font-medium tracking-[0.08em] sm:px-6 lg:px-8">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px]">
            %
          </span>
          <p>
            MÍNIMO DE R$ 149,99 5% OFF NO PIX <span className="font-normal text-white/72">OU 3X S/JUROS</span>
          </p>
        </div>
      </div>

      <div className="border-b border-stone-200/80 bg-[#fffdfa]/96 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/loja-demo" className="shrink-0">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#111827_0%,#334155_100%)] text-white shadow-[0_18px_35px_rgba(15,23,42,0.16)]">
                <span className="text-base font-bold">U</span>
              </div>
              <div>
                <p className="text-[1.05rem] font-semibold tracking-[-0.03em] text-slate-950">Urban Store</p>
                <p className="text-[11px] uppercase tracking-[0.34em] text-slate-500">Loja demonstrativa</p>
              </div>
            </div>
          </Link>

          <div className="hidden flex-1 justify-center lg:flex">
            <label className="group flex w-full max-w-[550px] items-center gap-3 rounded-full border border-stone-200 bg-[#f5f4f1] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition duration-300 focus-within:border-slate-300 focus-within:bg-white focus-within:shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:border-stone-300">
              <Search className="h-4 w-4 text-slate-400 transition group-focus-within:text-slate-700" />
              <input
                type="text"
                placeholder="Digite o que você procura"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </label>
          </div>

          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <button
              type="button"
              className="group inline-flex items-center gap-3 text-left text-slate-800 transition hover:text-slate-950"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-stone-200 bg-white transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                <Headset className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-slate-500">Central de</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold">
                  Atendimento
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </span>
              </span>
            </button>

            <button
              type="button"
              className="group inline-flex items-center gap-3 text-left text-slate-800 transition hover:text-slate-950"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-stone-200 bg-white transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                <User className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-slate-500">Bem-vindo(a)</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold">
                  Entrar ou Cadastrar
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={onCartClick}
              className={`group relative inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.10)] ${
                cartOpen ? 'border-slate-900 shadow-[0_12px_28px_rgba(15,23,42,0.12)]' : 'border-stone-200'
              }`}
              aria-label="Carrinho"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onCartClick}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700"
              aria-label="Carrinho"
            >
              <div className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-[11px] font-semibold text-white">
                  {cartCount}
                </span>
              </div>
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700"
              aria-label="Conta"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700"
              aria-label="Abrir menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="hidden border-t border-stone-200/80 lg:block">
          <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-8 py-4">
            <nav className="flex items-center gap-1 text-sm font-semibold text-slate-800">
              {secondaryNavItems.map((item, index) => {
                const isOffer = item === 'Oferta'
                const isAllCategories = index === 0
                const target = isAllCategories ? '#categorias' : isOffer ? '#ofertas' : `#${toAnchorId(item)}`

                return (
                  <a
                    key={item}
                    href={target}
                    className={`group relative inline-flex items-center gap-1 rounded-full px-4 py-2 transition ${
                      isOffer
                        ? 'text-slate-950 hover:bg-slate-950 hover:text-white'
                        : 'hover:bg-slate-950/[0.045]'
                    }`}
                  >
                    {isAllCategories && <Menu className="h-4 w-4" />}
                    <span>{item}</span>
                    {(isAllCategories || ['Moda', 'Acessórios', 'Oferta'].includes(item)) && (
                      <ChevronDown className="h-4 w-4 opacity-70 transition group-hover:translate-y-[1px]" />
                    )}
                    {!isOffer && (
                      <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-slate-900 transition duration-300 group-hover:scale-x-100" />
                    )}
                  </a>
                )
              })}
            </nav>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/30 px-4 py-6 backdrop-blur-sm lg:hidden"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="ml-auto max-w-sm rounded-[2rem] bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.18)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-slate-950">Urban Store</p>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <label className="mt-5 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar produtos"
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <div className="mt-6 space-y-3">
                  {primaryNavItems.map((item) => (
                    <a
                      key={item}
                      href={`#${toAnchorId(item)}`}
                      className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <a
                    href="#ofertas"
                    className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    Oferta da semana
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900"
                  >
                    Entrar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false)
                      onCartClick()
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                  >
                    Carrinho ({cartCount})
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
