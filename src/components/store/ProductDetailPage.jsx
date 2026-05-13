import { ChevronDown, CreditCard, Heart, Minus, Plus, Share2, Truck, Wallet } from 'lucide-react'
import { useMemo, useState } from 'react'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function ProductDetailPage({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.gallery?.[0] ?? product.image)
  const [quantity, setQuantity] = useState(1)

  const gallery = useMemo(() => product.gallery ?? [product.image], [product.gallery, product.image])

  return (
    <section className="bg-white px-4 py-10 sm:px-5 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Início</span>
          <span>›</span>
          <span>{product.category}</span>
          <span>›</span>
          <span className="text-slate-800">{product.name}</span>
        </div>

        <div className="grid gap-10 xl:grid-cols-[0.94fr_0.96fr]">
          <div className="grid gap-5 lg:grid-cols-[112px_1fr]">
            <div className="flex gap-3 lg:flex-col">
              {gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-[1.1rem] border bg-white transition ${
                    selectedImage === image
                      ? 'border-slate-900 shadow-[0_12px_35px_rgba(15,23,42,0.10)]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img src={image} alt={product.name} className="h-24 w-24 object-cover" />
                </button>
              ))}
            </div>

            <div className="bg-white">
              <div className="rounded-[2rem] bg-white p-3">
                <img src={selectedImage} alt={product.name} className="h-[620px] w-full object-contain" />
              </div>
              <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-600">
                <button type="button" className="inline-flex items-center gap-2 transition hover:text-slate-900">
                  <Share2 className="h-4 w-4" />
                  Compartilhar
                </button>
                <button type="button" className="inline-flex items-center gap-2 transition hover:text-slate-900">
                  <Heart className="h-4 w-4" />
                  Adicionar aos favoritos
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[470px] xl:ml-auto">
            <p className="text-sm text-slate-400">Urban Store</p>
            <h1 className="mt-2 text-[2.6rem] font-medium leading-[1.05] tracking-[-0.045em] text-slate-950">
              {product.name}
            </h1>
            <p className="mt-3 text-sm text-slate-500">(Cód.: {product.sku})</p>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-[3rem] font-semibold leading-none tracking-[-0.05em] text-slate-950">
                {formatPrice(product.price)}
              </p>
              <p className="mt-3 text-[1.05rem] leading-7 text-slate-700">
                até {product.installments}x de{' '}
                <span className="font-semibold text-slate-950">{formatPrice(product.installmentValue)}</span> sem juros
              </p>

              <div className="mt-4 inline-flex w-full items-center gap-3 rounded-[1rem] bg-[#f2f5ef] px-4 py-4 text-slate-900">
                <Wallet className="h-5 w-5 text-emerald-700" />
                <span className="text-[1.02rem]">
                  <strong>{formatPrice(product.pixPrice)}</strong> no PIX com 5% de desconto
                </span>
              </div>

              <div className="mt-5">
                <a
                  href={`/loja-demo/produto/${product.slug}/formas-de-pagamento`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[1.02rem] text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
                >
                  <CreditCard className="h-4 w-4" />
                  Formas de pagamento
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                <div className="inline-flex items-center rounded-[0.9rem] border border-slate-300 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="px-4 py-4 text-slate-700"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-lg font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => value + 1)}
                    className="px-4 py-4 text-slate-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-[0.9rem] bg-[#67da8f] px-6 py-4 text-[1.05rem] font-semibold text-white shadow-[0_18px_45px_rgba(103,218,143,0.28)] transition hover:brightness-[0.98]"
                >
                  Comprar
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="mb-4 text-[1.1rem] font-medium text-slate-950">Calcule o frete</p>
              <div className="flex overflow-hidden rounded-[0.95rem] border border-slate-300 bg-white">
                <input
                  type="text"
                  placeholder="CEP"
                  className="w-full px-5 py-4 text-base outline-none"
                />
                <button type="button" className="border-l border-slate-200 px-6 font-semibold">
                  Calcular
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <span className="text-[1.15rem] font-medium text-slate-950">Descrição do produto</span>
                <ChevronDown className="h-5 w-5 text-slate-500" />
              </div>
              <p className="pt-5 text-base leading-8 text-slate-600">{product.longDescription}</p>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500">
              <Truck className="h-4 w-4" />
              Entrega premium para capitais selecionadas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
