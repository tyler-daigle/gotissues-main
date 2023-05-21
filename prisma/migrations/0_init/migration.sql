-- CreateTable
CREATE TABLE `issues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `issue_id` VARCHAR(50) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `tech_used` VARCHAR(200) NULL,
    `difficulty_level` VARCHAR(15) NULL,
    `issue_number` INTEGER NOT NULL,
    `date_created` DATE NULL,
    `issue_description` TEXT NULL,
    `issue_link` VARCHAR(255) NULL,
    `repo_link` VARCHAR(255) NULL,
    `repo_name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

