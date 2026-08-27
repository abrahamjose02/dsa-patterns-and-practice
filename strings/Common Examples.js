var str = "hello";
let str2 = 'world';
let str3 = `hello world`;

console.log(str.length)

console.log(str.charAt(0))

console.log(str.at(-1))

console.log(str.indexOf("l")) // finding the first occurance of l

console.log(str.lastIndexOf("l")) // finding the last occurance of l

console.log(str2.includes("world"))

console.log(str3.startsWith("hello"))

console.log(str.slice(0,2))

console.log(str.slice(-6))

console.log(str2.substring(2,5))

var str = "a-b-c-d";

console.log(str.replaceAll("-", ""));

str = "a,b,c"

console.log(str.split(","))

str = "hello"

console.log(str.split("").reverse().join(""))