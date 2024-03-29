CREATE TABLE `UserType`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`SoftDeleteFlag` BOOLEAN,
	`UserTypeDescription` VARCHAR(10) NOT NULL,
	`UserTypeID` BIGINT NOT NULL,
	PRIMARY KEY(`UserTypeID`)
);
ALTER TABLE `UserType`
	ADD CONSTRAINT `7149f84264b8f065d225e188558739` UNIQUE KEY(`UserTypeID`);
