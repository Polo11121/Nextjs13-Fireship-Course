"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";

interface AuthCheckProps {
  children: ReactNode;
}

export const AuthCheck = ({ children }: AuthCheckProps) => {
  const { status } = useSession();

  return status === "authenticated" ? children : null;
};
