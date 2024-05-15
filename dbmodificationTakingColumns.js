// const fs = require("fs");
// const Papa = require("papaparse");
// const KNN = require("ml-knn");

// function minMaxScaler(array) {
//   const min = Math.min(...array);
//   const max = Math.max(...array);
//   return array.map((value) => (value - min) / (max - min));
// }
// function KFold(n, k) {
//   const indices = [...Array(n).keys()];
//   const foldSize = Math.floor(n / k);
//   const folds = [];
//   for (let i = 0; i < k; i++) {
//     const fold = [];
//     while (fold.length < foldSize && indices.length > 0) {
//       const randomIndex = Math.floor(Math.random() * indices.length);
//       fold.push(indices.splice(randomIndex, 1)[0]);
//     }
//     folds.push(fold);
//   }
//   return folds;
// }

// // Load and parse the dataset
// console.log("Loading and parsing the dataset...");
// const data = fs.readFileSync("GSE7621_dataset.csv", "utf8");
// const records = Papa.parse(data, { header: true, dynamicTyping: true }).data;
// console.log("🚀 ~ records:", records);

// // Separate the features and target
// let target = records.map((row) => row["sample"]);
// let features = records.map((row) => {
//   delete row["sample"];
//   return Object.values(row);
// });

// // Convert features to numbers and fill NaNs with 0
// features = features.map((row) =>
//   row.map((value) => (isNaN(value) ? 0 : Number(value)))
// );

// // Normalize the features
// features = features.map((row) => minMaxScaler(row));

// // Convert target to array
// target = Array.from(target);

// // 10-fold cross-validation
// console.log("Performing 10-fold cross-validation...");
// const folds = KFold(target.length, 5);

// let accuracy = [];
// for (let i = 0; i < folds.length; i++) {
//   console.log(`Processing fold ${i + 1} of ${folds.length}...`);
//   console.log(`ith fold->`, folds[i]);
//   const testIndices = folds[i];
//   const trainIndices = [].concat(...folds.slice(0, i), ...folds.slice(i + 1));

//   let X_train = trainIndices.map((i) => features[i]);
//   let y_train = trainIndices.map((i) => target[i]);
//   let X_test = testIndices.map((i) => features[i]);
//   let y_test = testIndices.map((i) => target[i]);

//   // Train and test the KNN classifier
//   let knn = new KNN(X_train, y_train, { k: 5 });
//   let y_pred = knn.predict(X_test);

//   // Calculate accuracy
//   let correct = y_pred.filter((value, index) => value === y_test[index]).length;
//   accuracy.push((correct / y_test.length) * 100);
//   console.log(`Fold ${i + 1} accuracy: ${(correct / y_test.length) * 100}%`);
// }

// let kFoldAccuracyScore = accuracy.reduce((a, b) => a + b, 0) / accuracy.length;
// console.log("10-fold cross-validation accuracy:", kFoldAccuracyScore);
