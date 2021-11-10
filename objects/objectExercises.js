let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

//exercise 4
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objkeys = Object.keys(obj)

let uppercase = objkeys.map(key => key.toUpperCase())
console.log(uppercase)
console.log(objkeys)

//exercise 5
//Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};
//

let myObj = Object.create(myProtoObj);
console.log(myObj)
myObj.qux = 3
console.log(myProtoObj)
console.log(myObj)

//ex 8
//Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(source, keys) {
  let resObj = {}
  if (keys) { 
    keys.forEach((key) => { 
      resObj[key] = source[key] })
      return resObj
    } else
    return Object.assign(resObj, source)
    
  }



let newObj = copyObj(objToCopy);
console.log("no keys", newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);       // => { bar: 2 }

//ex 11
// replace 6 with 606
let obj11 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj11.bar[3].xyz = 606
console.log(obj11)