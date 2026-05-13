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
  title: 'Produtos que deixam sua rotina mais bonita, precisa e desejável.',
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
    price: 899,
    oldPrice: 1099,
    rating: 5,
    badge: '18% OFF',
    image: productHeadphones,
    tone: 'dark',
    description: 'Cancelamento de ruído, acabamento fosco e presença premium.',
  },
  {
    id: 'jacket-noir',
    name: 'Jaqueta Noir Essential',
    category: 'Moda',
    price: 459,
    oldPrice: 599,
    rating: 4,
    badge: 'Mais vendido',
    image: categoryModa,
    tone: 'light',
    description: 'Camada principal para uma silhueta urbana e elegante.',
  },
  {
    id: 'lamp-aura',
    name: 'Luminária Aura Desk',
    category: 'Casa',
    price: 349,
    rating: 5,
    badge: 'Novo',
    image: categoryCasa,
    tone: 'light',
    description: 'Iluminação escultural para setup, leitura e ambiente.',
  },
  {
    id: 'serum-lumis',
    name: 'Sérum Lumis Repair',
    category: 'Beleza',
    price: 189,
    oldPrice: 239,
    rating: 4,
    badge: 'Oferta',
    image: productHomeBeauty,
    tone: 'light',
    description: 'Textura leve e visual premium para rotina de autocuidado.',
  },
  {
    id: 'sneaker-pulse',
    name: 'Tênis Pulse Run Pro',
    category: 'Esportes',
    price: 529,
    oldPrice: 679,
    rating: 5,
    badge: 'Lote limitado',
    image: productSneakers,
    tone: 'light',
    description: 'Conforto de performance com perfil minimalista.',
  },
  {
    id: 'watch-orbit',
    name: 'Smartwatch Orbit S',
    category: 'Acessórios',
    price: 799,
    rating: 4,
    badge: 'Destaque',
    image: categoryAcessorios,
    tone: 'light',
    description: 'Design enxuto com leitura tecnológica e acabamento discreto.',
  },
  {
    id: 'speaker-wave',
    name: 'Speaker Wave Mini',
    category: 'Eletrônicos',
    price: 279,
    oldPrice: 349,
    rating: 4,
    badge: '20% OFF',
    image: categoryEletronicos,
    tone: 'light',
    description: 'Som compacto para espaços pequenos com visual premium.',
  },
  {
    id: 'bag-studio',
    name: 'Bolsa Studio Carry',
    category: 'Moda',
    price: 319,
    rating: 5,
    badge: 'Premium',
    image: categoryAcessorios,
    tone: 'light',
    description: 'Estrutura firme, presença elegante e uso cotidiano.',
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
