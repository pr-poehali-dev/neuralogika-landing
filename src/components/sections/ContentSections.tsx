import Icon from '@/components/ui/icon';

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
    desc: "Каждый проект — конкретные метрики: снижение затрат, рост выручки, экономия часов. Работаем на понятный бизнесу результат.",
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

export default function ContentSections() {
  return (
    <>
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
                  { num: "2 года", label: "опыта в ИИ-проектах" },
                  { num: "12", label: "отраслей в портфолио" },
                  { num: "92%", label: "клиентов возвращаются" },
                  { num: "1–4 нед.", label: "до рабочего прототипа" },
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

          {/* HOT OFFER */}
          <div className="mb-8 rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #111e35 0%, #0d1a2e 100%)', border: '1px solid rgba(29,233,182,0.35)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(29,233,182,0.08) 0%, transparent 60%)' }} />
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
                style={{ background: 'rgba(255,80,30,0.12)', color: '#ff6b35', border: '1px solid rgba(255,80,30,0.3)', fontFamily: "'IBM Plex Mono', monospace" }}>
                🔥 Горячее предложение
              </div>

              <div className="md:grid md:grid-cols-3 md:gap-10">
                {/* Left: main info */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight" style={{ color: 'var(--white)' }}>
                    Сайт с AI-консультантом за 1 день
                    <span className="align-super text-base" style={{ color: 'var(--teal)' }}>*</span>
                  </h3>
                  <p className="text-base mb-6" style={{ color: 'var(--graphite)' }}>
                    Сайт, который продаёт за вас 24/7, без зарплаты и выходных.
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[
                      'Отвечает на вопросы посетителей в реальном времени',
                      'Собирает контакты и отправляет в Google Таблицу, CRM, Telegram-бота, Макс бота или на email — на ваш выбор',
                      'Работает без перерывов и не требует обучения',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--graphite)' }}>
                        <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(29,233,182,0.15)', color: 'var(--teal)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl p-4 mb-6" style={{ background: 'rgba(29,233,182,0.06)', border: '1px solid rgba(29,233,182,0.15)' }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Живой пример</p>
                    <p className="text-sm" style={{ color: 'var(--graphite)' }}>
                      Посмотрите, как это работает прямо сейчас на нашем сайте — <a href="https://nl-ai.ru" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--teal)' }}>nl-ai.ru</a>. Откройте чат в правом нижнем углу и задайте вопрос.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {[
                      { icon: '⚡', text: 'Старт через 1 день' },
                      { icon: '💰', text: 'Окупается с первой заявки' },
                      { icon: '🧪', text: 'Тестируете без риска' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium" style={{ background: 'rgba(29,233,182,0.06)', color: 'var(--white)', border: '1px solid rgba(29,233,182,0.1)' }}>
                        <span>{item.icon}</span>{item.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: price + steps */}
                <div className="flex flex-col gap-5">
                  <div className="rounded-2xl p-6 text-center" style={{ background: 'rgba(29,233,182,0.08)', border: '1px solid rgba(29,233,182,0.25)' }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Стоимость под ключ</p>
                    <div className="text-4xl font-black mb-1" style={{ color: 'var(--white)' }}>15 000 ₽</div>
                    <p className="text-xs mb-4" style={{ color: 'var(--graphite)' }}>дизайн + тексты + AI-агент + интеграции</p>
                    <a href="#contact"
                      className="block w-full text-center font-bold text-sm py-3 rounded-xl transition-all"
                      style={{ background: 'var(--teal)', color: 'var(--navy)' }}>
                      Хочу такой сайт
                    </a>
                  </div>

                  <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--teal)', fontFamily: "'IBM Plex Mono', monospace" }}>Как мы работаем</p>
                    <ol className="space-y-3">
                      {[
                        'Вы оставляете заявку — обсуждаем задачу и структуру',
                        'Мы делаем сайт за 1 день и настраиваем AI-агента',
                        'Вы запускаете сайт и получаете первые заявки',
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--graphite)' }}>
                          <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black" style={{ background: 'var(--teal)', color: 'var(--navy)' }}>{i + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <p className="text-xs" style={{ color: 'var(--graphite)', fontFamily: "'IBM Plex Mono', monospace" }}>
                    *Фиксированная цена за лендинг под ключ. Многостраничный сайт — сроки и бюджет обсуждаем индивидуально.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title}
                className="card-hover p-7 rounded-2xl flex flex-col"
                style={{ background: 'var(--navy-light)', border: '1px solid var(--border)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(29,233,182,0.1)', border: '1px solid rgba(29,233,182,0.2)' }}>
                  <Icon name={s.icon} fallback="Star" size={22} style={{ color: 'var(--teal)' }} />
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
    </>
  );
}