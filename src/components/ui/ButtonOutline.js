import styles from "@/components/ui/ButtonOutline.module.css";
import Link from "next/link"

export default function ButtonOutline({ href, text }) {
  return (
    <Link href={href} className={[styles.buttonOutline]}>
      {text}
    </Link>
  );
}
