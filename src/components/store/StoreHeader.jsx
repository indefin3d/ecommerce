import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = ['Inicio', 'Produtos', 'Ofertas', 'Categorias', 'Contato']

export function StoreHeader({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-[#fffdf8]/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-5 lg:px-8">
        <Link to="/loja-demo" className="shrink-0">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(145deg,#111827_0%,#334155_100%)] text-white shadow-[0_15px_30px_rgba(15,23,42,0.24)]">
              <span className="text-base font-bold">U</span>
            </div>
            <div>
              <p className="text-base font-semibold text-slate-950">Urban Store</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Ecommerce demo</p>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden min-w-[280px] flex-1 lg:flex lg:max-w-md">
          <label className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-[0_8px_25px_rgba(148,163,184,0.14)]">
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
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_25px_rgba(148,163,184,0.14)] transition hover:-translate-y-0.5 hover:text-slate-950"
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
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-[0_8px_25px_rgba(148,163,184,0.14)] transition hover:-translate-y-0.5 hover:text-slate-950"
          >
            Entrar
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
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
              className="ml-auto max-w-sm rounded-[2rem] bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.24)]"
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
                    href={`#${item.toLowerCase()}`}
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
                  className="rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                >
                  Carrinho ({cartCount})
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
