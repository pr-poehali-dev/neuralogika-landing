import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    q: "Нам нужен большой бюджет на ИИ?",
    a: "Нет. Большинство наших проектов для МСБ стартуют от 150–300 тыс. рублей. Мы начинаем с одной точки автоматизации — там, где ROI очевиден. Сначала окупаем, потом масштабируем.",
  },
  {
    q: "Как долго длится внедрение?",
    a: "Первый рабочий прототип — 2–4 недели. Полноценное внедрение с обучением и интеграцией в процессы — 1–3 месяца. Не растягиваем проекты намеренно.",
  },
  {
    q: "У нас нет IT-отдела. Справимся?",
    a: "Да. Мы берём на себя всё техническое: разработку, интеграцию, обучение сотрудников и дальнейшую поддержку. Ваша команда работает с готовым инструментом, как с обычной программой.",
  },
  {
    q: "Наши данные не утекут к конкурентам?",
    a: "Все решения разворачиваются на вашей инфраструктуре или в изолированном контуре. Данные не используются для обучения сторонних моделей. Подписываем NDA до начала работ.",
  },
  {
    q: "Как понять, что ИИ вообще нужен нашему бизнесу?",
    a: "Именно для этого мы проводим бесплатный аудит на 30 минут. Разбираем ваши процессы, показываем конкретные точки автоматизации и считаем примерный ROI. Без обязательств.",
  },
  {
    q: "Что если результат не оправдает ожидания?",
    a: "Мы фиксируем KPI в договоре до старта. Если показатели не достигнуты — дорабатываем за свой счёт. Работаем на результат, а не на процесс.",
  },
  {
    q: "Зачем нам мессенджер Max, если есть Telegram?",
    a: "Max — новая российская платформа с быстро растущей аудиторией и минимальной конкуренцией. Те, кто заходит сейчас, получают аудиторию дёшево и без борьбы за внимание. Мы помогаем перенести контент, запустить бота и выстроить воронку — под ключ, за 3–5 недель.",
  },
];

const SEND_LEAD_URL = 'https://functions.poehali.dev/20209a8a-b986-41eb-8cd2-2e7f2f10f392';

const HERO_IMG = "https://cdn.poehali.dev/projects/610fe54d-520f-45a9-a3a6-51d41a25ad48/files/5615bd25-5f58-4a70-8719-2b7499d34eb5.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/610fe54d-520f-45a9-a3a6-51d41a25ad48/files/34588791-3fbc-4320-8808-391f1433cbd4.jpg";

const services = [
  {
    icon: "Bot",
    title: "AI-ассистенты и чат-боты",
    desc: "Поддержка клиентов 24/7 без найма операторов. Бот отвечает на 80% типовых вопросов мгновенно.",
    metric: "−60% нагрузки на поддержку",
  },
  {
    icon: "TrendingUp",
    title: "Анализ данных и прогнозирование",
    desc: "Понимаем спрос заранее. Прогнозируем продажи с точностью до 92%, чтобы вы не закупали лишнего.",
    metric: "До 92% точность прогноза",
  },
  {
    icon: "FileText",
    title: "Автоматизация документооборота",
    desc: "Нейросети распознают сканы, заполняют карточки товаров и формируют отчёты вместо сотрудников.",
    metric: "−40% времени на рутину",
  },
  {
    icon: "Sparkles",
    title: "Рекомендательные системы",
    desc: "«Умные» рекомендации для интернет-магазинов, которые увеличивают средний чек покупателя.",
    metric: "+25% к среднему чеку",
  },
  {
    icon: "Code2",
    title: "Кастомные решения",
    desc: "Разрабатываем уникальные ИИ-инструменты под специфику вашего бизнеса — с нуля и под ключ.",
    metric: "Индивидуальный подход",
  },
  {
    icon: "MessageSquare",
    title: "Экосистема мессенджера Max",
    desc: "Разрабатываем умных ботов, мини-приложения и каналы для нового российского мессенджера Max. Переносим аудиторию и контент с других площадок, выстраиваем автоматизированные воронки продаж внутри мессенджера.",
    metric: "Новая аудитория уже сейчас",
  },
];

const cases = [
  {
    industry: "Розничная торговля",
    result: "−38% складских остатков",
    desc: "Внедрили прогнозирование спроса для сети из 12 магазинов. Сократили замороженные деньги в товаре.",
    duration: "3 месяца",
  },
  {
    industry: "Медицинская клиника",
    result: "×3 скорость записи",
    desc: "AI-ассистент записывает пациентов, отвечает на вопросы по услугам и ценам без участия администратора.",
    duration: "6 недель",
  },
  {
    industry: "Производство",
    result: "−45% ошибок в документах",
    desc: "Автоматизировали ввод данных из бумажных накладных в 1С. Полностью убрали ручной ввод.",
    duration: "2 месяца",
  },
  {
    industry: "Мессенджер Max",
    result: "+12 000 подписчиков",
    desc: "Перенесли аудиторию бренда из Telegram в Max, запустили умного бота для обработки заявок и мини-приложение каталога товаров.",
    duration: "5 недель",
  },
  {
    industry: "Интернет-магазин",
    result: "+31% к повторным покупкам",
    desc: "Внедрили рекомендательную систему на основе поведения покупателей. Персональные предложения увеличили возврат клиентов.",
    duration: "6 недель",
  },
  {
    industry: "Логистика",
    result: "−28% операционных затрат",
    desc: "Автоматизировали обработку входящих заявок и маршрутизацию: AI-бот принимает заказы и распределяет их по водителям без диспетчера.",
    duration: "2 месяца",
  },
];

const advantages = [
  {
    icon: "Target",
    title: "Результат, а не процесс",
    desc: "Каждый проект — конкретные KPI: снижение затрат, рост выручки, экономия часов. Фиксируем цели до старта.",
  },
  {
    icon: "Zap",
    title: "Быстрый запуск",
    desc: "Первый рабочий прототип за 2–4 недели. Не разрабатываем годами — внедряем итеративно.",
  },
  {
    icon: "Shield",
    title: "Безопасность данных",
    desc: "Ваши данные не уходят в облака третьих сторон. Решения разворачиваем на вашей инфраструктуре.",
  },
  {
    icon: "Headphones",
    title: "Поддержка после запуска",
    desc: "Ведём проект после сдачи: мониторинг, обновления, дообучение моделей под изменения рынка.",
  },
];

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

export default function Index() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!name.trim() || !contact.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setContact('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", background: 'var(--navy)', color: 'var(--white)' }}>

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

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>О компании</div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--white)' }}>
                ИИ без магии.<br />Только результат.
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--graphite)' }}>
                НейроЛогика — команда инженеров и бизнес-аналитиков с опытом в ИИ и автоматизации.
                Мы не продаём «умные технологии» — мы решаем конкретные задачи: сократить расходы,
                разгрузить сотрудников, найти точки роста.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--graphite)' }}>
                Работаем с малым и средним бизнесом — ритейл, производство, услуги, медицина.
                Говорим на языке денег, а не нейронных сетей.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { num: "5 лет", label: "опыта в ИИ-проектах" },
                  { num: "12", label: "отраслей в портфолио" },
                  { num: "92%", label: "клиентов возвращаются" },
                  { num: "2–4 нед.", label: "до рабочего прототипа" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl" style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                    <div className="text-2xl font-black mb-1" style={{ color: 'var(--teal)' }}>{s.num}</div>
                    <div className="text-sm" style={{ color: 'var(--graphite)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <img src={TEAM_IMG} alt="Команда за работой" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
                style={{ background: 'var(--navy-light)', border: '1px solid rgba(29,233,182,0.25)' }}>
                <div className="text-3xl font-black" style={{ color: 'var(--teal)' }}>ROI</div>
                <div className="text-sm mt-1" style={{ color: 'var(--white)' }}>в среднем ×3.2</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--graphite)' }}>за первый год</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 grid-line-bg" style={{ background: 'var(--navy)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Услуги</div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: 'var(--white)' }}>
              Что мы делаем
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title}
                className="card-hover p-7 rounded-2xl flex flex-col"
                style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.2)' }}>
                  <Icon name={s.icon} fallback="Sparkles" size={20} style={{ color: 'var(--teal)' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--white)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--graphite)' }}>{s.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mt-5"
                  style={{ background: 'rgba(29,233,182,0.1)', color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace", alignSelf: 'flex-start' }}>
                  <Icon name="TrendingUp" size={12} />
                  {s.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 md:py-32" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Кейсы</div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: 'var(--white)' }}>
              Реальные результаты
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--graphite)' }}>
              Не обещания — конкретные цифры наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.industry} className="card-hover p-8 rounded-2xl flex flex-col"
                style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs px-3 py-1 rounded-full"
                    style={{ background: 'rgba(29,233,182,0.1)', color: 'var(--teal)', border: '1px solid rgba(29,233,182,0.2)', fontFamily: "'IBM Plex Mono', monospace" }}>
                    {c.industry}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--graphite)' }}>{c.duration}</span>
                </div>
                <div className="text-3xl font-black mb-3" style={{ color: 'var(--teal)' }}>{c.result}</div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--graphite)' }}>{c.desc}</p>
                <div className="mt-6 pt-6 flex items-center gap-2 text-sm" style={{ borderTop: '1px solid var(--border)' }}>
                  <Icon name="CheckCircle" size={16} style={{ color: 'var(--teal)' }} />
                  <span style={{ color: 'var(--white)' }}>Проект завершён</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 md:py-32" style={{ background: 'var(--navy)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Преимущества</div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: 'var(--white)' }}>
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="card-hover flex gap-5 p-7 rounded-2xl"
                style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.2)' }}>
                  <Icon name={a.icon} fallback="Star" size={22} style={{ color: 'var(--teal)' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--white)' }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--graphite)' }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>FAQ</div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: 'var(--white)' }}>
              Частые вопросы
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24 md:py-32" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
            style={{ background: 'var(--navy-light)', border: '1px solid rgba(29,233,182,0.2)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(29,233,182,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

            <div className="relative z-10 max-w-2xl">
              <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Бесплатный аудит</div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4" style={{ color: 'var(--white)' }}>
                Узнайте, где ИИ сэкономит деньги именно в вашем бизнесе
              </h2>
              <p className="text-base mb-8" style={{ color: 'var(--graphite)' }}>
                Проведём бесплатный разбор за 30 минут. Покажем конкретные точки автоматизации
                и примерный ROI ещё до старта проекта.
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
                      type="text"
                      placeholder="Телефон или email *"
                      value={contact}
                      onChange={e => setContact(e.target.value)}
                      className="flex-1 px-5 py-4 rounded-xl text-base outline-none"
                      style={{ background: 'var(--navy)', border: '1px solid var(--border)', color: 'var(--white)' }}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <textarea
                      placeholder="Опишите вашу задачу (необязательно)"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={3}
                      className="flex-1 px-5 py-4 rounded-xl text-base outline-none resize-none"
                      style={{ background: 'var(--navy)', border: '1px solid var(--border)', color: 'var(--white)' }}
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={status === 'loading' || !name.trim() || !contact.trim()}
                      className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 whitespace-nowrap disabled:opacity-50 self-end"
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

      {/* FOOTER */}
      <footer className="py-10" style={{ background: 'var(--navy)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--teal)' }}>
              <Icon name="Brain" size={15} style={{ color: 'var(--navy)' }} />
            </div>
            <span className="font-bold" style={{ color: 'var(--white)' }}>НейроЛогика</span>
          </div>
          <div className="flex gap-6 text-sm">
            {[['#about', 'О компании'], ['#services', 'Услуги'], ['#cases', 'Кейсы']].map(([href, label]) => (
              <a key={href} href={href} style={{ color: 'var(--graphite)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--graphite)')}>
                {label}
              </a>
            ))}
          </div>
          <div className="text-sm" style={{ color: 'var(--graphite)' }}>
            © 2024 НейроЛогика. Все права защищены.
          </div>
        </div>
      </footer>

    </div>
  );
}