import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Minus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function CartPreview({
  items,
  isOpen,
  onToggle,
  onRemoveItem,
  onDecreaseItem,
  onClearCart,
}) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="fixed bottom-5 right-5 z-[80] inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(15,23,42,0.25)] lg:hidden"
      >
        <ShoppingBag className="h-4 w-4" />
        Carrinho ({items.length})
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="fixed right-4 top-20 z-[90] w-[calc(100%-2rem)] max-w-sm rounded-[2rem] border border-slate-200/80 bg-white/98 p-5 shadow-[0_40px_100px_rgba(15,23,42,0.22)] backdrop-blur-xl lg:right-6 lg:top-24"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-950">Carrinho visual</p>
                <p className="text-sm text-slate-500">Simulação de compra do cliente</p>
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-rose-200 hover:text-rose-600"
                    aria-label="Limpar carrinho"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={onToggle}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {items.length === 0 ? (
                <div className="rounded-[1.4rem] border border-dashed border-slate-200 bg-[#faf7f2] px-4 py-8 text-center">
                  <p className="text-sm font-medium text-slate-900">Carrinho vazio</p>
                  <p className="mt-1 text-sm text-slate-500">Os produtos adicionados aparecerão aqui.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[1.4rem] border border-slate-200 bg-[#faf7f2] px-4 py-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-medium text-slate-950">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">Quantidade: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onDecreaseItem(item.id)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300"
                        aria-label={`Diminuir quantidade de ${item.name}`}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-rose-200 hover:text-rose-600"
                        aria-label={`Remover ${item.name} do carrinho`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-slate-950 px-5 py-4 text-white">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Subtotal</span>
                <span className="text-lg font-semibold text-white">{formatPrice(subtotal)}</span>
              </div>
              <Link
                to="/loja-demo/checkout"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold !text-slate-950"
              >
                Finalizar compra
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
