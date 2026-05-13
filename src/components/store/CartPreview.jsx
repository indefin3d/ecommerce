import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, ShoppingBag } from 'lucide-react'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function CartPreview({ items, isOpen, onToggle }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(15,23,42,0.25)] lg:hidden"
      >
        <ShoppingBag className="h-4 w-4" />
        Carrinho ({items.length})
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            className="fixed bottom-20 right-4 z-40 w-[calc(100%-2rem)] max-w-sm rounded-[2rem] border border-slate-200/80 bg-white/96 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:bottom-6 lg:right-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">Carrinho visual</p>
                <p className="text-sm text-slate-500">Simulação de compra do cliente</p>
              </div>
              <button
                type="button"
                onClick={onToggle}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.4rem] border border-slate-200 bg-[#faf7f2] px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-slate-950">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-500">Quantidade: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-slate-950 px-5 py-4 text-white">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Subtotal</span>
                <span className="text-lg font-semibold text-white">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Finalizar compra
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
