-- AlterTable
ALTER TABLE `user` ADD COLUMN `bio` TEXT NULL,
    ADD COLUMN `coverPhotoUrl` TEXT NULL,
    ADD COLUMN `skills` JSON NULL;
