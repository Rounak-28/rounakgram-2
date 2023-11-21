import { prisma } from "@/lib/prismaClient";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const user = await currentUser();

  const userID: any = user?.id;
  const isIncrement = req.isIncrement;

  if (isIncrement) {
    const data = await prisma.post.update({
      where: {
        id: req.postID,
      },
      data: {
        usersWhoLiked: {
          create: {
            userID: userID,
          },
        },
      },
    });
    return NextResponse.json(data, { status: 200 });
  } else {
    const data = await prisma.post.update({
      where: {
        id: req.postID,
      },
      data: {
        usersWhoLiked: {
          delete: {
            id: req.likeID,
          },
        },
      },
    });
    return NextResponse.json(data, { status: 200 });
  }
}
