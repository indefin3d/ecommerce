import { DashboardShowcase } from '../components/DashboardShowcase'
import { FeaturesSection } from '../components/FeaturesSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { IntegrationsSection } from '../components/IntegrationsSection'
import { PricingSection } from '../components/PricingSection'
import { MainLayout } from '../layouts/MainLayout'

export function HomePage() {
  return (
    <MainLayout>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardShowcase />
        <IntegrationsSection />
        <PricingSection />
      </main>
      <Footer />
    </MainLayout>
  )
}
