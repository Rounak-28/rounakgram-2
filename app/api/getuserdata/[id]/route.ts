import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await prisma.post.findMany({
    where: {
      userID: params.id,
    },
  });

  return NextResponse.json(data, { status: 200 });
}
