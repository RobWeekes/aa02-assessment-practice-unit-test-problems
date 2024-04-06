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


function keyAdderUniqueVal(object, newKey, value) {
	console.log(object);

	for(key in object) {
		console.log(`current key value: ${object[key]}`);

		// screen out any key/values with matching values, so do nothing & return same object
		if(value === (object[key])) {
			console.log(`matching key value: ${object[key]}`);
			console.log(key);
			console.log(object[key]);
			console.log(`${value} is already a value in obj, do nothing`);
			console.log(object);
			return object;
		}
	}

	// if all key values dont match the input 'value', add the pair outside the 'for key' loop
	object[newKey] = value;
	console.log(object);
	return object;
}

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat);
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
