"use client";

import styles from "@/components/ui/HamburgerIcon.module.css";

export default function HamburgerIcon({ isOpen = false }) {
  const handleClick = () => {
    alert("クリックされました！")
  }

  return (
    <button
      id="js-hamburger"
      className={`${styles.hamburger} ${isOpen && styles.isOpen}`}
      type="button"
      aria-label="メニューを開閉"
      onClick={handleClick}
    >
      <span className={styles.bar1}></span>
      <span className={styles.bar2}></span>
      <span className={styles.bar3}></span>
    </button>
  );
}
