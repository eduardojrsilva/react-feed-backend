-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "id_owner" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "link" TEXT NOT NULL,
    "tags" TEXT[],
    "likes_count" INTEGER NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_owner_fkey" FOREIGN KEY ("id_owner") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
