import { CreditCard, Landmark, Wallet } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { paymentInstallments, storeProducts } from '../../data/storeProducts'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function ProductPaymentWindow() {
  const { slug } = useParams()
  const product = storeProducts.find((item) => item.slug === slug)

  if (!product) {
    return <Navigate to="/loja-demo" replace />
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] px-5 py-8 text-slate-950">
      <div className="mx-auto max-w-xl rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold">Formas de pagamento</p>
            <p className="text-sm text-slate-500">{product.name}</p>
          </div>
        </div>

        <div className="mt-6 rounded-[1.4rem] border border-slate-200">
          <div className="grid grid-cols-2 gap-0 border-b border-slate-200 px-5 py-4 text-sm font-medium text-slate-700">
            <span>Parcelas no cartão</span>
            <span className="text-right">Valores</span>
          </div>
          <div className="grid gap-x-8 gap-y-3 px-5 py-5 sm:grid-cols-2">
            {paymentInstallments.map((item) => (
              <p key={item} className="text-sm text-slate-700">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between rounded-[1.35rem] border border-emerald-200 bg-emerald-50 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/12 text-emerald-700">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">PIX</p>
                <p className="text-sm text-slate-600">5% de desconto no pagamento à vista</p>
              </div>
            </div>
            <span className="text-base font-semibold text-slate-950">{formatPrice(product.pixPrice)}</span>
          </div>

          <div className="flex items-center justify-between rounded-[1.35rem] border border-slate-200 bg-slate-50 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900/8 text-slate-700">
                <Landmark className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Boleto bancário</p>
                <p className="text-sm text-slate-600">Pagamento em uma única parcela</p>
              </div>
            </div>
            <span className="text-base font-semibold text-slate-950">{formatPrice(product.price)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
