console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else {
        console.log(i);
    }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let oneHundered = 1;
while (oneHundered < 100) {
    if (oneHundered % 2 === 0) {
        oneHundered++;
        continue;
    } else {
        console.log(oneHundered);
        oneHundered++;
    }

}

oneHundered = 1;
do {
    if (oneHundered % 3 === 0 && oneHundered % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (oneHundered % 5 === 0) {
        console.log("BUZZ");
    } else if (oneHundered % 3 === 0) {
        console.log("FIZZ");
    } else {
        console.log(oneHundered);
    }

    oneHundered++;
} while (oneHundered < 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found Value!");
        break;
    } else if (i === n) {
        console.log("Did not find value");
        break;
    } else {
        continue;
    }

}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= num; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log("FIZZBUZZ");
    } else if (i % buzzDivisor === 0) {
        console.log("BUZZ");
    } else if (i % fizzDivisor === 0) {
        console.log("FIZZ");
    } else {
        console.log(i);
    }
}