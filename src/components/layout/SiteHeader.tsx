import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function SiteHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{ background: 'rgba(8, 14, 26, 0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(29,233,182,0.08)' }}>
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--teal)' }}>
          <Icon name="Brain" size={18} style={{ color: 'var(--navy)' }} />
        </div>
        <span className="font-bold text-lg tracking-tight" style={{ color: 'var(--white)' }}>НейроЛогика</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'var(--graphite)' }}>
        {[['/#about', 'О компании'], ['/uslugi', 'Услуги'], ['/#cases', 'Кейсы'], ['/#advantages', 'Преимущества'], ['/#faq', 'FAQ']].map(([href, label]) => (
          <Link key={href} to={href} className="transition-colors hover:text-white" style={{ color: 'var(--graphite)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--graphite)')}>
            {label}
          </Link>
        ))}
      </div>
      <Link to="/#contact"
        className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
        style={{ background: 'var(--teal)', color: 'var(--navy)' }}>
        Обсудить проект
      </Link>
    </nav>
  );
}
