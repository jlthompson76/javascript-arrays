// Javascript Arrays Classroom Assignment
//
// Animal Array:
// Let animalArray = [“cat” , “dog” , “bird” , “turtle”, “lizard”]
// Sport Array: 
// Let sportArray = [“basketball”,”football”, “Soccer”, “tennis”, “hockey”]
// Number Array
// Let numberArray = [5,10,15,20,25,30]
//
// The exercises below will all reference the above 3 Arrays:

let animalArray = ["cat", "dog", "bird", "turtle", "lizard"];
let sportArray = ["basketball", "football", "soccer", "tennis", "hockey"];
let numberArray = [5,10,15,20,25,30];

console.log(`Animal Array: ${animalArray}`);
console.log(`Sport Array: ${sportArray}`);
console.log(`Number Array: ${numberArray}`);

// 1. Add “lion” to the end of the animals array.

console.log(`#1`);
animalArray.push("lion");
console.log(animalArray);

// 2. Remove “cat” from the beginning of the array. 

console.log(`#2`);
animalArray.shift();
console.log(animalArray);

// 3. Print how many elements are in the animals array now?

console.log(`#3`);
console.log(animalArray.length);

// 4. Print the element that’s at the 2 index in the animals array?

console.log(`#4`);
console.log(animalArray[2]);

// 5. Add 2 elements “volleyball” and “gymnastics” to the sportArray? Using only one method.

console.log(`#5`);
sportArray.push("volleyball", "gymnastics");
console.log(sportArray);

// 6. Print out the element in the 3rd index position in the sportArray.

console.log(`#6`);
console.log(sportArray[2]);

// 7. Print how many elements are in the Sport array now?  

console.log(`#7`);
console.log(sportArray.length);
console.log(sportArray);

// 8. Print how many elements are in the Number array now?  

console.log(`#8`);
console.log(numberArray.length);
console.log(numberArray);

// 9. Combine the number array and the sports array into a new array.

console.log(`#9`);
let newArray = numberArray.concat(sportArray);
console.log(newArray);

// 10. Combine the sports array and the animal array into a new array.

console.log(`#10`);
let newArray2 = sportArray.concat(animalArray);
console.log(newArray2);

// 11. Combine the number array and animal aray into a new array.

console.log(`#11`);
let newArray3 = numberArray.concat(animalArray);
console.log(newArray3);

// 12. Create a new array of car names using the new Array constructor.

console.log(`#12`);
let cars = ["Prius", "Porsche", "Chevrolet", "Ford", "Volkswagen", "Honda"];
console.log(cars);

// 13. Create a new Array of programming languages using the array literal syntax.

console.log(`#13`);
let programmingLanguages = ["Python", "Ruby", "JavaScript", "Java", "Kotlin", "C", "C++"];
console.log(programmingLanguages);

// 14. Check to see if the sports Array contains “water polo” and print the result.

console.log(`#14`);
console.log(sportArray.includes("water polo"));
console.log(`water polo? `.concat(sportArray));

// 15. Check to see if the sports Array contains “soccer” and print the result.

console.log(`#15`);
console.log(sportArray.includes("soccer"));
console.log(`soccer? `.concat(sportArray));

// 16. Check to see if the animal Array contains “lizard” and print the result.

console.log(`#16`);
console.log(animalArray.includes("lizard"));
console.log(`lizard? `.concat(animalArray));

// 17. Check to see if the animal Array contains “dog” and print the result.

console.log(`#17`);
console.log(animalArray.includes("dog"));
console.log(`dog? `.concat(animalArray));

// 18. Check to see if the number Array contains 15 and print the result.

console.log(`#18`);
console.log(numberArray.includes(15));
console.log(`15? `.concat(numberArray));

// 19. Check to see if the number Array contains 30 and print the result.

console.log(`#19`);
console.log(numberArray.includes(30));
console.log(`30? `.concat(numberArray));

// 20. Check to see if the animals array is empty.

console.log(`#20`);
// console.log(animalArray.isEmpty())
// error message: animalArray.isEmpty is not a function;
console.log(animalArray);

// 21. Check to see if the sports array is empty.

console.log(`#21`);
// console.log(sportArray.isEmpty());
// error message: sportArray.isEmpty is not a function
console.log(sportArray);

// 22. Check to see if the number array is empty.

console.log(`#22`);
// console.log(numberArray.isEmpty());
// error message: numberArray.isEmpty is not a function
console.log(numberArray);

// 23. Loop through the animals array and print “I love” + element to the console each time.

console.log(`#23`);
for (const el of animalArray) {
    console.log(`I love ${el}s`);
    }

// 24. Loop through the sports array and print element + “is fun” to the console each time.

console.log(`#24`);
for (const el of sportArray) {
    console.log(`${el} is fun`);
    }
    
// 25. Loop through the numbers array and print the element + 5 to the console each time.

console.log(`#25`);
console.log(numberArray);
for (const el of numberArray) {
    console.log(el + 5);
    }
