import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const user = await currentUser();

  const imagePost = await prisma.post.create({
    data: {
      userID: user?.id,
      caption: req.caption,
      imageUrl: req.imageUrl,
      userName: user?.firstName + " " + user?.lastName,
      userDP: user?.imageUrl,
    },
  });

  return NextResponse.json(imagePost, { status: 200 });
}
