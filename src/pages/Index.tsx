import HeroSection from '@/components/sections/HeroSection';
import ContentSections from '@/components/sections/ContentSections';
import FaqContactSection from '@/components/sections/FaqContactSection';

export default function Index() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", background: 'var(--navy)', color: 'var(--white)' }}>
      <HeroSection />
      <ContentSections />
      <FaqContactSection />
    </div>
  );
}
