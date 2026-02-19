/*
  Warnings:

  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "News";

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);
