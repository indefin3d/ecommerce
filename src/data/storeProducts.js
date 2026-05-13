export const categories = [
  {
    name: 'Eletronicos',
    description: 'Audio, gadgets e tecnologia para rotina urbana.',
    accent: 'from-sky-500/25 to-blue-600/10',
  },
  {
    name: 'Moda',
    description: 'Pecas premium com leitura contemporanea.',
    accent: 'from-fuchsia-500/20 to-rose-500/10',
  },
  {
    name: 'Casa',
    description: 'Design funcional para ambientes sofisticados.',
    accent: 'from-amber-400/20 to-orange-500/10',
  },
  {
    name: 'Beleza',
    description: 'Skincare e autocuidado com curadoria refinada.',
    accent: 'from-pink-400/20 to-violet-500/10',
  },
  {
    name: 'Esportes',
    description: 'Performance, treino e movimento com estilo.',
    accent: 'from-emerald-400/22 to-green-600/10',
  },
  {
    name: 'Acessorios',
    description: 'Detalhes que elevam o dia a dia.',
    accent: 'from-slate-300/18 to-slate-500/10',
  },
]

export const storeProducts = [
  {
    id: 'urban-headphone-x1',
    name: 'Headphone Urban X1',
    category: 'Eletronicos',
    price: 899,
    oldPrice: 1099,
    rating: 5,
    badge: '18% OFF',
    highlight: true,
    palette: 'from-sky-500 via-cyan-400 to-indigo-600',
  },
  {
    id: 'jacket-noir',
    name: 'Jaqueta Noir Essential',
    category: 'Moda',
    price: 459,
    oldPrice: 599,
    rating: 4,
    badge: 'Mais vendido',
    palette: 'from-zinc-600 via-slate-500 to-zinc-800',
  },
  {
    id: 'lamp-aura',
    name: 'Luminaria Aura Desk',
    category: 'Casa',
    price: 349,
    rating: 5,
    badge: 'Novo',
    palette: 'from-amber-300 via-orange-300 to-stone-500',
  },
  {
    id: 'serum-lumis',
    name: 'Serum Lumis Repair',
    category: 'Beleza',
    price: 189,
    oldPrice: 239,
    rating: 4,
    badge: 'Oferta',
    palette: 'from-pink-300 via-rose-300 to-fuchsia-500',
  },
  {
    id: 'sneaker-pulse',
    name: 'Tenis Pulse Run Pro',
    category: 'Esportes',
    price: 529,
    oldPrice: 679,
    rating: 5,
    badge: 'Lote limitado',
    palette: 'from-emerald-300 via-teal-300 to-lime-500',
  },
  {
    id: 'watch-orbit',
    name: 'Smartwatch Orbit S',
    category: 'Acessorios',
    price: 799,
    rating: 4,
    badge: 'Destaque',
    palette: 'from-slate-300 via-sky-200 to-slate-600',
  },
  {
    id: 'speaker-wave',
    name: 'Speaker Wave Mini',
    category: 'Eletronicos',
    price: 279,
    oldPrice: 349,
    rating: 4,
    badge: '20% OFF',
    palette: 'from-blue-500 via-sky-400 to-cyan-500',
  },
  {
    id: 'bag-studio',
    name: 'Bolsa Studio Carry',
    category: 'Moda',
    price: 319,
    rating: 5,
    badge: 'Premium',
    palette: 'from-stone-300 via-neutral-300 to-zinc-500',
  },
]

export const offerProducts = storeProducts.filter((product) => product.oldPrice).slice(0, 4)

export const initialCartItems = [
  {
    id: 'urban-headphone-x1',
    name: 'Headphone Urban X1',
    price: 899,
    quantity: 1,
  },
  {
    id: 'serum-lumis',
    name: 'Serum Lumis Repair',
    price: 189,
    quantity: 2,
  },
]

export const paymentOptions = ['PIX', 'Cartao de credito', 'Boleto', 'Carteira digital']
