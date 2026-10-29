import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background/Background";

import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
  <div className={styles.layout}>
    <Background />

    <Navbar />

    <main className={styles.main}>
      {children}
    </main>

    <Footer />
  </div>
  )
}
