"use client";

import styles from "@/components/ui/HamburgerIcon.module.css";

export default function HamburgerIcon({ isOpen = false, onClick }) {

  return (
    <button
      id="js-hamburger"
      className={`${styles.hamburger} ${isOpen && styles.isOpen}`}
      type="button"
      aria-label="メニューを開閉"
      onClick={onClick}
    >
      <span className={styles.bar1}></span>
      <span className={styles.bar2}></span>
      <span className={styles.bar3}></span>
    </button>
  );
}
