/*
  Warnings:

  - You are about to drop the column `likes_count` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `likes_count` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "likes_count";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "likes_count";

-- CreateTable
CREATE TABLE "Likes" (
    "id" TEXT NOT NULL,
    "id_owner" TEXT NOT NULL,
    "id_post" TEXT,
    "id_comment" TEXT,
    "liked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_id_owner_fkey" FOREIGN KEY ("id_owner") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_id_comment_fkey" FOREIGN KEY ("id_comment") REFERENCES "comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
