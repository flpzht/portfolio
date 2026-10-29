import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Background from '@/components/Background/Background';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './MainLayout.module.css';

export default function MainLayout({ children }) {
  const { t } = useLanguage();

  return (
    <div className={styles.layout}>
      <a href="#main" className={styles.skip}>
        {t.nav.skip}
      </a>

      <Background />

      <Navbar />

      <main id="main" tabIndex={-1} className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
