/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

*/

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"];
let bushBerryColours2 = ["pink", "pink", "pink", "pink"];

//Solution with for loops.
const safeToEat = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "pink") {
      return "It is not safe, do not eat.";
    }
  }
  return "It is safe, you can eat!";
};

console.log(safeToEat(bushBerryColours2));

// Solution with find() method.
const checkSafety = (arr) => {
  result = arr.find((x) => x !== "pink");
  if (result) {
    return "Not Safe, do not eat";
  } else {
    return "Safe, you can eat";
  }
};

console.log(checkSafety(bushBerryColours1));
