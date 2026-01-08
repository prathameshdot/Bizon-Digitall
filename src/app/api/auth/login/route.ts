import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { generateToken } from "../../../../../lib/auth";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = generateToken(user.id);

  const res = NextResponse.json({ message: "Login successful", token });

  res.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
    sameSite: "strict",
  });

  return res;
}