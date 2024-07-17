// let coreArray = [1, 2, 3, 4, 5];
// coreArray.forEach(displayArray);

// function displayArray(num){
//     FakeLog(num);
// }
// FakeLog("");

// coreArray.forEach((num) => FakeLog(num))

// let array02 = coreArray.map((num) => num * 10);
// console.log(array02);

// console.log(array02.reduce((total, num) => total +=num));

// let sentenceConstruction = ['H', "o", "w", "d", "Y"];
// console.log(sentenceConstruction.reduce((sentence, letter) => sentence += letter));

// console.log(sentenceConstruction.find((elem) => elem === "H"));

// console.log(coreArray.sum(FindEven));
// function FindEven(num)
// {
//     if (num * 2 == 4)
//     {
//         return num;
//     }
//     else
//     {
//         return 0;
//     }
// }

// let nestedArr = [2, 3, 6, [2, 3], 5] ;
// console.log(nestedArr.flat());

//l33dSp3@k
let givenword = ['L', 3, 3, "D", "S", "P", 3, '@', 'K'];

let answer = "";

let useableArray = givenword.map(sort);

function sort(letter)
{
    if (letter == 3)
    {
        return "e";
    }
    else if (letter == '@')
    {
        return "a";
    }
    else{
        return letter;
    }
}

console.log(useableArray);
FakeLog(useableArray.reduce((total, x) => total += x));