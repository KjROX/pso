//write me Ackley function to test

// function fitnessFunction(x) {
//   const n = x.length;
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1 += x[i] ** 2;
//     sum2 += Math.cos(2 * Math.PI * x[i]);
//   }
//   return (
//     -20 * Math.exp(-0.2 * Math.sqrt(sum1 / n)) -
//     Math.exp(sum2 / n) +
//     20 +
//     Math.E
//   );
// }

//Write me Rastrigin function to test

// function fitnessFunction(x) {
//   const n = x.length;
//   let result = 10 * n;
//   for (let i = 0; i < n; i++) {
//     result += x[i] ** 2 - 10 * Math.cos(2 * Math.PI * x[i]);
//   }
//   return result;
// }

//write me Dixon-Price function to test

// function fitnessFunction(x) {
//   const n = x.length;
//   let result = 0;
//   for (let i = 1; i < n; i++) {
//     result += i * (2 * x[i] ** 2 - x[i - 1]) ** 2 + (x[i] - 1) ** 2;
//   }
//   return result;
// }

//write me Zakharov function to test

// function fitnessFunction(x) {
//   const n = x.length;
//   let result = 0;
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1 += x[i] ** 2;
//     sum2 += 0.5 * (i + 1) * x[i];
//   }
//   result = sum1 + sum2 ** 2 + sum2 ** 4;
//   return result;
// }

// Sphere function->
function fitnessFunction(position) {
  // Define the fitness function to minimize
  let sum = 0;
  for (let i = 0; i < position.length; i++) {
    sum += position[i] * position[i];
  }
  return sum;
}

function initializeParticles(
  dimensions,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace
) {
  const particle = [];
  for (let i = 0; i < dimensions; i++) {
    // Initialize each element of the particle randomly within the specified range
    const randomValue =
      lowerLimitOfSearchSpace +
      Math.random() * (upperLimitOfSearchSpace - lowerLimitOfSearchSpace);
    particle.push(randomValue);
  }
  return particle;
}

function PSO(
  dimensions,
  numberOfParticles,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace,
  C1,
  C2,
  wNum,
  maxIterations
) {
  const globalBestArray = [];
  let globalBest = {
    position: [],
    value: Infinity,
  };

  const particles = [];

  // Initialize particles
  for (let i = 0; i < numberOfParticles; i++) {
    const particle = {
      position: initializeParticles(
        dimensions,
        lowerLimitOfSearchSpace,
        upperLimitOfSearchSpace
      ),
      velocity: Array(dimensions).fill(0),
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
  while (iteration < maxIterations) {
    // Linearly Decreasing Inertia Weight
    // const w = 0.9 - ((0.9 - 0.4) * iteration) / maxIterations;

    // Random Inertia Weight
    // const w = 0.5 + Math.random() / 2;
    let w;
    if (wNum === 0) {
      w = 0.8;
    } else if (wNum === 1) {
      w = 0.9 - ((0.9 - 0.4) * iteration) / maxIterations;
    } else {
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
    globalBestArray.push({ ...globalBest });

    iteration++;
  }

  return { globalBest, globalBestArray };
}

// Example usage
const dimensions = 3;
const numberOfParticles = 10;
const lowerLimitOfSearchSpace = -5.12;
const upperLimitOfSearchSpace = 5.12;
const C1 = 2; //Cognitive (𝐶1) and social acceleration coefficients (𝐶2) of PSO
const C2 = 2;
// const wmax = 0.9;
// const wmin = 0.4;
const w = 0.8; //Inertia weight of PSO (𝑤)
const maxIterations = 100;

const resultsArrayConstant = [];

for (let i = 0; i < 50; i++) {
  const result = PSO(
    dimensions,
    numberOfParticles,
    lowerLimitOfSearchSpace,
    upperLimitOfSearchSpace,
    C1,
    C2,
    0,
    maxIterations
  );
  resultsArrayConstant.push(result.globalBest.value);
}

console.log("50runsssss Constant", resultsArrayConstant);

const resultsArrayLinearlyDecreasing = [];
for (let i = 0; i < 50; i++) {
  const result = PSO(
    dimensions,
    numberOfParticles,
    lowerLimitOfSearchSpace,
    upperLimitOfSearchSpace,
    C1,
    C2,
    1,
    maxIterations
  );
  resultsArrayLinearlyDecreasing.push(result.globalBest.value);
}

console.log("50runsssss Linearly Decreasing", resultsArrayLinearlyDecreasing);

const resultsArrayRandom = [];
for (let i = 0; i < 50; i++) {
  const result = PSO(
    dimensions,
    numberOfParticles,
    lowerLimitOfSearchSpace,
    upperLimitOfSearchSpace,
    C1,
    C2,
    2,
    maxIterations
  );
  resultsArrayRandom.push(result.globalBest.value);
}

console.log("50runsssss Random", resultsArrayRandom);

// const result = PSO(
//   dimensions,
//   numberOfParticles,
//   lowerLimitOfSearchSpace,
//   upperLimitOfSearchSpace,
//   C1,
//   C2,
//   w,
//   maxIterations
// );

// console.log(
//   "100 iterations",
//   result.globalBestArray.map((x) => x.value)
// );

//For each benchmark function considering each type of inertia weight->
//Run The PSO function 50 times, store each run's global best in an array, then do (mean,median,standard deviation,min, max) on the array of global best.
//Graph-> x-axis: number of iterations, y-axis: fitness value
