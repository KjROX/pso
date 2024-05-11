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
  19.506178932299253, 11.842808604723611, 11.842808604723611,
  11.178699745242627, 4.422878173389914, 4.050388182672684, 3.8100963375555734,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.8499396265277267, 0.8499396265277267,
  0.8499396265277267, 0.6826498079158343, 0.6826498079158343,
  0.6826498079158343, 0.6826498079158343, 0.6826498079158343,
  0.6826498079158343, 0.6826498079158343, 0.6826498079158343,
  0.6826498079158343, 0.6826498079158343, 0.6826498079158343,
  0.6826498079158343, 0.6822693788658034, 0.6822693788658034,
  0.6822693788658034, 0.6822693788658034, 0.6822693788658034,
  0.6822693788658034, 0.6822693788658034, 0.6822693788658034,
  0.6822693788658034, 0.6822693788658034, 0.6822693788658034,
  0.6822693788658034, 0.6822693788658034, 0.34807401092420126,
  0.34807401092420126, 0.34807401092420126, 0.34807401092420126,
  0.34807401092420126, 0.34807401092420126, 0.2874890888099587,
  0.21821904149238577, 0.19235913740369642, 0.19058713974258096,
  0.19058713974258096, 0.19058713974258096, 0.19058713974258096,
  0.17085027748395226, 0.17085027748395226, 0.16797322712610033,
  0.16283904171540725, 0.16094584610743515, 0.1608483473622301,
  0.1608483473622301, 0.1608483473622301, 0.1608483473622301,
];

const globalBestArrayOf100IterationsLinearlYDecreasing = [
  9.60111860184923, 9.60111860184923, 8.175878202246023, 8.11445327041089,
  8.11445327041089, 6.714059775385014, 6.714059775385014, 6.714059775385014,
  6.714059775385014, 6.714059775385014, 6.714059775385014, 6.714059775385014,
  6.714059775385014, 6.714059775385014, 6.714059775385014, 4.475816097217538,
  4.475816097217538, 4.475816097217538, 4.475816097217538, 4.475816097217538,
  4.475816097217538, 4.475816097217538, 4.475816097217538, 4.475816097217538,
  4.475816097217538, 4.475816097217538, 4.475816097217538, 4.475816097217538,
  4.475816097217538, 4.475816097217538, 4.475816097217538, 3.3315559355589515,
  3.3315559355589515, 2.303809573000602, 2.303809573000602, 2.303809573000602,
  2.303809573000602, 2.303809573000602, 2.303809573000602, 2.303809573000602,
  2.303809573000602, 2.303809573000602, 2.303809573000602, 2.303809573000602,
  2.303809573000602, 2.303809573000602, 2.303809573000602, 2.303809573000602,
  2.303809573000602, 2.303809573000602, 2.303809573000602, 2.303809573000602,
  2.303809573000602, 2.303809573000602, 2.303809573000602, 1.6998452948845226,
  1.321636073463069, 1.321636073463069, 0.9116519019733049, 0.7308619790795845,
  0.7308619790795845, 0.7308619790795845, 0.39730290870081825,
  0.24598532604622564, 0.24598532604622564, 0.24598532604622564,
  0.24598532604622564, 0.148455209752843, 0.12449322515805013,
  0.12449322515805013, 0.12449322515805013, 0.12449322515805013,
  0.12449322515805013, 0.12449322515805013, 0.12449322515805013,
  0.11927668510805234, 0.11610421807963939, 0.11453876328073359,
  0.1137582783282678, 0.11336872753551061, 0.11317510829760057,
  0.1130795519702253, 0.11303279831260171, 0.11301013911792762,
  0.1129992664931394, 0.11299410285726014, 0.07471178153151617,
  0.07471178153151617, 0.06355158818690174, 0.04249700838499231,
  0.04249700838499231, 0.014603778175796363, 0.014603778175796363,
  0.014603778175796363, 0.0030425746171639325, 0.0030425746171639325,
  0.0009423862539732823, 0.0009423862539732823, 0.0009423862539732823,
  0.0009423862539732823,
];

const globalBestArrayOf100IterationsRandomWeight = [
  5.556225240677011, 5.556225240677011, 5.556225240677011, 5.556225240677011,
  5.34352358859234, 5.34352358859234, 4.213894894656813, 2.0917830469382683,
  1.2277127201673104, 1.2277127201673104, 1.2277127201673104,
  1.2277127201673104, 1.2277127201673104, 1.0629210540219711,
  0.6975502347299083, 0.6975502347299083, 0.6975502347299083,
  0.6975502347299083, 0.6367879377189021, 0.6367879377189021,
  0.4072908606119401, 0.4072908606119401, 0.25509043361754613,
  0.25509043361754613, 0.23410933698908876, 0.23410933698908876,
  0.23410933698908876, 0.23410933698908876, 0.23410933698908876,
  0.23410933698908876, 0.23410933698908876, 0.23410933698908876,
  0.23410933698908876, 0.23410933698908876, 0.23410933698908876,
  0.23410933698908876, 0.23410933698908876, 0.1069222517546183,
  0.1069222517546183, 0.1069222517546183, 0.1069222517546183,
  0.1069222517546183, 0.1069222517546183, 0.1069222517546183,
  0.1069222517546183, 0.1069222517546183, 0.1069222517546183,
  0.1069222517546183, 0.1069222517546183, 0.1069222517546183,
  0.1069222517546183, 0.1069222517546183, 0.1069222517546183,
  0.1069222517546183, 0.1069222517546183, 0.08942283999084147,
  0.05674686517526989, 0.05674686517526989, 0.05674686517526989,
  0.05674686517526989, 0.02780336798732271, 0.022551558474662513,
  0.022551558474662513, 0.022551558474662513, 0.022551558474662513,
  0.022551558474662513, 0.022551558474662513, 0.02176200136600944,
  0.02176200136600944, 0.02150271430786066, 0.02150271430786066,
  0.02150271430786066, 0.0103840789500111, 0.0103840789500111,
  0.0103840789500111, 0.0103840789500111, 0.002573984142038752,
  0.002573984142038752, 0.002573984142038752, 0.002573984142038752,
  0.002573984142038752, 0.002573984142038752, 0.002573984142038752,
  0.002573984142038752, 0.00222675967853622, 0.00222675967853622,
  0.00222675967853622, 0.00222675967853622, 0.00222675967853622,
  0.0019645864091539615, 0.0019645864091539615, 0.0019645864091539615,
  0.0019645864091539615, 0.0019645864091539615, 0.0019645864091539615,
  0.0019645864091539615, 0.0019645864091539615, 0.0019645864091539615,
  0.0019645864091539615, 0.0019645864091539615,
];
//values used
const dimensions = 5;
const numberOfParticles = 10;
const lowerLimitOfSearchSpace = -5.12;
const upperLimitOfSearchSpace = 5.12;
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
