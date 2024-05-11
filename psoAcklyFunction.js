// const globalBestArrayOf50Runs = [
//   0.00007258654888672753, 0.00009956921364318984, 0.0001872368383982038,
//   0.00003534600295920514, 0.00029062274693676665, 0.003920715145515648,
//   0.0002538928656932701, 0.0031147439669362556, 0.0029635117702483046,
//   0.00040525810337639715, 0.0000057843964974419966, 0.00018807224840148448,
//   0.008197036754946018, 0.000018824316660605223, 0.0020420645487670944,
//   0.015269928091928573, 0.00001565312100385071, 0.004304043948905352,
//   0.00023339310162776667, 0.01959036478765229, 0.001410523557464834,
//   0.00003962466692569823, 0.01047340861929044, 0.000017513924407382272,
//   0.00005716834679812176, 0.000021097729465023215, 0.00001775840509316273,
//   0.006025614401915483, 0.000255251088433531, 0.000031980877958844326,
//   0.009932405932301476, 0.000006542073054189054, 0.002080560889952952,
//   6.433631170395884e-7, 0.00021866695885983898, 0.09164289604012907,
//   0.0008902165059881546, 0.003094175316343193, 0.0037537366118738313,
//   0.001908693378869673, 0.004984096149005668, 0.0000072721597795911675,
//   0.000006018066331592522, 0.00003424287357186359, 0.042389514739016206,
//   0.001252994850524239, 0.00005286616413130213, 0.00017433636751351542,
//   0.00005425750645230623, 0.0012915016635272009,
// ];

// //find the mean of the global best values
// let mean = 0;
// for (let i = 0; i < globalBestArrayOf50Runs.length; i++) {
//   mean += globalBestArrayOf50Runs[i];
// }
// mean /= globalBestArrayOf50Runs.length;
// console.log("mean", mean);

// //find the standard deviation of the global best values
// let standardDeviation = 0;
// for (let i = 0; i < globalBestArrayOf50Runs.length; i++) {
//   standardDeviation += (globalBestArrayOf50Runs[i] - mean) ** 2;
// }
// standardDeviation /= globalBestArrayOf50Runs.length;
// standardDeviation = Math.sqrt(standardDeviation);
// console.log("standard deviation", standardDeviation);

// //find the median of the global best values
// const sortedGlobalBestArray = globalBestArrayOf50Runs.sort((a, b) => a - b);
// const median =
//   sortedGlobalBestArray[Math.floor(sortedGlobalBestArray.length / 2)];
// console.log("median", median);

// //find the min of the global best values
// const min = sortedGlobalBestArray[0];
// console.log("min", min);

// //find the max of the global best values
// const max = sortedGlobalBestArray[sortedGlobalBestArray.length - 1];
// console.log("max", max);

// // mean 0.019293065836010426
// // standard deviation 0.028773823761930745
// // median 0.006138244442457856
// // min 0.000026390316246860604
// // max 0.15212834830111885

// //convergence graph-> Global best values of 100 iterations
const globalBestArrayOf100IterationsConstantWeight = [
  16.831217543634953, 16.831217543634953, 16.831217543634953,
  15.469724841951082, 14.401629401042896, 14.401629401042896,
  14.401629401042896, 14.401629401042896, 14.401629401042896,
  14.401629401042896, 14.401629401042896, 14.401629401042896,
  14.401629401042896, 14.401629401042896, 13.953780814472648, 11.674042762032,
  9.713032192819158, 9.428736569797849, 9.428736569797849, 8.579315762517913,
  7.864138450517249, 7.507151142659355, 7.507151142659355, 7.46841508356774,
  6.893195491975424, 6.893195491975424, 6.893195491975424, 6.893195491975424,
  6.893195491975424, 6.291585187361193, 6.291585187361193, 6.291585187361193,
  6.291585187361193, 6.291585187361193, 6.291585187361193, 6.291585187361193,
  6.291585187361193, 6.291585187361193, 6.056074014940528, 5.545440965336468,
  4.66702867943636, 4.66702867943636, 4.66702867943636, 4.66702867943636,
  4.66702867943636, 4.66702867943636, 4.66702867943636, 4.66702867943636,
  4.66702867943636, 4.66702867943636, 4.6597525297218425, 4.609548941668876,
  4.609548941668876, 4.59223381401587, 4.59223381401587, 4.59223381401587,
  4.59223381401587, 4.59223381401587, 4.59223381401587, 4.59223381401587,
  4.59223381401587, 4.59223381401587, 4.59223381401587, 4.59223381401587,
  4.589284360313808, 4.589284360313808, 4.589284360313808, 4.577654593775282,
  4.57283028052365, 4.57283028052365, 4.57283028052365, 4.565164029411321,
  4.565164029411321, 4.565164029411321, 4.565164029411321, 4.565164029411321,
  4.5648571677412875, 4.564051625669862, 4.564051625669862, 4.564051625669862,
  4.563361160326224, 4.5625889426276345, 4.562343207654198, 4.562343207654198,
  4.562343207654198, 4.562343207654198, 4.559962861683278, 4.558850338687861,
  4.558850338687861, 4.558850338687861, 4.558389647646081, 4.557908015046884,
  4.5578933435295, 4.5578933435295, 4.5578933435295, 4.557739081790206,
  4.557611737756815, 4.557555017644226, 4.557538683273226, 4.557538683273226,
];

const globalBestArrayOf100IterationsLinearlYDecreasing = [
  19.224591224664135, 19.224591224664135, 19.224591224664135,
  18.624032307088026, 18.624032307088026, 18.624032307088026,
  17.258713912477308, 17.258713912477308, 17.258713912477308,
  17.258713912477308, 17.258713912477308, 17.258713912477308,
  13.954314353627607, 13.954314353627607, 13.954314353627607,
  13.954314353627607, 13.954314353627607, 13.954314353627607,
  13.954314353627607, 13.954314353627607, 13.954314353627607,
  13.954314353627607, 13.954314353627607, 13.954314353627607,
  13.954314353627607, 13.954314353627607, 13.954314353627607,
  13.954314353627607, 13.954314353627607, 13.954314353627607,
  13.954314353627607, 13.292809419240594, 13.292809419240594,
  13.292809419240594, 13.292809419240594, 12.092845648582847,
  12.092845648582847, 12.092845648582847, 12.092845648582847,
  12.092845648582847, 12.092845648582847, 12.092845648582847,
  12.092845648582847, 12.092845648582847, 12.092845648582847,
  12.092845648582847, 12.092845648582847, 12.092845648582847,
  12.092845648582847, 12.092845648582847, 12.092845648582847, 9.804984300879012,
  9.804984300879012, 9.804984300879012, 9.42540716044536, 9.42540716044536,
  9.42540716044536, 9.42540716044536, 9.42540716044536, 9.42540716044536,
  9.42540716044536, 8.858279229621786, 8.858279229621786, 8.858279229621786,
  8.858279229621786, 8.837185118046493, 8.837185118046493, 8.837185118046493,
  8.837185118046493, 7.790374098270437, 7.790374098270437, 7.790374098270437,
  7.790374098270437, 7.567441977897726, 6.987984677527503, 5.964432650283726,
  5.964432650283726, 5.964432650283726, 5.964432650283726, 5.964432650283726,
  5.964432650283726, 5.964432650283726, 5.964432650283726, 5.964432650283726,
  4.75947306443252, 4.75947306443252, 4.75947306443252, 4.75947306443252,
  4.75947306443252, 4.75947306443252, 4.741070672697774, 4.285506183635491,
  4.060811084593084, 3.8833583708289017, 3.741264460133561, 3.741264460133561,
  3.741264460133561, 3.741264460133561, 3.7383414782111726, 3.716163156174123,
];

const globalBestArrayOf100IterationsRandomWeight = [
  16.98846336951291, 16.98846336951291, 10.45877906011829, 10.45877906011829,
  10.45877906011829, 10.45877906011829, 10.45877906011829, 10.45877906011829,
  10.45877906011829, 9.867344939602917, 9.867344939602917, 9.867344939602917,
  9.72769881244817, 9.72769881244817, 9.72769881244817, 8.280006822287925,
  8.280006822287925, 8.280006822287925, 8.280006822287925, 8.280006822287925,
  8.280006822287925, 8.280006822287925, 8.280006822287925, 8.280006822287925,
  8.280006822287925, 8.280006822287925, 8.269503995483806, 8.269503995483806,
  8.021404054986542, 8.021404054986542, 8.018897121905546, 8.018897121905546,
  8.018897121905546, 8.018897121905546, 8.018897121905546, 8.018897121905546,
  8.018897121905546, 7.911753433478852, 7.911753433478852, 7.911753433478852,
  7.897635972798838, 7.897635972798838, 7.897635972798838, 6.927305844584561,
  6.927305844584561, 6.927305844584561, 6.927305844584561, 6.927305844584561,
  6.927305844584561, 6.927305844584561, 6.697566129028289, 6.697566129028289,
  6.697566129028289, 6.697566129028289, 4.940237855380818, 4.940237855380818,
  4.940237855380818, 4.940237855380818, 4.940237855380818, 4.940237855380818,
  4.940237855380818, 4.940237855380818, 4.4417587165685575, 4.4417587165685575,
  4.4417587165685575, 4.4417587165685575, 4.4417587165685575,
  4.4417587165685575, 4.2070617466579385, 4.2070617466579385,
  4.2070617466579385, 3.6347515477184698, 3.6347515477184698,
  3.6347515477184698, 3.6347515477184698, 3.6347515477184698,
  3.6347515477184698, 3.6347515477184698, 3.6347515477184698,
  3.6347515477184698, 3.3044543745881403, 3.3044543745881403, 2.675007058967392,
  2.675007058967392, 2.675007058967392, 2.675007058967392, 2.675007058967392,
  2.675007058967392, 2.675007058967392, 2.675007058967392, 2.675007058967392,
  2.675007058967392, 2.675007058967392, 2.675007058967392, 2.675007058967392,
  2.675007058967392, 2.675007058967392, 2.675007058967392, 2.675007058967392,
  2.675007058967392,
];
//values used
const dimensions = 5;
const numberOfParticles = 10;
const lowerLimitOfSearchSpace = -32;
const upperLimitOfSearchSpace = 32;
const C1 = 2; //Cognitive (𝐶1) and social acceleration coefficients (𝐶2) of PSO
const C2 = 2;
// const wmax = 0.9;
// const wmin = 0.4;
// const w = 0.8; //Inertia weight of PSO (𝑤)
const maxIterations = 100;

const arrayOf100 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

const xValues = [...arrayOf100];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [...globalBestArrayOf100IterationsConstantWeight],
        borderColor: "red",
        fill: false,
      },
      {
        data: [...globalBestArrayOf100IterationsLinearlYDecreasing],
        borderColor: "green",
        fill: false,
      },
      {
        data: [...globalBestArrayOf100IterationsRandomWeight],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

function fitnessFunction(x) {
  const n = x.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += x[i] ** 2;
    sum2 += Math.cos(2 * Math.PI * x[i]);
  }
  return (
    -20 * Math.exp(-0.2 * Math.sqrt(sum1 / n)) -
    Math.exp(sum2 / n) +
    20 +
    Math.E
  );
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

const resultConstantWeight = PSO(
  dimensions,
  numberOfParticles,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace,
  C1,
  C2,
  0,
  maxIterations
);

console.log(
  "100 iterations Constant Weight",
  resultConstantWeight.globalBestArray.map((x) => x.value)
);
const resultLinearlyDecreasing = PSO(
  dimensions,
  numberOfParticles,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace,
  C1,
  C2,
  1,
  maxIterations
);

console.log(
  "100 iterations Linearly Decreasing Weight",
  resultLinearlyDecreasing.globalBestArray.map((x) => x.value)
);
const resultRandomWeight = PSO(
  dimensions,
  numberOfParticles,
  lowerLimitOfSearchSpace,
  upperLimitOfSearchSpace,
  C1,
  C2,
  2,
  maxIterations
);

console.log(
  "100 iterations Random Weight",
  resultRandomWeight.globalBestArray.map((x) => x.value)
);
