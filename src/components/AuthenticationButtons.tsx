"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const AuthenticationButtons = () => {
  const { data: session, status } = useSession();

  const signOutHandler = () => signOut();
  const signInHandler = () => signIn();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <>
        <Link href="/dashboard">
          <Image
            src={session.user?.image ?? "/mememan.webp"}
            width={32}
            height={32}
            alt="Your Name"
          />
        </Link>
        <button onClick={signOutHandler}>Sign Out</button>
      </>
    );
  }

  return <button onClick={signInHandler}>Sign In</button>;
};
