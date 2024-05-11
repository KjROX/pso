const fs = require("fs");
const Papa = require("papaparse");
const KNN = require("ml-knn");
// const crossValidation = require("ml-cross-validation");

// crossValidation.leaveOneOut();

function minMaxScaler(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return array.map((value) => (value - min) / (max - min));
}

function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

const labels = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

// Load and parse the dataset
console.log("Loading and parsing the dataset...");
const data = fs.readFileSync("GSE7621_dataset.csv", "utf8");

let records = Papa.parse(data, { header: true, dynamicTyping: true }).data;
records = records.map((row) => Object.values(row));
//records--->Array of arrays(where each array is a row of the csv file)
//example of one object is
// [
//   73.75,
//   69.37,
//   110.54,
//   90.75,
//   50.9,
//   75.73,
//   76.12,
//   67.81,
//   66.63,
//   77.44,
//   50.06,
//   71.51,
//   53.53,
//   56.01,
//   64.58,
//   67.91,
//   77.66,
//   72.07,
//   28.74,
//   64.5,
//   55.64,
//   37.61,
//   61.82,
//   69.31,
//   91.77,
// ],
//records.length->54318 ->no. of rows in the csv file

// Build the initial population
console.log("Building the initial population...");
let populationSize = 10;
let dimensions = 5;
let population = [];

for (let i = 0; i < populationSize; i++) {
  let solution = [];
  for (let j = 0; j < dimensions; j++) {
    let randomIndex = Math.floor(Math.random() * records.length);

    solution.push(records[randomIndex]);
  }
  const transposedSolutions = transpose(solution);
  //filling missing values with 0
  const filledSolutions = transposedSolutions.map((column) =>
    column.map((value) => (isNaN(value) ? 0 : Number(value)))
  );
  //normalizing the data
  const normalizedRecords = filledSolutions.map((column) =>
    minMaxScaler(column)
  );
  population.push(normalizedRecords);
}
// Log the population matrix
// console.log("Population matrix:", population);

// Log each solution in the population matrix
const K = 3; // Choose an appropriate K value for KNN
let scores = new Array(populationSize).fill(0); // Initialize scores array

population.forEach((solution, solutionIndex) => {
  console.log("🚀 ~ population.forEach ~ solution:", solution, solution.length);
  for (let i = 0; i < solution.length; i++) {
    let testSet = solution[i];
    let trainingSet = [...solution.slice(0, i), ...solution.slice(i + 1)];
    let trainingLabels = [...labels.slice(0, i), ...labels.slice(i + 1)];

    // Flatten the training set and labels for KNN
    // trainingSet = [].concat(...trainingSet);
    // trainingLabels = [].concat(...trainingLabels);

    let knn = new KNN(trainingSet, trainingLabels, { k: K });

    // Predict the label for the test set
    let prediction = knn.predict(testSet);

    // If the prediction matches the actual label, increment the score
    if (prediction === labels[i]) {
      scores[solutionIndex]++;
    }
  }
});

console.log("Scores for each solution:", scores);

//A-I->0
//j_last->1
//leave one out
