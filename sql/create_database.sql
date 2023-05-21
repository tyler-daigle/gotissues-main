CREATE TABLE `issues` (
	`id` int NOT NULL AUTO_INCREMENT,
  `issue_id` varchar(50) NOT NULL,
	`title` varchar(200) NOT NULL,
	`tech_used` varchar(200),
	`difficulty_level` varchar(15),
	`issue_number` int NOT NULL,
	`date_created` date,
	`issue_description` text,
	`issue_link` varchar(255),
	`repo_link` varchar(255),
	`repo_name` varchar(255),
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;

--- prisma schema
-- generator client {
--   provider = "prisma-client-js"
-- }

-- datasource db {
--   provider = "mysql"
--   url      = env("DATABASE_URL")
-- }

-- model issues {
--   id               Int       @id @default(autoincrement())
--   issueId          String    @unique @map(name: "issue_id")
--   issueTitle       String    @map(name: "title")
--   techUsed         String?   @map(name: "tech_used")
--   difficultyLevel  String?   @map(name: "difficulty_level")
--   issueNumber      Int       @map(name: "issue_number")
--   dateCreated      DateTime? @map(name: "date_created")
--   issueDescription String?   @map(name: "issue_description")
--   issueLink        String?   @map(name: "issue_link")
--   repoLink         String?   @map(name: "repo_link")
--   repoName         String?   @map(name: "repo_name")
-- }
