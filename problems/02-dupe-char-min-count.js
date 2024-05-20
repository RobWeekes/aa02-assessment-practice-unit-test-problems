/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

// working, do it again --
// function countCharacters(string) {
// 	// helper function, create object with counts for each letter
// 	console.log(string);
// 	let obj = {};

// 	for(let i = 0; i < string.length; i++) {
// 		let char = string[i];
// 		console.log(char);

// 		// if object value for character is undef (not seen yet), create obj[char] = 1
// 		if(obj[char] === undefined) {
// 			obj[char] = 1;
// 			console.log(obj);

// 		} else { 				// if value is in object, add 1 to value
// 			obj[char] += 1;
// 			console.log(obj);
// 		}
// 	}
// 	console.log(obj);
// 	console.log(Object.keys(obj))
// 	return obj;
// }

// function duplicateCharMinCount(string, minCount) {
// 	let result = [];
// 	let newObj = countCharacters(string);		// helper contructs object with letter counts
// 	console.log(newObj);

// 	for(let char in newObj) {			// remember 'char' is the object key
// 		let charCount = newObj[char];
// 		console.log(charCount);
// 		console.log(char);

// 		if(charCount >= minCount) {
// 			console.log(`letter count: ${newObj[char]}`);
// 			result.push(char);
// 			console.log(result);
// 		}
// 	}
// 	return result;
// }

function countCharacters(string) {		// helper func to count char's
	objCounts = {};
	for(let i = 0; i < string.length; i++) {
		let char = string[i];
		console.log(char);
		let count = objCounts[char];

		// if(!char in objCounts) not working, WHY?
		if(objCounts[char] === undefined) {
			console.log('character not in object yet');
			objCounts[char] = 1;
			console.log(objCounts);
		} else {
			console.log('add to char count');
			objCounts[char] += 1;
			console.log(objCounts);
		}

		// this if statement not working to update char counts, WHY? use else {} ^
		// if(!objCounts[char] === undefined) {
		// 	console.log('add to char count');
		// 	objCounts[char] += 1;
		// 	console.log(objCounts);
		// }

	}
		console.log(objCounts);
		return objCounts;
}



function duplicateCharMinCount(string, minCount) {
	let resultArr = [];
	console.log(string);

	countCharacters(string);
	console.log(objCounts);

	for(let char in objCounts) {
		let count = objCounts[char];
		if(count >= minCount) {
			console.log(char);
			resultArr.push(char);
			console.log(resultArr);
		}
	}
	return resultArr;
}



countCharacters('balls');

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]


// first try not working

// function countCharacters(string) {
// 	// helper function, create object with counts
// 	console.log(string);

// 	let count = {};

// 	for(let i = 0; i < string.length; i++) {
// 		if() {

// 		}

// 	}


// 	let initialV = 0;
// 	letters.forEach((ltr) => {
// 		dict.set(ltr, 0);
// 		dict.set(ltr, dict.get(ltr) + 1);
// 		console.log(dict.get(ltr));
// 		console.log(dict.get('b'));
// 		console.log(dict.get('a'));
// 		console.log(dict.get('l'));
// 		console.log(dict.get('s'));
// 	})
// }

// function duplicateCharMinCount(string, minCount) {
// 	if() {
// 		result.push()
// 		return result;
// 	}
// }




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
