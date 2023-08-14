import { prisma } from "@/lib/db";
import { UserCard } from "@/components/UserCard/UserCard";
import styles from "./page.module.css";

const UsersPage = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
