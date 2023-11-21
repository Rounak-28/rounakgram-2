/*
  Warnings:

  - You are about to drop the column `UsersWhoLiked` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "UsersWhoLiked",
ADD COLUMN     "usersWhoLiked" TEXT[];
