import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

import { currentUser } from "@clerk/nextjs";

export async function POST(request: NextRequest) {
  const req = await request.json();

  const user = await currentUser();
  const name = user?.firstName + " " + user?.lastName;

  const imagePost = await prisma.post.create({
    data: {
      caption: req.caption,
      imageUrl: req.imageUrl,
      userName: name,
    },
  });

  return NextResponse.json(imagePost, { status: 200 });
}
