import HeroSection from '@/components/sections/HeroSection';
import ContentSections from '@/components/sections/ContentSections';
import FaqContactSection from '@/components/sections/FaqContactSection';
import SeoHead from '@/components/SeoHead';

export default function Index() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", background: 'var(--navy)', color: 'var(--white)' }}>
      <SeoHead
        title="НейроЛогика — ИИ для бизнеса"
        description="Внедрение технологий искусственного интеллекта и автоматизация бизнес-процессов для малого и среднего бизнеса"
        path="/"
      />
      <HeroSection />
      <ContentSections />
      <FaqContactSection />
    </div>
  );
}