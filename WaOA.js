//Walrus Optimization Algorithm

function fitnessFunction(position) {
  // Define the fitness function to minimize
  let sum = 0;
  for (let i = 0; i < position.length; i++) {
    sum += position[i] * position[i];
  }
  return sum;
}

function initializeWalrus(
  dimensions,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace
) {
  const walrus = [];
  for (let i = 0; i < dimensions; i++) {
    // Initialize each element of the particle randomly within the specified range
    const randomValue =
      lowerLimitOfSearchSpace +
      Math.random() * (upperLimitOfSearchSpace - lowerLimitOfSearchSpace);
    walrus.push(randomValue);
  }
  return walrus;
}

function WaOA(
  dimensions,
  numberOfWalruses,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace,
  maxIterations
) {
  const globalBest = {
    position: [],
    value: Infinity,
  };
  const walruses = [];

  // Initialize walruses

  for (let i = 0; i < numberOfWalruses; i++) {
    const walrus = {
      position: initializeWalrus(
        dimensions,
        lowerLimitOfSearchSpace,
        upperLimitOfSearchSpace
      ),
      personalBest: {
        position: [],
        value: Infinity,
      },
    };

    const fitnessValue = fitnessFunction(walrus.position);

    walrus.personalBest.position = [...walrus.position];
    walrus.personalBest.value = fitnessValue;

    if (walrus.personalBest.value < globalBest.value) {
      globalBest.position = [...walrus.personalBest.position];
      globalBest.value = walrus.personalBest.value;
    }

    walruses.push(walrus);
  }

  //WaOA main loop

  let iteration = 0;

  while (iteration < maxIterations) {
    for (let i = 0; i < numberOfWalruses; i++) {
      const walrus = walruses[i];

      // Update position
      for (let j = 0; j < dimensions; j++) {
        const randomValueBetweenOneAndTwo = 1 + Math.random();
        walrus.position[j] =
          walrus.position[j] +
          Math.random() *
            (globalBest.position[j] -
              randomValueBetweenOneAndTwo * walrus.position[j]);
      }

      // Calculate fitness value for the new position
      const newFitnessValue = fitnessFunction(walrus.position);

      // Update personal best if necessary
      if (newFitnessValue < walrus.personalBest.value) {
        walrus.personalBest.position = [...walrus.position];
        walrus.personalBest.value = newFitnessValue;
      }

      // Update global best if necessary
      if (newFitnessValue < globalBest.value) {
        globalBest.position = [...walrus.position];
        globalBest.value = newFitnessValue;
      }
    }
    iteration++;
  }
}

//Example Usage
const dimensions = 2;
const numberOfWalruses = 10;
const lowerLimitOfSearchSpace = -10;
const upperLimitOfSearchSpace = 10;
const maxIterations = 1000;

const result = WaOA(
  dimensions,
  numberOfWalruses,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace,
  maxIterations
);
