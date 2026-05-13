const footerLinks = {
  Produto: ['Plataforma', 'Automacoes', 'Analytics', 'API'],
  Empresa: ['Sobre', 'Clientes', 'Parceiros', 'Contato'],
  Recursos: ['Documentacao', 'Status', 'Roadmap', 'Suporte'],
}

export function Footer() {
  return (
    <footer id="contato" className="px-5 pb-10 pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 backdrop-blur-xl lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-sky-300">GoMaster Ecommerce</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Plataforma de ecommerce com DNA de operacao, dados e escala.
            </h3>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Estrutura pronta para evoluir para integrações backend, modulos proprietarios,
              cobranca recorrente, times internos e ecossistema completo da GoMaster.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <p className="text-sm font-semibold text-white">{title}</p>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#top" className="text-sm text-slate-400 transition hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GoMaster Ecommerce. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#top" className="transition hover:text-white">
              Instagram
            </a>
            <a href="#top" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href="#top" className="transition hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
