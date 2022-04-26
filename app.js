console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let j = 1; j <= 100; j++){
    if (j % 3 == 0 && j % 5 == 0){
        console.log(`${j}: FIZZBUZZ`);
    }
    else if (j % 3 == 0){
        console.log(`${j}: FIZZ`)
    }
    else if (j % 5 == 0){
        console.log(`${j}: BUZZ`);
    }
}
