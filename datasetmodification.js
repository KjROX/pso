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
const allBestSolutions = [];
const C1 = 2; //Cognitive (𝐶1) and social acceleration coefficients (𝐶2) of PSO
const C2 = 2;
const wNum = 0;
const maxIterations = 100;

//Functions

// Sphere function->
function fitnessFunction(position) {
  // Define the fitness function to minimize
  let sum = 0;
  for (let i = 0; i < position.length; i++) {
    sum += position[i] * position[i];
  }
  return sum;
}

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
  return bestSolution;
}

function PSO(dimensions, initialPopulation, C1, C2, wNum, maxIterationsOfPSO) {
  const globalBestArray = [];
  let globalBest = {
    position: [],
    value: Infinity,
  };

  const particles = [];

  const numberOfParticles = initialPopulation.length;

  // Initialize particles
  for (let i = 0; i < numberOfParticles; i++) {
    const particle = {
      position: [...initialPopulation[i].geneId],
      velocity: initialPopulation[i].geneId.map((id) => id * 0.3), // Initialize velocity by multiplying the position by 0.3
      personalBest: {
        position: [],
        value: Infinity,
      },
    };

    // Calculate fitness value for the initial position
    const fitnessValue = fitnessFunction(particle.position);

    // Initialize personal best
    particle.personalBest.position = [...particle.position];
    particle.personalBest.value = fitnessValue;

    // Update global best if necessary
    if (fitnessValue < globalBest.value) {
      globalBest.position = [...particle.position];
      globalBest.value = fitnessValue;
    }

    particles.push(particle);
  }

  // PSO main loop
  let iteration = 0;
  while (iteration < maxIterationsOfPSO) {
    let w;
    if (wNum === 0) {
      // Constant Inertia Weight
      w = 0.8;
    } else if (wNum === 1) {
      // Linearly Decreasing Inertia Weight
      w = 0.9 - ((0.9 - 0.4) * iteration) / maxIterationsOfPSO;
    } else {
      // Random Inertia Weight
      w = 0.5 + Math.random() / 2;
    }

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = particles[i];

      // Calculate velocity using the PSO equations
      for (let j = 0; j < dimensions; j++) {
        const r1 = Math.random();
        const r2 = Math.random();

        const cognitiveComponent =
          C1 * r1 * (particle.personalBest.position[j] - particle.position[j]);
        const socialComponent =
          C2 * r2 * (globalBest.position[j] - particle.position[j]);

        particle.velocity[j] =
          w * particle.velocity[j] + cognitiveComponent + socialComponent;
      }

      // Update particle position
      for (let j = 0; j < dimensions; j++) {
        particle.position[j] += particle.velocity[j];
      }

      // Calculate fitness value for the new position
      const newFitnessValue = fitnessFunction(particle.position);

      // Update personal best if necessary
      if (newFitnessValue < particle.personalBest.value) {
        particle.personalBest.position = [...particle.position];
        particle.personalBest.value = newFitnessValue;
      }

      // Update global best if necessary
      if (newFitnessValue < globalBest.value) {
        globalBest.position = [...particle.position];
        globalBest.value = newFitnessValue;
      }
    }
    globalBestArray.push([...globalBest.position]);

    iteration++;
  }

  return { globalBest, globalBestArray };
}

function buildPopulationFromResultsOfPSO(positionArray, records) {
  let population = [];
  for (let i = 0; i < positionArray.length; i++) {
    let geneId = positionArray[i].map((value) => Math.floor(Math.abs(value)));
    let features = geneId.map((id) => records[id]);

    population.push({
      features: transpose(features),
      geneId: geneId,
    });
  }
  return population;
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
let initialPopulation = buildInitialPopulation(
  populationSize,
  dimensions,
  records
);

// Evaluate the initial population
console.log("Evaluating the initial population...");
let bestSolutionFromInitialPopulation = evaluateSolutions(
  initialPopulation,
  labels
);

// Store the best solution from the initial population
allBestSolutions.push(bestSolutionFromInitialPopulation.geneId);

const result = PSO(
  dimensions,
  initialPopulation,
  C1,
  C2,
  wNum,
  initialPopulation.length
);

for (let i = 0; i < maxIterations; i++) {
  const result = PSO(
    dimensions,
    initialPopulation,
    C1,
    C2,
    wNum,
    initialPopulation.length
  );
  const populationFromResultsOfPSO = buildPopulationFromResultsOfPSO(
    result.globalBestArray,
    records
  );

  const bestSolutionFromResultsOfPSO = evaluateSolutions(
    populationFromResultsOfPSO,
    labels
  );
  allBestSolutions.push(bestSolutionFromResultsOfPSO);
}

console.log("🚀 ~ allBestSolutions:", allBestSolutions);

//A-I->0
//j_last->1
//leave one out
