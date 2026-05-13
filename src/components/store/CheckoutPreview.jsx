import { MapPin, ShieldCheck, Truck, Wallet } from 'lucide-react'
import { paymentOptions } from '../../data/storeProducts'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function CheckoutPreview({ items }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 29
  const total = subtotal + shipping

  return (
    <section id="contato" className="px-4 py-16 sm:px-5 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Checkout visual</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Simulacao de fechamento preparada para integrar backend depois.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-500">
            Estrutura de formulario, frete, pagamento e resumo do pedido em componentes separados.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(148,163,184,0.12)]">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-sky-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-950">Dados do cliente</p>
                  <p className="text-sm text-slate-500">Campos prontos para futura conexao.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {['Nome completo', 'E-mail', 'Telefone', 'CPF'].map((field) => (
                  <label key={field} className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">{field}</span>
                    <input
                      type="text"
                      placeholder={field}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(148,163,184,0.12)]">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-950">Endereco e entrega</p>
                  <p className="text-sm text-slate-500">Fluxo pronto para CEP, frete e prazo.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {['CEP', 'Endereco', 'Numero', 'Complemento', 'Cidade', 'Estado'].map((field) => (
                  <label key={field} className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">{field}</span>
                    <input
                      type="text"
                      placeholder={field}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
                    />
                  </label>
                ))}
              </div>
              <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-slate-700" />
                  <div>
                    <p className="font-medium text-slate-900">Frete expresso</p>
                    <p className="text-sm text-slate-500">Receba em ate 2 dias uteis nas principais capitais.</p>
                  </div>
                  <span className="ml-auto text-sm font-semibold text-slate-900">{formatPrice(shipping)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(148,163,184,0.12)]">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-700">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-950">Pagamento</p>
                  <p className="text-sm text-slate-500">Escolha visual pronta para checkout real.</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {paymentOptions.map((option, index) => (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center justify-between rounded-[1.4rem] border px-4 py-4 text-sm transition ${
                      index === 0
                        ? 'border-slate-950 bg-slate-950 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{option}</span>
                    <input type="radio" name="payment" defaultChecked={index === 0} />
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#111827_60%,#1d4ed8_100%)] p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <p className="text-lg font-semibold">Resumo do pedido</p>
              <div className="mt-5 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-4 rounded-[1.3rem] bg-white/8 px-4 py-3">
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-300">Qtd. {item.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3 border-t border-white/12 pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Frete</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
