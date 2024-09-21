CREATE TABLE `users_projects` (
	`userId` integer NOT NULL,
	`projectId` integer NOT NULL,
	PRIMARY KEY(`userId`, `projectId`),
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON UPDATE no action ON DELETE no action
);
