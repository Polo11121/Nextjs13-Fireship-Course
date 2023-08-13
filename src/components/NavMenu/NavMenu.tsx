import styles from "./NavMenu.module.css";
import Link from "next/link";
import Image from "next/image";

export const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="./logo.svg" width={216} height={216} alt="NextSpace Logo" />
      </Link>
      <ul className={styles.link}>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="blog">Blog</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};
