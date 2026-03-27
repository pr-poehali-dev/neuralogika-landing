import Icon from '@/components/ui/icon';

const HERO_IMG = "https://cdn.poehali.dev/projects/610fe54d-520f-45a9-a3a6-51d41a25ad48/files/5615bd25-5f58-4a70-8719-2b7499d34eb5.jpg";

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: 'rgba(8, 14, 26, 0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(29,233,182,0.08)' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--teal)' }}>
            <Icon name="Brain" size={18} style={{ color: 'var(--navy)' }} />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: 'var(--white)' }}>НейроЛогика</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'var(--graphite)' }}>
          {[['#about', 'О компании'], ['#services', 'Услуги'], ['#cases', 'Кейсы'], ['#advantages', 'Преимущества'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-white" style={{ color: 'var(--graphite)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--graphite)')}>
              {label}
            </a>
          ))}
        </div>
        <a href="#contact"
          className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{ background: 'var(--teal)', color: 'var(--navy)' }}>
          Обсудить проект
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-line-bg">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="AI visualization" className="w-full h-full object-cover" style={{ opacity: 0.12 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,14,26,0.96) 40%, rgba(8,14,26,0.65) 100%)' }} />
        </div>

        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(29,233,182,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8"
              style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.25)', color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--teal)' }}></span>
              Внедряем ИИ для бизнеса
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
              style={{ color: 'var(--white)' }}>
              Бизнес растёт быстрее<br />
              <span style={{ color: 'var(--teal)' }}>с искусственным</span><br />
              интеллектом
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--graphite)' }}>
              Автоматизируем рутину, прогнозируем продажи и снижаем издержки.
              Без сложных терминов — только конкретный результат в цифрах.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
                style={{ background: 'var(--teal)', color: 'var(--navy)', boxShadow: '0 0 30px rgba(29,233,182,0.25)' }}>
                Получить бесплатный аудит
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#cases"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
                style={{ border: '1px solid rgba(29,233,182,0.3)', color: 'var(--white)' }}>
                Смотреть кейсы
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                { num: "50+", label: "проектов внедрено" },
                { num: "40%", label: "снижение издержек" },
                { num: "3 нед.", label: "до первого результата" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-black" style={{ color: 'var(--teal)' }}>{s.num}</div>
                  <div className="text-xs mt-1 leading-tight" style={{ color: 'var(--graphite)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5" style={{ borderColor: 'rgba(29,233,182,0.3)' }}>
            <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: 'var(--teal)' }} />
          </div>
        </div>
      </section>
    </>
  );
}
