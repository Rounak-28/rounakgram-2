import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  const imagePost = await prisma.post.create({
    data: {
      caption: req.caption,
      imageUrl: req.imageUrl,
    },
  });

  return NextResponse.json(imagePost, { status: 200 });
}
