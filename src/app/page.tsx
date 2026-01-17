import HeroCarousel from '@/components/HeroCarousel';
import PopularTreks from '@/components/PopularTreks';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import WhatWeStandFor from '@/components/WhatWeStandFor';

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Carousel */}
      <section className="hero-section-bg">
        <HeroCarousel />
      </section>

      {/* Featured Treks Section */}
      <PopularTreks />

      {/* FAQ Section */}
      <FAQSection />

      {/* What We Stand For Section */}
      <WhatWeStandFor />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
