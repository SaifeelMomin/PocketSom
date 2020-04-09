-- create database wine;

USE wine;
show tables;

SELECT * FROM drinks;
SELECT * FROM metrics;

SELECT d.calories, 
		m.BODY, 
        m.RED_FRUIT, 
        m.CITRUS_FRUIT, 
        m.STONE_FRUIT, 
        m.BLACK_FRUIT, 
        m.FLORAL,
        m.Minerality, 
        m.HERBACIOUS, 
        m.PEPPER, 
        m.EARTH, 
        m.BAKING_SPICE, 
        m.LEATHER,
        m.Astringent, 
        m.Ph, 
        m.ABV, 
        m.Dryness
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.BODY, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
		FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.RED_FRUIT, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.CITRUS_FRUIT, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.STONE_FRUIT, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.BLACK_FRUIT, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.FLORAL, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.Minerality, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.HERBACIOUS, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.PEPPER, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.EARTH, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.BAKING_SPICE, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.LEATHER, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.Astringent, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.Ph, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.ABV, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;

SELECT m.Dryness, 
		d.total_fat, 
        d.sugar, 
        d.sodium, 
        d.protein, 
        d.saturated_fat, 
        d.carbohydrates 
        FROM drinks d
INNER JOIN metrics m ON m.beverage = d.beverage;