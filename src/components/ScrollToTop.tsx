import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      let timeoutId: ReturnType<typeof setTimeout>;

      const scrollToEl = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 20) {
          attempts += 1;
          timeoutId = setTimeout(scrollToEl, 100);
        }
      };
      scrollToEl();
      return () => clearTimeout(timeoutId);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}