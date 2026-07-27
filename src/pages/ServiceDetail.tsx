import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import SeoHead from '@/components/SeoHead';
import { getServiceBySlug, services } from '@/data/services';

const SEND_LEAD_URL = 'https://functions.poehali.dev/20209a8a-b986-41eb-8cd2-2e7f2f10f392';

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'var(--navy-light)', border: `1px solid ${open ? 'rgba(29,233,182,0.3)' : 'var(--border)'}`, transition: 'border-color 0.2s' }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 px-7 py-5">
        <span className="text-base font-semibold" style={{ color: 'var(--white)' }}>{q}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{ background: open ? 'rgba(29,233,182,0.15)' : 'rgba(255,255,255,0.05)', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <Icon name="Plus" size={16} style={{ color: open ? 'var(--teal)' : 'var(--graphite)' }} />
        </div>
      </div>
      {open && (
        <div className="px-7 pb-6">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--graphite)' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    let normalized = digits;
    if (normalized.startsWith('8')) normalized = '7' + normalized.slice(1);
    if (!normalized.startsWith('7')) normalized = '7' + normalized;
    const d = normalized.slice(1, 11);
    let result = '+7';
    if (d.length > 0) result += ' (' + d.slice(0, 3);
    if (d.length >= 3) result += ') ' + d.slice(3, 6);
    if (d.length >= 6) result += '-' + d.slice(6, 8);
    if (d.length >= 8) result += '-' + d.slice(8, 10);
    return result;
  };

  const isPhoneValid = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === '' || raw === '+') { setContact(''); return; }
    setContact(formatPhone(raw));
  };

  const handleSubmit = async () => {
    if (!name.trim() || !isPhoneValid(contact)) return;
    setStatus('loading');
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message: `Интерес к услуге: ${service.title}` }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setContact('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", background: 'var(--navy)', color: 'var(--white)' }}>
      <SeoHead title={service.seoTitle} description={service.seoDescription} path={`/uslugi/${service.slug}`} />
      <SiteHeader />

      {/* HERO */}
      <section className="pt-40 pb-16 md:pb-20 grid-line-bg" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-xs mb-4">
            <Link to="/uslugi" style={{ color: 'var(--graphite)' }}>Услуги</Link>
            <span style={{ color: 'var(--graphite)' }}> / {service.title}</span>
          </div>

          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
            style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.2)' }}>
            <Icon name={service.icon} fallback="Star" size={26} style={{ color: 'var(--teal)' }} />
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--white)' }}>
            {service.title}
          </h1>

          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--graphite)' }}>
            {service.intro}
          </p>

          <div className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full"
            style={{ background: 'rgba(29,233,182,0.1)', color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>
            <Icon name="TrendingUp" size={14} />
            {service.metric}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: 'var(--white)' }}>Знакомые проблемы?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.problems.map((p) => (
              <div key={p} className="flex items-start gap-3 p-5 rounded-xl" style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <Icon name="AlertCircle" size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#ff6b6b' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--graphite)' }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION + BENEFITS */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-6" style={{ color: 'var(--white)' }}>Как мы решаем эту задачу</h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--graphite)' }}>{service.solutionText}</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {service.benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl" style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="CheckCircle" size={18} style={{ color: 'var(--teal)' }} />
                  <h3 className="text-base font-bold" style={{ color: 'var(--white)' }}>{b.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--graphite)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-10" style={{ color: 'var(--white)' }}>Как мы работаем</h2>
          <ol className="space-y-5">
            {service.process.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-black" style={{ background: 'var(--teal)', color: 'var(--navy)' }}>
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed pt-1" style={{ color: 'var(--graphite)' }}>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: 'var(--white)' }}>Кому подойдёт</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.forWhom.map((f) => (
              <div key={f} className="flex items-start gap-3 p-5 rounded-xl" style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <Icon name="Users" size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--teal)' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--graphite)' }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-10" style={{ color: 'var(--white)' }}>Частые вопросы</h2>
          <div className="flex flex-col gap-3">
            {service.faq.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
            style={{ background: 'var(--navy-light)', border: '1px solid rgba(29,233,182,0.2)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(29,233,182,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

            <div className="relative z-10">
              <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Бесплатный аудит</div>
              <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4" style={{ color: 'var(--white)' }}>
                Обсудим, как «{service.title}» поможет вашему бизнесу
              </h2>
              <p className="text-base mb-8" style={{ color: 'var(--graphite)' }}>
                Разберём вашу задачу за 30 минут и покажем, какой эффект даст внедрение — без обязательств.
              </p>

              {status === 'success' ? (
                <div className="flex items-center gap-3 p-5 rounded-xl"
                  style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.3)' }}>
                  <Icon name="CheckCircle" size={24} style={{ color: 'var(--teal)' }} />
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--white)' }}>Заявка отправлена!</div>
                    <div className="text-sm mt-0.5" style={{ color: 'var(--graphite)' }}>Свяжемся с вами в течение рабочего дня.</div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Ваше имя *"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="flex-1 px-5 py-4 rounded-xl text-base outline-none"
                      style={{ background: 'var(--navy)', border: '1px solid var(--border)', color: 'var(--white)' }}
                    />
                    <input
                      type="tel"
                      placeholder="Телефон *"
                      value={contact}
                      onChange={handlePhoneChange}
                      className="flex-1 px-5 py-4 rounded-xl text-base outline-none"
                      style={{ background: 'var(--navy)', border: `1px solid ${contact && !isPhoneValid(contact) ? '#ff6b6b' : 'var(--border)'}`, color: 'var(--white)' }}
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={status === 'loading' || !name.trim() || !isPhoneValid(contact)}
                      className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 whitespace-nowrap disabled:opacity-50"
                      style={{ background: 'var(--teal)', color: 'var(--navy)' }}>
                      {status === 'loading' ? 'Отправляем...' : 'Получить аудит'}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-xs mt-2" style={{ color: '#ff6b6b' }}>
                      Ошибка отправки. Попробуйте ещё раз или напишите напрямую на unirek.msk@ya.ru
                    </p>
                  )}
                  <p className="text-xs mt-4" style={{ color: 'var(--graphite)' }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Не спамим.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: 'var(--white)' }}>Другие услуги</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/uslugi/${s.slug}`}
                className="card-hover p-6 rounded-2xl flex flex-col"
                style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.2)' }}>
                  <Icon name={s.icon} fallback="Star" size={20} style={{ color: 'var(--teal)' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--white)' }}>{s.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto pt-3" style={{ color: 'var(--teal)' }}>
                  Подробнее
                  <Icon name="ArrowRight" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
