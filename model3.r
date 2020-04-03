library(caret)
library(lattice)
library(ggplot2)
library(stringr) 
library(dplyr)
#dfFilter = sapply(newdf, function(x) newdf$test0.Body == newdf$predicts)
#newdf[dfFilter == FALSE,]

set.seed(444)

main <- read.csv("metric_df2.csv")

## removing rows with na values 
main0 <- na.omit(main)

## removing full meal nutritional to get nutrition/serving only
main0 <- filter(main, main$cals < 1200)

## cleaning carbs values 
carbo <- as.numeric(str_extract(main0$carbs, "[0-9]+"))
main0$carbs <- carbo


write.csv(main0,"dfmain_clean.csv", row.names = FALSE)
main1 <- main0

## converting metrics into factors 
bodyFactor <- factor(main0$Body)
tanFactor <- factor(main0$Tannin)
abvFactor <- factor(main0$ABV)
acidFactor <- factor(main0$Acid)
dryFactor <- factor(main0$Dryness)
fruitFactor <- factor(main0$Fruit)
main0$Body <- bodyFactor
main0$Tannin <- tanFactor
main0$ABV <- abvFactor
main0$Acid <- acidFactor
main0$Dryness <- dryFactor
main0$Fruit <- fruitFactor

## creating test and train sets 
inTrain <- createDataPartition(y = main0$X, p = .85, list = FALSE)
training <- main0[inTrain, ]
trainingM <- main1[inTrain, ]
test <- main0[-inTrain, ]
testM <- main1[-inTrain, ]


n <- nearZeroVar(training)
fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
##################################################################################################################
## Dryness Metric ##

trainDry <- training[,c(10:16, 21)]
testDry <- test[,c(10:16, 21)]

xDry <- trainDry[,-c(8)]
yDry <- trainDry[,c(8)]

## rf model fit 
#fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
modFitDry <- train(xDry, yDry, data = trainDry, method = "rf", trControl = fitControl)

# prediction on test dataset
modPredictDry <- predict(modFitDry, newdata = testDry)
predictMatDry <- confusionMatrix(modPredictDry, testDry$Dryness)


##################################################################################################################
## ABV Metric ##

trainABV <- training[,c(10:16, 20, 21)]
#trainABV$Dryness <- as.numeric(levels(trainABV$Dryness))[trainABV$Dryness]
testABV <- test[,c(10:16, 20, 21)]
#testABV$Dryness <- as.numeric(levels(modPredictDry))[modPredictDry]
testABV$Dryness <- modPredictDry


xABV <- trainABV[,-c(8)]
yABV <- trainABV[,c(8)]

## rf model fit 
#fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
modFitABV <- train(xABV, yABV, data = trainABV, method = "rf", trControl = fitControl)

# prediction on test dataset
modPredictABV <- predict(modFitABV, newdata = testABV)
predictMatABV <- confusionMatrix(modPredictABV, testABV$ABV)
##################################################################################################################
## Fruit Metric ##

trainFruit <- training[,c(10:16, 20:22)]
#trainFruit$Dryness <- as.numeric(levels(trainFruit$Dryness))[trainFruit$Dryness]
#trainFruit$ABV <- as.numeric(levels(trainFruit$ABV))[trainFruit$ABV]
#trainFruit$Body <- as.numeric(levels(trainFruit$Body))[trainFruit$Body]
#trainFruit$Acid <- as.numeric(levels(trainFruit$Acid))[trainFruit$Acid]
#trainFruit$Tannin <- as.numeric(levels(trainFruit$Tannin))[trainFruit$Tannin]

testFruit <- test[,c(10:16, 20:22)]
#testFruit$Dryness <- as.numeric(levels(modPredictDry))[modPredictDry]
#testFruit$ABV <- as.numeric(levels(modPredictABV))[modPredictABV]
#testFruit$Body <- as.numeric(levels(modPredictBody))[modPredictBody]
#testFruit$Acid <- as.numeric(levels(modPredictAcid))[modPredictAcid]
#testFruit$Tannin <- as.numeric(levels(modPredictTan))[modPredictTan]
testFruit$Dryness <- modPredictDry
testFruit$ABV <- modPredictABV
#testFruit$Body <- modPredictBody
#testFruit$Acid <- modPredictAcid
#testFruit$Tannin <- modPredictTan

xFruit <- trainFruit[,-c(10)]
yFruit <- trainFruit[,c(10)]

## rf model fit 
#fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
modFitFruit <- train(xFruit, yFruit, data = trainFruit, method = "rf", trControl = fitControl)

# prediction on test dataset
modPredictFruit <- predict(modFitFruit, newdata = testFruit)
predictMatFruit <- confusionMatrix(modPredictFruit, testFruit$Fruit)

##################################################################################################################

## Acid Metric ##

trainAcid <- training[,c(10:16, 19:21)]
#$Dryness <- as.numeric(levels(trainAcid$Dryness))[trainAcid$Dryness]
#trainAcid$ABV <- as.numeric(levels(trainAcid$ABV))[trainAcid$ABV]
#trainAcid$Body <- as.numeric(levels(trainAcid$Body))[trainAcid$Body]

testAcid <- test[,c(10:16, 19:21)]
#testAcid$Dryness <- as.numeric(levels(modPredictDry))[modPredictDry]
#testAcid$ABV <- as.numeric(levels(modPredictABV))[modPredictABV]
#testAcid$Body <- as.numeric(levels(modPredictBody))[modPredictBody]
testAcid$Dryness <- modPredictDry
testAcid$ABV <- modPredictABV
testAcid$Fruit <- modPredictFruit

xAcid <- trainAcid[,-c(8)]
yAcid <- trainAcid[,c(8)]

## rf model fit 
#fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
modFitAcid <- train(xAcid, yAcid, data = trainAcid, method = "rf", trControl = fitControl)

# prediction on test dataset
modPredictAcid <- predict(modFitAcid, newdata = testAcid)
predictMatAcid <- confusionMatrix(modPredictAcid, testAcid$Acid)

##################################################################################################################
## BODY METRIC ##
## removing classifier var
trainBody <- training[ ,c(10:17,19:22)]
#trainBody$Dryness <- as.numeric(levels(trainBody$Dryness))[trainBody$Dryness]
#trainBody$ABV <- as.numeric(levels(trainBody$ABV))[trainBody$ABV]
testBody <- test[,c(10:17,19:22)]
#testBody$Dryness <- as.numeric(levels(modPredictDry))[modPredictDry]
#testBody$ABV <- as.numeric(levels(modPredictABV))[modPredictABV]
testBody$Dryness <- modPredictDry
testBody$ABV <- modPredictABV
testBody$Acid <- modPredictAcid
testBody$Fruit <- modPredictFruit

#trainBody <- training[, c(9,10,12,13,14, 16)]
#testBody <- test[, c(9,10,12,13,14, 16)]


xBody <- trainBody[,-c(8)]
yBody <- trainBody[,c(8)]

## rf model fit 
fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
modFitBody <- train(xBody, yBody, data = trainBody, method = "rf", trControl = fitControl)

# prediction on test dataset
modPredictBody <- predict(modFitBody, newdata = testBody)
#pBody <- round(modPredictBody)
predictMatBody <- confusionMatrix(modPredictBody, testBody$Body)

##################################################################################################################

## TANNIN METRIC ##
trainTan <- training[,c(10:17, 18:22)]
#trainTan$Dryness <- as.numeric(levels(trainTan$Dryness))[trainTan$Dryness]
#trainTan$ABV <- as.numeric(levels(trainTan$ABV))[trainTan$ABV]
#trainTan$Body <- as.numeric(levels(trainTan$Body))[trainTan$Body]
#trainTan$Acid <- as.numeric(levels(trainTan$Acid))[trainTan$Acid]

testTan <- test[,c(10:17, 18:22)]
#testTan$Dryness <- as.numeric(levels(modPredictDry))[modPredictDry]
#testTan$ABV <- as.numeric(levels(modPredictABV))[modPredictABV]
#testTan$Body <- as.numeric(levels(modPredictBody))[modPredictBody]
#testTan$Acid <- as.numeric(levels(modPredictAcid))[modPredictAcid]
testTan$Dryness <- modPredictDry
testTan$ABV <- modPredictABV
testTan$Body <- modPredictBody
testTan$Acid <- modPredictAcid
testTan$Fruit <- modPredictFruit


xTan <- trainTan[,-c(9)]
yTan <- trainTan[,c(9)]

## rf model fit 
#fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
modFitTan <- train(xTan, yTan, data = trainTan, method = "rf", trControl = fitControl)

# prediction on test dataset
modPredictTan <- predict(modFitTan, newdata = testTan)
predictMatTan <- confusionMatrix(modPredictTan, testTan$Tannin)



##################################################################################################################
## Wine Prediction ##

#trainMain <- trainingM[,c(9:22)]
trainMain <- trainingM[,c(9, 17:22)]

testM$Body <- as.numeric(levels(modPredictBody))[modPredictBody]
testM$Tannin <- as.numeric(levels(modPredictTan))[modPredictTan]
testM$Acid <- as.numeric(levels(modPredictAcid))[modPredictAcid] 
testM$ABV <- as.numeric(levels(modPredictABV))[modPredictABV] 
testM$Dryness <- as.numeric(levels(modPredictDry))[modPredictDry]
testM$Fruit <- as.numeric(levels(modPredictFruit))[modPredictFruit]
#testM$Body <- modPredictBody
#testM$Tannin <- modPredictTan
#testM$Acid <- modPredictAcid
#testM$ABV <- modPredictABV
#testM$Dryness <- modPredictDry
#testM$Fruit <- modPredictFruit
testMain <- testM[,c(9, 17:22)]

xMain <- trainMain[,-c(1)]
yMain <- trainMain[,c(1)]

## rf model fit 
#fitControl <- trainControl(method = "cv", number = 4, verboseIter = FALSE)
modFitMain <- train(xMain, yMain, data = trainMain, method = "rf", trControl = fitControl)

# prediction on test dataset
modPredictMain <- predict(modFitMain, newdata = testMain)
predictMatMain <- confusionMatrix(modPredictMain, testMain$Grape)




