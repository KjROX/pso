//Packages
const fs = require("fs");
const Papa = require("papaparse");
const KNN = require("ml-knn");

//Variables
const labels = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
let populationSize = 10;
let dimensions = 5;

//Functions
function minMaxScaler(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return array.map((value) => (value - min) / (max - min));
}
function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

function buildInitialPopulation(populationSize, dimensions, records) {
  let population = [];
  for (let i = 0; i < populationSize; i++) {
    let solution = {
      features: [],
      geneId: Array(dimensions).fill(-1),
    };
    for (let j = 0; j < dimensions; j++) {
      let randomIndex = Math.floor(Math.random() * records.length);
      solution.geneId[j] = randomIndex;
      solution.features.push(records[randomIndex]);
    }
    solution.features = transpose(solution.features);
    population.push(solution);
  }
  return population;
}

function evaluateSolutions(population, labels) {
  const K = 3; // Choose an appropriate K value for KNN
  let scores = new Array(population.length).fill(0); // Initialize scores array
  let highestScore = 0;
  let bestSolution = null;

  population.forEach((solution, solutionIndex) => {
    for (let i = 0; i < solution.features.length; i++) {
      let testSet = solution.features[i];
      let trainingSet = [
        ...solution.features.slice(0, i),
        ...solution.features.slice(i + 1),
      ];
      let trainingLabels = [...labels.slice(0, i), ...labels.slice(i + 1)];

      let knn = new KNN(trainingSet, trainingLabels, { k: K });
      let prediction = knn.predict(testSet);

      if (prediction === labels[i]) {
        scores[solutionIndex]++;
      }
    }

    // Check if the current solution has the highest score
    if (scores[solutionIndex] > highestScore) {
      highestScore = scores[solutionIndex];
      bestSolution = solution;
    }
  });

  console.log("Highest score:", highestScore);
  return bestSolution;
}

// Load and parse the dataset
console.log("Loading and parsing the dataset...");
const data = fs.readFileSync("GSE7621_dataset.csv", "utf8");

let records = Papa.parse(data, { header: true, dynamicTyping: true }).data;
records = records
  .map((row) => Object.values(row))
  //Filling missing values for each row with 0
  .map((row) => row.map((value) => (isNaN(value) ? 0 : Number(value))))
  //remove the last element of the array
  .slice(0, -1);

// Transpose the records to get columns
let transposedRecords = transpose(records);

// Normalize each column
let normalizedRecords = transposedRecords.map((column) => minMaxScaler(column));

// Transpose back to original structure
records = transpose(normalizedRecords);

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
//records.length->54317 ->no. of rows in the csv file

// Build the initial population
console.log("Building the initial population...");
let population = buildInitialPopulation(populationSize, dimensions, records);
console.log("🚀 ~ population:", population);

// Evaluate the initial population
console.log("Evaluating the initial population...");
let bestSolution = evaluateSolutions(population, labels);
console.log("Best solution:", bestSolution);

//A-I->0
//j_last->1
//leave one out
