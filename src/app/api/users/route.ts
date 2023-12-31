import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const users = await prisma.user.findMany();

  return NextResponse.json(users, {
    status: 200,
  });
};
