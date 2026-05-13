import { CreditCard, LockKeyhole, ShieldCheck } from 'lucide-react'

export function StoreFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f4ee] px-4 py-16 sm:px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Urban Store</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
            Demo de loja criada para simular uma operação comercial real.
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Esta página demonstra como um cliente da plataforma GoMaster Ecommerce pode ter
            uma loja com identidade própria, vitrine comercial, carrinho e checkout visual.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Atendimento: seg. a sex., 9h às 18h
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              contato@urbanstore.demo
            </span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Atendimento</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Central de ajuda</li>
              <li>Trocas e devoluções</li>
              <li>Prazo de entrega</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Links úteis</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Ofertas</li>
              <li>Favoritos</li>
              <li>Minha conta</li>
              <li>Rastrear pedido</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Pagamento e segurança</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                PIX, cartão e boleto
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Checkout criptografado
              </div>
              <div className="flex items-center gap-2">
                <LockKeyhole className="h-4 w-4" />
                Ambiente de compra seguro
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
