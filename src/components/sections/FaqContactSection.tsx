import { useState } from 'react';
import Icon from '@/components/ui/icon';

const SEND_LEAD_URL = 'https://functions.poehali.dev/20209a8a-b986-41eb-8cd2-2e7f2f10f392';

const faqs = [
  {
    q: "Нам нужен большой бюджет на ИИ?",
    a: "Нет. Простые решения стартуют от 20 тыс. рублей — например, готовый AI-ассистент для ответов клиентам. Стоимость более сложных проектов зависит от задачи и объёма интеграций. На аудите покажем варианты под ваш бюджет.",
  },
  {
    q: "Как долго длится внедрение?",
    a: "От 1 до 4 недель — зависит от сложности задачи. Простой чат-бот или автоматизация одного процесса запускаются быстро. Комплексные решения с интеграцией в несколько систем — дольше, но поэтапно: каждый этап уже приносит результат.",
  },
  {
    q: "У нас нет IT-отдела. Справимся?",
    a: "Да. Мы берём на себя всё техническое: разработку, интеграцию, обучение сотрудников и дальнейшую поддержку. Ваша команда работает с готовым инструментом, как с обычной программой.",
  },
  {
    q: "Наши данные не утекут к конкурентам?",
    a: "Безопасность данных — наш приоритет. Мы выбираем архитектуру под ваши требования: изолированный контур, закрытое облако или локальное размещение. Данные не используются для обучения сторонних моделей. Подписываем NDA до начала работ.",
  },
  {
    q: "Как понять, что ИИ вообще нужен нашему бизнесу?",
    a: "Именно для этого мы проводим бесплатный аудит на 30 минут. Разбираем ваши процессы, показываем конкретные точки автоматизации и считаем примерный ROI. Без обязательств.",
  },
  {
    q: "Что если результат не оправдает ожидания?",
    a: "Практика показывает: бизнес, который внедряет ИИ сегодня, через год уже не представляет работу без него. Мы начинаем с задач, где эффект очевиден быстро — чтобы вы сами увидели разницу, а не просто поверили нам на слово.",
  },
  {
    q: "Почему стоит зайти в мессенджер Max прямо сейчас?",
    a: "Max — российская платформа с десятками миллионов пользователей и стремительно растущей аудиторией. Конкуренция здесь пока минимальна: бренды, которые заходят сейчас, занимают место без борьбы за внимание. Мы помогаем запустить бота, мини-приложение и перенести контент — под ключ, за 3–5 недель.",
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

export default function FaqContactSection() {
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
    <>
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
    </>
  );
}
