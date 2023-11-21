/*
  Warnings:

  - You are about to drop the column `usersWhoLiked` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "usersWhoLiked";

-- CreateTable
CREATE TABLE "UsersWhoLiked" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "postID" INTEGER NOT NULL,

    CONSTRAINT "UsersWhoLiked_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersWhoLiked" ADD CONSTRAINT "UsersWhoLiked_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
