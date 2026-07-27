import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SeoHead from '@/components/SeoHead';
import { services } from '@/data/services';

export default function ServicesList() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", background: 'var(--navy)', color: 'var(--white)' }}>
      <SeoHead
        title="Услуги внедрения ИИ для бизнеса — НейроЛогика"
        description="AI-чат-боты, анализ данных и прогнозирование, автоматизация документооборота, рекомендательные системы и кастомные ИИ-решения для бизнеса."
        path="/uslugi"
      />
      <SiteHeader />

      <section className="pt-40 pb-24 md:pb-32 grid-line-bg" style={{ background: 'var(--navy)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Услуги</div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--white)' }}>
              Внедрение ИИ для бизнеса
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--graphite)' }}>
              Разбираем задачу вашего бизнеса и подбираем решение, которое даёт измеримый результат —
              от чат-бота для поддержки клиентов до кастомной ИИ-системы под уникальный процесс.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.slug} to={`/uslugi/${s.slug}`}
                className="card-hover p-7 rounded-2xl flex flex-col"
                style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.2)' }}>
                  <Icon name={s.icon} fallback="Star" size={22} style={{ color: 'var(--teal)' }} />
                </div>
                <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--white)' }}>{s.title}</h2>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--graphite)' }}>{s.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mt-5 mb-4"
                  style={{ background: 'rgba(29,233,182,0.1)', color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace", alignSelf: 'flex-start' }}>
                  <Icon name="TrendingUp" size={12} />
                  {s.metric}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--white)' }}>
                  Подробнее
                  <Icon name="ArrowRight" size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              style={{ background: 'var(--teal)', color: 'var(--navy)', boxShadow: '0 0 30px rgba(29,233,182,0.25)' }}>
              Получить бесплатный аудит
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
