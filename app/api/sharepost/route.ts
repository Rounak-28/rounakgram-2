import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const imagePost = await prisma.post.create({
    data: {
      caption: "This is a test post 6",
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_1280.jpg",
    },
  });

  return NextResponse.json(imagePost, { status: 200 });
}
