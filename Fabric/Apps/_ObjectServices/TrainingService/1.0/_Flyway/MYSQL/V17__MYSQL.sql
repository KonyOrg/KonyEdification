ALTER TABLE `Users`
	DROP INDEX `3dffa6a80052a68ddebd53090a6da9`,
	MODIFY `Email` VARCHAR(50) NOT NULL,
	ADD CONSTRAINT `3dffa6a80052a68ddebd53090a6da9` UNIQUE KEY(`Email`),
	DROP PRIMARY KEY,
	ADD PRIMARY KEY(`Email`);
