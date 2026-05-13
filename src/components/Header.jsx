import { Menu, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/Button'

const navItems = ['Produto', 'Recursos', 'Integracoes', 'Planos', 'Contato']

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07101f]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/30 bg-[linear-gradient(145deg,rgba(96,165,250,0.3),rgba(37,99,235,0.1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
            <Sparkles className="h-5 w-5 text-sky-300" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">GoMaster</p>
            <p className="text-base font-semibold text-white">Ecommerce</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/loja-demo"
            className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold tracking-[0.01em] text-slate-100 backdrop-blur-xl transition-all duration-300 hover:border-sky-300/30 hover:bg-white/10"
          >
            Ver loja demo
          </Link>
          <Button variant="ghost">Entrar</Button>
          <Button>Criar Loja</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-slate-200 lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
