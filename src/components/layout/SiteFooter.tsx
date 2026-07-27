import Icon from '@/components/ui/icon';

export default function SiteFooter() {
  return (
    <footer className="py-10" style={{ background: 'var(--navy)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--teal)' }}>
            <Icon name="Brain" size={15} style={{ color: 'var(--navy)' }} />
          </div>
          <span className="font-bold" style={{ color: 'var(--white)' }}>НейроЛогика</span>
        </div>
        <div className="text-sm" style={{ color: 'var(--graphite)' }}>
          ИП Шамаев Р.Н. &nbsp;·&nbsp; ИНН 330640287430 &nbsp;·&nbsp;
          <a href="tel:+79099666088"
            style={{ color: 'var(--graphite)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--graphite)')}>
            +7 909 966-60-88
          </a>
        </div>
        <div className="text-sm" style={{ color: 'var(--graphite)' }}>
          © 2024 НейроЛогика. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
