import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import MissionSection from '@/components/MissionSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import ObjectivesSection from '@/components/ObjectivesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VisionSection />
      <MissionSection />
      <CoreValuesSection />
      <ObjectivesSection />
      <Footer />
    </main>
  );
}
