
const name = "aarti"
const repoCount = 50

// console.log(name + repoCount + " Value");  //old syntax not using yet

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // go with these

const gameName = new String('aarti-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  //not valid negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // we can add negative value 
console.log(anotherString);

const newStringOne = "   aarti    "
console.log(newStringOne);
console.log(newStringOne.trim());  // removing starting and ending space

const url = "https://aarti.com/aarti%20choudhary"

console.log(url.replace('%20', '-'))   //replacing %20 to -

console.log(url.includes('sundar'))  //return type is boolean

console.log(gameName.split('-'));   
