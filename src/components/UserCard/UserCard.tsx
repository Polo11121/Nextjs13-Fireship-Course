import { User } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import styles from "./UserCard.module.css";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => (
  <div className={styles.card}>
    <Image
      src={user.image ?? "/mememan.webp"}
      alt={`${user.name}'s profile`}
      className={styles.cardImage}
      width={150}
      height={120}
    />
    <div className={styles.cardContent}>
      <h3>
        <Link href={`/users/${user.id}`}>{user.name}</Link>
      </h3>
      <p>Age: {user.age}</p>
    </div>
  </div>
);
