/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

// easier method is to create an array of values, then check includes method --

// working, do it again --
// function keyAdderUniqueVal(object, key, newValue) {
// 	let values = Object.values(object);
// 	let keys = Object.keys(object);
// 	console.log(values);
// 	console.log(keys);
// 	// console.log(Object.entries(object));

// 	if(!values.includes(newValue)) {
// 		console.log('not included');
// 		object[key] = newValue;
// 		console.log(object);
// 	}
// 	return object;
// }

//

// function keyAdderUniqueVal(object, key, newValue) {

// 	let value = '';
// 	let keyArr = Object.keys(object);
// 	console.log(keyArr);
// 	let valueArr = Object.values(object);
// 	console.log(valueArr);
// 	console.log(object);

// 	// not needed, logging progress
// 	// if(valueArr.includes(newValue)) {
// 	// 	console.log('value already there')
// 	// 	console.log(object);
// 	// }

// 	if(!valueArr.includes(newValue)) {
// 		console.log('value not there yet')
// 		console.log(object);
// 		object[key] = newValue;
// 		console.log(object);
// 	}

// 	return object;
// }

// let cat = { name: 'Willie', color: 'orange' };
// keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(cat);
// keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

// keyAdderUniqueVal(cat, "fruit", "strawberry"); 		// adds unique value strawbarry
// console.log(cat);

// first method

let string = '1'
string++
console.log(string)

console.log(5 + string)

// function keyAdderUniqueVal(object, newKey, value) {
// 	console.log(object);

// 	for(let key in object) {
// 		console.log(`current key value: ${object[key]}`);

// 		// screen out any key/values with matching values, so do nothing & return same object
// 		if(value === object[key]) {
// 			console.log(`matching key value: ${object[key]}`);
// 			console.log(key);
// 			console.log(object[key]);
// 			console.log(`${value} is already a value in obj, do nothing`);
// 			console.log(object);
// 			return object;
// 		}
// 	}

// 	// if all key values dont match the input 'value', add the pair outside the 'for key' loop
// 	object[newKey] = value;
// 	console.log(object);
// 	return object;
// }

// let cat = { name: 'Willie', color: 'orange' };
// keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(cat);
// keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }


function keyAdderUniqueVal(object, key, value) {
    for (let key in object) {
        if (object[key] === value) {
            console.log(object[key]);
            return object;
        }
        console.log(object[key] + ' didnt match ' + value);
    }
    console.log(object.count);
    object[key] = value;
        return object;

}

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
