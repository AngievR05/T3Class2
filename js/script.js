// // let coreArray = [1, 2, 3, 4, 5];
// // coreArray.forEach(displayArray);

// // function displayArray(num){
// //     FakeLog(num);
// // }
// // FakeLog("");

// // coreArray.forEach((num) => FakeLog(num))

// // let array02 = coreArray.map((num) => num * 10);
// // console.log(array02);

// // console.log(array02.reduce((total, num) => total +=num));

// // let sentenceConstruction = ['H', "o", "w", "d", "Y"];
// // console.log(sentenceConstruction.reduce((sentence, letter) => sentence += letter));

// // console.log(sentenceConstruction.find((elem) => elem === "H"));

// // console.log(coreArray.sum(FindEven));
// // function FindEven(num)
// // {
// //     if (num * 2 == 4)
// //     {
// //         return num;
// //     }
// //     else
// //     {
// //         return 0;
// //     }
// // }

// // let nestedArr = [2, 3, 6, [2, 3], 5] ;
// // console.log(nestedArr.flat());

// //l33dSp3@k
// let givenword = ['L', 3, 3, "D", "S", "P", 3, '@', 'K'];

// let answer = "";

// let useableArray = givenword.map(sort);

// function sort(letter)
// {
//     if (letter == 3)
//     {
//         return "e";
//     }
//     else if (letter == '@')
//     {
//         return "a";
//     }
//     else{
//         return letter;
//     }
// }

// console.log(useableArray);
// FakeLog(useableArray.reduce((total, x) => total += x));

function calculateAverage(readingsString) {
    // Split the input string into an array of strings representing the readings
    let readingsArray = readingsString.split(',').map(Number);

    // Calculate the sum of all oxygen readings
    let total = readingsArray.reduce((sum, reading) => sum + reading, 0);
    
    // Calculate the average oxygen level
    let average = total / readingsArray.length;
    
    // Check if the average oxygen level is within the safe range
    if (average >= 19.5 && average <= 23.5) {
        return `The average oxygen level is ${average.toFixed(2)}%. It is within the safe range.`;
    } else {
        return `The average oxygen level is ${average.toFixed(2)}%. It is not within the safe range.`;
    }
}

// Example usage with the provided data as a string:
const oxygenReadingsString = `19.45781169874675, 23.870565988206803, 20.52379212069659, 20.730682668963794,
18.659291043109494, 19.77949047739719, 22.821768480045765, 24.741832651909537, 20.035275235795584,
25.49609064990466, 19.126526150833204, 23.0941330302319, 19.564065658707438, 24.702737494658574,
20.30713036623542, 24.061934598159038, 25.379470416235655, 25.43921433902142, 23.763483471099907,
18.673823130928167, 25.119446249423955, 21.63158615424079, 18.884928680315028, 18.87350165046249,
20.231699011804196, 21.817802475457096, 25.42664945154559, 21.768639656571292, 23.227217527782404,
21.276934896621103, 20.046920437252133, 19.00680326412115, 24.657150409099142, 22.14671383841292,
24.727045705870488, 19.36010533551836, 22.353731767130586, 23.455040219481518, 23.39545328150891,
23.069897739134817, 19.055932309715086, 21.030862079284493, 21.77364259234597, 25.304978669578627,
23.420510280185947, 24.02921734673976, 23.209610220854817, 21.159259853546136, 24.523364177609967,
20.786235047498327`;

console.log(calculateAverage(oxygenReadingsString));


// Array of calibration values
let calibrationValues = [
    19.45781169874675, 23.870565988206803, 20.52379212069659, 20.730682668963794,
    18.659291043109494, 19.77949047739719, 22.821768480045765, 24.741832651909537,
    20.035275235795584, 25.49609064990466, 19.126526150833204, 23.0941330302319,
    19.564065658707438, 24.702737494658574, 20.30713036623542, 24.061934598159038,
    25.379470416235655, 25.43921433902142, 23.763483471099907, 18.673823130928167,
    25.119446249423955, 21.63158615424079, 18.884928680315028, 18.87350165046249,
    20.231699011804196, 21.817802475457096, 25.42664945154559, 21.768639656571292,
    23.227217527782404, 21.276934896621103, 20.046920437252133, 19.00680326412115,
    24.657150409099142, 22.14671383841292, 24.727045705870488, 19.36010533551836,
    22.353731767130586, 23.455040219481518, 23.39545328150891, 23.069897739134817,
    19.055932309715086, 21.030862079284493, 21.77364259234597, 25.304978669578627,
    23.420510280185947, 24.02921734673976, 23.209610220854817, 21.159259853546136,
    24.523364177609967, 20.786235047498327
];

// Calculate the sum of all calibration values
let sumCalibrationValues = calibrationValues.reduce((sum, value) => sum + value, 0);

console.log(`The sum of all calibration values is: ${sumCalibrationValues}`);
