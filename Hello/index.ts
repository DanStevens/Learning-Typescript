console.log('Hello, friend!');

var myString : string; 
var myNumber : number; 
var myBoolean : boolean; 
myString = "1"; 
myNumber = 1; 
myBoolean = true; 

myString = myNumber.toString(); 
myBoolean = myString === "test"; 
myNumber = myBoolean ? 1 : 0;

console.log('myString', myString);
console.log('myBoolean', myBoolean);
console.log('myNumber', myNumber);

var complexType: any = { name: "myName", id: 1 }; 
complexType = { name : "extraproperty", id : 2, extraProp: true };

const enum DoorState { 
  Open, 
  Closed, 
  Ajar 
}

var openDoor = DoorState.Open; 
console.log(`openDoor is: ${openDoor}`); 

let globalString!: string; 
 
setGlobalString(); 
 
console.log(`globalString : ${globalString}`); 
 
function setGlobalString() { 
    globalString = "this has been set"; 
} 

function doSomethingWithACallback(
  initialText: string,
  callback: (s: string) => void
) {
  console.log(`Inside doSomethingWithCallback(${initialText})`);
  callback(initialText);
}

doSomethingWithACallback("hi", (s) => console.log("s", s));

let firstObj = { id: 1, name: "firstObj"};
let secondObj = { ...firstObj };
let thirdObj = {job: "object"};
let forthObj = { ...firstObj, ...thirdObj};