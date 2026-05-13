import categoryAcessorios from '../assets/store/category-acessorios.png'
import categoryBeleza from '../assets/store/category-beleza.png'
import categoryCasa from '../assets/store/category-casa.png'
import categoryEletronicos from '../assets/store/category-eletronicos.png'
import categoryEsportes from '../assets/store/category-esportes.png'
import categoryModa from '../assets/store/category-moda.png'
import heroBanner from '../assets/store/hero-banner.png'
import lifestyleBanner from '../assets/store/lifestyle-banner.png'
import productHeadphones from '../assets/store/product-headphones.png'
import productHomeBeauty from '../assets/store/product-home-beauty.png'
import productSneakers from '../assets/store/product-sneakers.png'

export const storeHero = {
  image: heroBanner,
  offerImage: lifestyleBanner,
  title: 'Produtos que deixam sua rotina mais bonita e desejável.',
  description:
    'A Urban Store mistura design, tecnologia e moda em uma experiência de compra com estética editorial e estrutura pronta para operação real.',
}

export const categories = [
  {
    name: 'Eletrônicos',
    slug: 'eletronicos',
    description: 'Áudio, gadgets e tecnologia com acabamento premium.',
    image: categoryEletronicos,
  },
  {
    name: 'Moda',
    slug: 'moda',
    description: 'Peças urbanas com leitura limpa e sofisticação comercial.',
    image: categoryModa,
  },
  {
    name: 'Casa',
    slug: 'casa',
    description: 'Objetos e iluminação para ambientes com identidade.',
    image: categoryCasa,
  },
  {
    name: 'Beleza',
    slug: 'beleza',
    description: 'Skincare e autocuidado com curadoria refinada.',
    image: categoryBeleza,
  },
  {
    name: 'Esportes',
    slug: 'esportes',
    description: 'Performance com design contemporâneo e leveza visual.',
    image: categoryEsportes,
  },
  {
    name: 'Acessórios',
    slug: 'acessorios',
    description: 'Detalhes que fecham o look e elevam a experiência.',
    image: categoryAcessorios,
  },
]

export const storeProducts = [
  {
    id: 'urban-headphone-x1',
    name: 'Headphone Urban X1',
    category: 'Eletrônicos',
    slug: 'headphone-urban-x1',
    price: 899,
    oldPrice: 1099,
    rating: 5,
    badge: '18% OFF',
    image: productHeadphones,
    gallery: [productHeadphones, categoryEletronicos, heroBanner],
    description: 'Cancelamento de ruído, acabamento fosco e presença premium.',
    pixPrice: 799,
    installments: 8,
    installmentValue: 115.42,
    sku: 'US-HPX1',
    longDescription:
      'Headphone com visual minimalista, isolamento eficiente e acabamento pensado para setups, viagens e rotina urbana com estética premium.',
  },
  {
    id: 'jacket-noir',
    name: 'Jaqueta Noir Essential',
    category: 'Moda',
    slug: 'jaqueta-noir-essential',
    price: 459,
    oldPrice: 599,
    rating: 4,
    badge: 'Mais vendido',
    image: categoryModa,
    gallery: [categoryModa, categoryAcessorios],
    description: 'Camada principal para uma silhueta urbana e elegante.',
    pixPrice: 419,
    installments: 8,
    installmentValue: 70.98,
    sku: 'US-JNE1',
    longDescription:
      'Jaqueta com linhas limpas, estrutura firme e leitura contemporânea para produções casuais ou mais sofisticadas.',
  },
  {
    id: 'lamp-aura',
    name: 'Luminária Aura Desk',
    category: 'Casa',
    slug: 'luminaria-aura-desk',
    price: 349,
    rating: 5,
    badge: 'Novo',
    image: categoryCasa,
    gallery: [categoryCasa, productHomeBeauty],
    description: 'Iluminação escultural para setup, leitura e ambiente.',
    pixPrice: 319,
    installments: 8,
    installmentValue: 53.92,
    sku: 'US-LAD1',
    longDescription:
      'Peça de iluminação com presença decorativa e uso funcional para escritório, quarto ou living contemporâneo.',
  },
  {
    id: 'serum-lumis',
    name: 'Sérum Lumis Repair',
    category: 'Beleza',
    slug: 'serum-lumis-repair',
    price: 189,
    oldPrice: 239,
    rating: 4,
    badge: 'Oferta',
    image: productHomeBeauty,
    gallery: [productHomeBeauty, categoryBeleza],
    description: 'Textura leve e visual premium para rotina de autocuidado.',
    pixPrice: 169,
    installments: 8,
    installmentValue: 29.99,
    sku: 'US-SLR1',
    longDescription:
      'Sérum de demonstração com estética editorial, pensado para ilustrar um catálogo premium de beleza e bem-estar.',
  },
  {
    id: 'sneaker-pulse',
    name: 'Tênis Pulse Run Pro',
    category: 'Esportes',
    slug: 'tenis-pulse-run-pro',
    price: 529,
    oldPrice: 679,
    rating: 5,
    badge: 'Lote limitado',
    image: productSneakers,
    gallery: [productSneakers, categoryEsportes, heroBanner],
    description: 'Conforto de performance com perfil minimalista.',
    pixPrice: 489,
    installments: 8,
    installmentValue: 83.51,
    sku: 'US-TPR1',
    longDescription:
      'Tênis com desenho leve, perfil esportivo elegante e proposta visual limpa para quem valoriza conforto e presença.',
  },
  {
    id: 'watch-orbit',
    name: 'Smartwatch Orbit S',
    category: 'Acessórios',
    slug: 'smartwatch-orbit-s',
    price: 799,
    rating: 4,
    badge: 'Destaque',
    image: categoryAcessorios,
    gallery: [categoryAcessorios, categoryEletronicos],
    description: 'Design enxuto com leitura tecnológica e acabamento discreto.',
    pixPrice: 739,
    installments: 8,
    installmentValue: 126.13,
    sku: 'US-SWO1',
    longDescription:
      'Acessório com estética tecnológica e visual minimalista para complementar um catálogo moderno de lifestyle.',
  },
  {
    id: 'speaker-wave',
    name: 'Speaker Wave Mini',
    category: 'Eletrônicos',
    slug: 'speaker-wave-mini',
    price: 279,
    oldPrice: 349,
    rating: 4,
    badge: '20% OFF',
    image: categoryEletronicos,
    gallery: [categoryEletronicos, productHeadphones],
    description: 'Som compacto para espaços pequenos com visual premium.',
    pixPrice: 249,
    installments: 8,
    installmentValue: 44.49,
    sku: 'US-SWM1',
    longDescription:
      'Speaker de demonstração com tamanho reduzido, linguagem premium e boa leitura visual para e-commerce moderno.',
  },
  {
    id: 'bag-studio',
    name: 'Bolsa Studio Carry',
    category: 'Moda',
    slug: 'bolsa-studio-carry',
    price: 319,
    rating: 5,
    badge: 'Premium',
    image: categoryAcessorios,
    gallery: [categoryAcessorios, categoryModa],
    description: 'Estrutura firme, presença elegante e uso cotidiano.',
    pixPrice: 289,
    installments: 8,
    installmentValue: 50.32,
    sku: 'US-BSC1',
    longDescription:
      'Bolsa com proporção refinada, presença editorial e leitura ideal para compor vitrines premium de moda e acessórios.',
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
    name: 'Sérum Lumis Repair',
    price: 189,
    quantity: 2,
  },
]

export const paymentOptions = ['PIX', 'Cartão de crédito', 'Boleto', 'Carteira digital']

export const paymentInstallments = [
  '1x de R$ 899,00 sem juros',
  '2x de R$ 449,50 sem juros',
  '3x de R$ 299,67 sem juros',
  '4x de R$ 243,60',
  '5x de R$ 198,84',
  '6x de R$ 169,50',
  '7x de R$ 146,72',
  '8x de R$ 126,13',
  '9x de R$ 113,84',
  '10x de R$ 103,71',
  '11x de R$ 95,43',
  '12x de R$ 88,90',
]
