import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = ['Início', 'Produtos', 'Ofertas', 'Categorias', 'Contato']

export function StoreHeader({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-slate-200/70 bg-[#f7f3eb] text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 text-[13px] sm:px-5 lg:px-8">
          <p>Frete expresso para capitais selecionadas</p>
          <div className="hidden items-center gap-6 md:flex">
            <span>Parcelamento em até 10x</span>
            <span>Atendimento premium</span>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200/70 bg-[#fffdf8]/92 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-5 lg:px-8">
        <Link to="/loja-demo" className="shrink-0">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-[1.4rem] bg-[linear-gradient(145deg,#111827_0%,#334155_100%)] text-white shadow-[0_15px_30px_rgba(15,23,42,0.16)]">
              <span className="text-base font-bold">U</span>
            </div>
            <div>
              <p className="text-base font-semibold text-slate-950">Urban Store</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Loja demonstrativa</p>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden min-w-[300px] flex-1 lg:flex lg:max-w-xl">
          <label className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3.5 shadow-[0_10px_30px_rgba(148,163,184,0.08)] transition focus-within:border-slate-400">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar produtos, categorias ou ofertas"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_10px_30px_rgba(148,163,184,0.08)] transition hover:-translate-y-0.5 hover:text-slate-950"
            aria-label="Carrinho"
          >
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            </div>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-[0_10px_30px_rgba(148,163,184,0.08)] transition hover:-translate-y-0.5 hover:text-slate-950"
          >
            Entrar
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
            aria-label="Carrinho"
          >
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            </div>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
            aria-label="Conta"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
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
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
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
