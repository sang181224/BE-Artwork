/*
  Warnings:

  - Made the column `parentId` on table `comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_user` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `parentId` INTEGER NOT NULL,
    MODIFY `name_user` VARCHAR(191) NOT NULL;
