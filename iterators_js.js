const friends = ['Nicole', 'Sarah', 'Christ', 'Bryan', 'Rina']

for(let i = 0; i < friends.length; i++){
  console.log('Hello, ' + friends[i] + '!');
}

console.log("-------------")

friends.forEach((friend) => {
    console.log('Hello, ' + friend + '!');
});

console.log("-------------")

const foods = ['pizza', 'tacos', 'chicken', 'pasta']

foods.forEach((food) => {
  console.log("Don't eat " + food + "!")
});


const foods1 = [
  {name: 'Pizza', level: 'very'},
  {name: 'Tacos', level: 'mostly'},
  {name: 'Chicken', level: 'not very'}
]

console.log("-------------")

foods1.forEach((food1) => {
  console.log(food1.name + ' is ' + food1.level + ' delicious.')
});

// map

console.log("-------------")

const names = ["tim thompson", "ilias iliad", "elie ellison", "markus mourning"];
const cased = []
for (let i = 0; i < names.length; i++){
  cased.push(names[i].toUpperCase())
  //console.log(names[i].toUpperCase())
}
console.log(cased)


const cased1 = names.map((name) => {
  return name.toUpperCase()
});

console.log(cased1)

console.log("-------------")

const splitName = (fullName) => {
  return {
    firstName: fullName.split(" ")[0],
    lastName: fullName.split(" ")[1]
  }
}

const properName = names.map(splitName);

console.log(properName);

console.log("-------------")

const names1 = ["tim toby thompson", "ilias iliad", "elie ellison", "markus mary mourning"];

const splitName1 = (fullName1) => {
  const nameArr = fullName1.split(" ")

  if(nameArr.length >= 3) {
    return {
      firstName: nameArr[0],
      middleName: nameArr[1],
      lastName: nameArr[2]
    }
  } else {
    return {
      firstName: nameArr[0],
      lastName: nameArr[1]
    }
  }
}

const nameObj = names1.map(splitName1)

console.log(nameObj);

console.log("-------------")
const intNums = [0, 1, 2, 3, 4, 5]

const strNums = intNums.map((num) => {
  return num.toString();
})
console.log(strNums);


// filter

console.log("-----FILTER--------")
const names_filter = ["tim", "ilias", "elie", "markus"];

const isEven = function(name) {
  return name.length % 2 === 0;
}
const isOdd = (name) => {
  return name.length % 2 !== 0;
}
console.log("TESTING!!!--" + isOdd('TESTING') );
// console.log(isOdd('test'));
const evenLengthNames = names_filter.filter(isEven);
const oddLengthNames = names_filter.filter(isOdd);

console.log(evenLengthNames);
console.log(oddLengthNames);

console.log("-----FILTER--------")
// Use filter to return an array of dogs.

const pets = [
  {name: "fluffy", age: 2, type: "cat"},
  {name: "fido", age: 1, type: "dog"},
  {name: "nelly", age: 64, type: "parrot"},
  {name: "benedict", age: 1, type: "sea cucumber"},
  {name: "spot", age: 10, type: "dog"},
  {name: "magic", age: 9, type: "cat"}
]

const isDog = function(pet) {
  return pet.type === "dog";
}

const dogs = pets.filter(isDog);

console.log(dogs);


// reduce
console.log("-----REDUCE--------")

const nums = [1,2,3,4];
const add = (total, newNum) => {
  return total + newNum ;
};

// const sum = nums.reduce((total, newNum) => {
//   return total + newNum ;
// });
const sum = nums.reduce(add, 10);
console.log(sum);
