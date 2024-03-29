CREATE TABLE `Courses_UserType_Mapping`(
	`CourseID` VARCHAR(10) NOT NULL,
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`SoftDeleteFlag` BOOLEAN,
	`UserTypeID` VARCHAR(10) NOT NULL,
	PRIMARY KEY(`CourseID`,`UserTypeID`)
);
ALTER TABLE `Courses_UserType_Mapping`
	ADD CONSTRAINT `d7c890f2e9d7b88fe8aeace029bd73` UNIQUE KEY(`CourseID`),
	ADD CONSTRAINT `9bda730dd013aa43b9adc1e1a117cb` UNIQUE KEY(`UserTypeID`);
