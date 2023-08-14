import { prisma } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

interface UserPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params: { id } }: UserPageProps) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    notFound();
  }

  return {
    title: `${user.name}'s profile`,
    description: user.bio,
  };
};

const UserPage = async ({ params: { id } }: UserPageProps) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <Image
        src={user.image ?? "/mememan.webp"}
        alt={`
								${user.name}'s profile
							`}
        width={300}
        height={300}
      />
      <h3>Bio</h3>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserPage;
