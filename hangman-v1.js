// to do
// filter all except letters
// readline-sync support

const hangmanASCII = [
    `
    +---+\n  |   |\n      |\n      |\n      |\n      |\n=========\n  `,
    `
    +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========\n  `,
    `
    +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========\n  `,
    `
    +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========\n  `,
    `
    +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========\n  `,
    `
    +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========\n  `
  ];
const prompt = require("prompt-sync")();
let wordFromCL = "";
if (process.argv.length < 3) { 
    console.error('Expected one argument');
    process.exit(1);
// } else if (typeof process.argv[2] !== 'string') {
//     console.error('Expected string value');
//     process.exit(1)
} else {
    wordFromCL = (process.argv[2]);
}

let wordLength = wordFromCL.length;
let endOfGame = false;
let chances = 6;
let display = [];

for (let i=0; i<wordLength; i++) {
    display.push("_");
}
// console.log(wordFromCL);
// console.log(wordLength);

console.log(hangmanASCII[6-chances]);
console.log(display.join(" "));

while (endOfGame === false) {
    let guess = prompt("Guess a letter: ").toLowerCase();
    // console.log(guess);

    if (display.indexOf(guess) !== -1 ) {
        console.log(`letter ${guess} was previously entered`);
    }
    for (let position=0; position<wordLength; position++) {
        let letter = wordFromCL[position];
        if (letter === guess) {
            display.splice(position, 1, letter);
        }
    }
    if (!display.includes(guess)) {
        chances -= 1;
        console.log(`you've entered '${guess}', you've missed`);
        console.log(`You have ${chances} chances left`);
    } else if (chances == 0) {
        endOfGame = true;
        console.log(`You've lost, you have no chances left`)
        console.log(`The word is '${wordFromCL}'`);
    }
    console.log(hangmanASCII[6-chances]);
    console.log(display.join(" "));

    if (!display.includes('_')) {
        endOfGame = true;
        console.log(`You win! The word was '${wordFromCL}'!`);
    }
}


