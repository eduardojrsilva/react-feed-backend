-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "id_owner" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "likes_count" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_id_owner_fkey" FOREIGN KEY ("id_owner") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
