import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.post.findMany();
  return NextResponse.json(data, { status: 200 });
}
