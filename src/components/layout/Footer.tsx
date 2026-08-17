import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <Link href="/" className={styles.logoLink}>
              <Image
                className={styles.logo}
                src="/logo.png"
                alt="Flow Meister"
                width="228"
                height="32"
              />
            </Link>
            <p className={styles.company}>株式会社Flow Meister</p>
            <p className={styles.address}>
              〒000-0000　東京都xxxyyy1-1-1 xxxxxxxxx 3F
            </p>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.lists1}>
              <li className={styles.list}>
                <Link href="/" className={styles.link}>
                  ホーム
                </Link>
              </li>
            </ul>
            <ul className={styles.lists2}>
              <li className={styles.list}>
                <Link href="/news" className={styles.link}>
                  お知らせ
                </Link>
              </li>
            </ul>
            <ul className={styles.lists3}>
              <li className={styles.list}>
                <Link href="/contact" className={styles.link}>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className={styles.copyright}>© xxxxxxxxxx. All Rights Reserved.</p>
    </footer>
  );
}
