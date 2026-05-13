import {
  Activity,
  BadgeDollarSign,
  Boxes,
  ChartColumnIncreasing,
  CreditCard,
  LayoutDashboard,
  PackageCheck,
  RadioTower,
  ReceiptText,
  ScanSearch,
  Send,
  ShoppingBag,
  Store,
  Truck,
  WalletCards,
} from 'lucide-react'

export const features = [
  {
    title: 'Loja virtual propria',
    description:
      'Storefront pronta para converter, com checkout otimizado, vitrines dinamicas e identidade completa da sua marca.',
    icon: Store,
  },
  {
    title: 'Marketplaces conectados',
    description:
      'Sincronize catalogo, pedidos e status entre canais sem planilhas paralelas ou operacao fragmentada.',
    icon: ShoppingBag,
  },
  {
    title: 'Gateways integrados',
    description:
      'PIX, cartao e recorrencia em uma mesma camada operacional com conciliacao simples e antifraude preparado.',
    icon: CreditCard,
  },
  {
    title: 'Controle de estoque',
    description:
      'Inventario multi-origem com reserva inteligente, alerta de ruptura e reposicao guiada por demanda.',
    icon: Boxes,
  },
  {
    title: 'Painel administrativo',
    description:
      'Central unica para vendas, campanhas, catalogo, atendimento e acompanhamento operacional em tempo real.',
    icon: LayoutDashboard,
  },
  {
    title: 'Frete integrado',
    description:
      'Cotacao com Correios e operadores privados, regras por regiao e rastreio conectado ao pedido.',
    icon: Truck,
  },
  {
    title: 'Analytics premium',
    description:
      'Receita, margem, cohort, ticket medio e eficiencia por canal para orientar decisao comercial rapidamente.',
    icon: ChartColumnIncreasing,
  },
  {
    title: 'Gestao de pedidos',
    description:
      'Fluxo completo do pedido ao pos-venda, com automacoes para status, pagamento, picking e entrega.',
    icon: PackageCheck,
  },
]

export const kpis = [
  { label: 'GMV mensal', value: 'R$ 482 mil', change: '+18,4%' },
  { label: 'Conversao', value: '4,82%', change: '+0,9 p.p.' },
  { label: 'Pedidos ativos', value: '1.284', change: '+12,1%' },
  { label: 'CAC payback', value: '2,7 meses', change: '-14%' },
]

export const chartBars = [
  { label: 'Seg', height: '39%' },
  { label: 'Ter', height: '57%' },
  { label: 'Qua', height: '64%' },
  { label: 'Qui', height: '50%' },
  { label: 'Sex', height: '82%' },
  { label: 'Sab', height: '71%' },
  { label: 'Dom', height: '60%' },
]

export const recentOrders = [
  { id: '#1042', client: 'Studio Maris', total: 'R$ 1.490', status: 'Pago' },
  { id: '#1041', client: 'Casa Nativa', total: 'R$ 842', status: 'Separacao' },
  { id: '#1039', client: 'Urban Phase', total: 'R$ 2.160', status: 'Enviado' },
  { id: '#1038', client: 'Mundo Leaf', total: 'R$ 624', status: 'Novo' },
]

export const topProducts = [
  { name: 'Kit Performance Black', stock: '184 un', revenue: 'R$ 98 mil' },
  { name: 'Premium Desk Lamp', stock: '63 un', revenue: 'R$ 61 mil' },
  { name: 'Fone Neo Wireless', stock: '121 un', revenue: 'R$ 54 mil' },
]

export const channels = [
  { name: 'Mercado Livre', value: '34%', icon: WalletCards },
  { name: 'Shopee', value: '22%', icon: ScanSearch },
  { name: 'Amazon', value: '17%', icon: BadgeDollarSign },
  { name: 'Loja propria', value: '27%', icon: Activity },
]

export const integrations = [
  { name: 'Mercado Livre', icon: ShoppingBag, tone: 'from-yellow-300/20 to-amber-500/8' },
  { name: 'Shopee', icon: RadioTower, tone: 'from-orange-400/20 to-red-500/8' },
  { name: 'Amazon', icon: Send, tone: 'from-sky-300/18 to-cyan-500/8' },
  { name: 'Correios', icon: Truck, tone: 'from-blue-300/18 to-indigo-500/8' },
  { name: 'PIX', icon: ReceiptText, tone: 'from-emerald-300/20 to-teal-500/8' },
  { name: 'Cartao', icon: CreditCard, tone: 'from-violet-300/18 to-fuchsia-500/8' },
  { name: 'WhatsApp', icon: Activity, tone: 'from-green-300/18 to-emerald-500/8' },
]

export const plans = [
  {
    name: 'Starter',
    price: 'R$ 149',
    description: 'Operacao enxuta com estrutura pronta para vender em um canal principal.',
    features: [
      'Loja virtual com checkout otimizado',
      'Ate 1.000 produtos',
      '1 marketplace conectado',
      'Painel com metricas essenciais',
    ],
  },
  {
    name: 'Professional',
    price: 'R$ 389',
    highlight: true,
    description: 'Camada operacional completa para marcas que precisam crescer com eficiencia.',
    features: [
      'Catalogo e estoque multicanal',
      'Automacoes de pedido e logistica',
      'Gateways, PIX e analytics avancado',
      'Suporte estrategico prioritario',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    description: 'Arquitetura escalavel para operacoes com alto volume, times e integrações dedicadas.',
    features: [
      'Multiempresa e permissoes avancadas',
      'SLAs dedicados e onboarding premium',
      'Integrações customizadas e APIs',
      'Observabilidade comercial completa',
    ],
  },
]
