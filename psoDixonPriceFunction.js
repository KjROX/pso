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
  8450.109930466831, 8450.109930466831, 1915.3756319363863, 1915.3756319363863,
  1915.3756319363863, 1915.3756319363863, 1915.3756319363863,
  1915.3756319363863, 1535.238160196652, 755.0157130236212, 330.0635587460846,
  330.0635587460846, 330.0635587460846, 64.80855216258335, 64.80855216258335,
  64.80855216258335, 64.80855216258335, 64.80855216258335, 64.80855216258335,
  64.80855216258335, 64.80855216258335, 64.80855216258335, 64.80855216258335,
  64.80855216258335, 64.80855216258335, 64.80855216258335, 64.80855216258335,
  64.80855216258335, 64.80855216258335, 64.80855216258335, 64.80855216258335,
  64.80855216258335, 64.80855216258335, 64.80855216258335, 64.80855216258335,
  64.80855216258335, 64.80855216258335, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794, 25.293347481825794, 25.293347481825794,
  25.293347481825794,
];
const globalBestArrayOf100IterationsLinearlYDecreasing = [
  376.14010608823065, 376.14010608823065, 141.11203377020826,
  141.11203377020826, 141.11203377020826, 133.97324427705996,
  133.97324427705996, 133.97324427705996, 133.97324427705996,
  133.97324427705996, 90.7531991495624, 90.7531991495624, 90.7531991495624,
  90.7531991495624, 90.7531991495624, 90.7531991495624, 90.7531991495624,
  90.7531991495624, 90.7531991495624, 90.7531991495624, 90.7531991495624,
  90.7531991495624, 35.13618467373875, 35.13618467373875, 35.13618467373875,
  35.13618467373875, 35.13618467373875, 35.13618467373875, 35.13618467373875,
  35.13618467373875, 35.13618467373875, 35.13618467373875, 35.13618467373875,
  35.13618467373875, 35.13618467373875, 35.13618467373875, 35.13618467373875,
  35.13618467373875, 35.13618467373875, 31.75974199346976, 31.75974199346976,
  31.75974199346976, 20.20233514918491, 12.071829402810668, 12.071829402810668,
  5.435120563879433, 5.435120563879433, 5.435120563879433, 5.435120563879433,
  5.435120563879433, 5.435120563879433, 5.435120563879433, 5.435120563879433,
  5.336617712240509, 3.5681199003822908, 2.8788055490219198, 2.6993874134120377,
  2.6993874134120377, 2.6993874134120377, 2.6993874134120377,
  2.6961665759026157, 2.6699187421451502, 2.665919378653248, 2.665919378653248,
  2.6549238815838003, 2.6549238815838003, 2.65296482756888, 2.65296482756888,
  2.652305696200105, 2.652305696200105, 2.652305696200105, 2.652305696200105,
  2.652305696200105, 2.5783226761162554, 2.4959567838856023, 2.389784856626882,
  1.5979858062927603, 1.5979858062927603, 1.3008851277644338, 0.977106799696147,
  0.977106799696147, 0.977106799696147, 0.977106799696147, 0.977106799696147,
  0.977106799696147, 0.9698994438452031, 0.9698994438452031, 0.9698994438452031,
  0.96022803002311, 0.8345664583140984, 0.8164251957372888, 0.8092484899009014,
  0.7804589855613937, 0.6545662225542095, 0.6484985810686607,
  0.6484985810686607, 0.6463428449097168, 0.6366237371757196,
  0.6366237371757196, 0.6366237371757196,
];

const globalBestArrayOf100IterationsRandomWeight = [
  1418.9342792673433, 284.223969652476, 222.4014192531492, 222.4014192531492,
  218.4289514650302, 218.4289514650302, 218.4289514650302, 112.19655044377716,
  112.19655044377716, 112.19655044377716, 112.19655044377716, 87.75085844534757,
  87.75085844534757, 57.550257930791645, 57.550257930791645, 57.550257930791645,
  57.550257930791645, 57.550257930791645, 57.550257930791645,
  57.550257930791645, 57.550257930791645, 56.29087856435939, 56.29087856435939,
  56.29087856435939, 56.29087856435939, 56.29087856435939, 56.29087856435939,
  56.29087856435939, 56.29087856435939, 56.29087856435939, 54.070472080978554,
  54.070472080978554, 54.070472080978554, 54.070472080978554,
  54.070472080978554, 54.070472080978554, 54.070472080978554,
  54.070472080978554, 54.070472080978554, 54.070472080978554,
  54.070472080978554, 54.070472080978554, 54.070472080978554,
  54.070472080978554, 54.070472080978554, 54.070472080978554,
  54.070472080978554, 53.69668196512149, 52.897323778773156, 52.897323778773156,
  52.846077402892014, 52.846077402892014, 52.846077402892014,
  52.846077402892014, 52.846077402892014, 52.846077402892014,
  52.846077402892014, 52.846077402892014, 52.846077402892014,
  52.846077402892014, 52.804502714735094, 52.804502714735094,
  52.804502714735094, 52.804502714735094, 52.804502714735094,
  52.804502714735094, 52.804502714735094, 52.804502714735094,
  52.804502714735094, 52.804502714735094, 52.804502714735094,
  52.804502714735094, 52.804502714735094, 52.804502714735094,
  52.804502714735094, 52.804502714735094, 52.804502714735094,
  51.111169635255635, 51.111169635255635, 51.111169635255635,
  51.111169635255635, 51.111169635255635, 51.111169635255635, 50.02853145381428,
  50.02853145381428, 50.02853145381428, 50.02853145381428, 50.02853145381428,
  50.02853145381428, 49.06628076529763, 49.06628076529763, 49.06628076529763,
  49.06628076529763, 49.06628076529763, 49.06628076529763, 49.06628076529763,
  49.06628076529763, 49.06628076529763, 49.06628076529763, 49.01860113086073,
];

//values used
const dimensions = 5;
const numberOfParticles = 10;
const lowerLimitOfSearchSpace = -10;
const upperLimitOfSearchSpace = 10;
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
  let result = 0;
  for (let i = 1; i < n; i++) {
    result += i * (2 * x[i] ** 2 - x[i - 1]) ** 2 + (x[i] - 1) ** 2;
  }
  return result;
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
