import { AgentsTestimonials } from '@/components/AgentsTestimonials';
import { Categories } from '@/components/Categories';
import { CtaSection } from '@/components/CtaSection';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { Hero } from '@/components/Hero';
import { PopularLocations } from '@/components/PopularLocations';
import { StatsSection } from '@/components/StatsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Hero />
      <WhyChooseUs />
      <FeaturedProperties />
      <Categories />
      <PopularLocations />
      <StatsSection />
      <AgentsTestimonials />
      <CtaSection />
    </main>
  );
}
