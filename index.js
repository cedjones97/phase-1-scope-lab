// // Write your solution in this file!



//       *ON ALL NOTES, JUST REMOVE `CONSOLE.LOG` TO RUN CODE*      //


// //  //    Introduction to Scope()
// //  //                               nextNote(executionontexts)

// // 'myFunc' is declared in the global scope and available everywhere in your code:

// function myFunc() {
//     return 42;
//   }
//   // => undefined
//   // 'myVar' is able to reference and invoke 'myFunc' because both are declared in the same scope (the global execution context):
  
//   const myVar = myFunc() * 2;
  
//   // => undefined
  
//   console.log(myVar);
//   // => 84}


//  //                               nextNote(functionScope)
// //
//  function myFunc() {
//       const myVar = 42;
                                  
//     return myVar * 2;
// }
//  // => undefined
                                  
//  myFunc();
//  // => 84
//  //

//  //                                nextNote()

// function myFunc() {
//     const myVar = 42;
//   }
//   // => undefined
  
//   console.log(myVar * 2);
//   // Uncaught ReferenceError: myVar is not defined


//  //                               nextNote(blockScope)

//   if (true) {
//     var myVar = 42;
//   }
  
//   console.log(myVar);
//   // => 42


// //  //                               nextNote()

//   if (true) {
//     const myVar = 42;
  
//     let myOtherVar = 9001;
//   }
  
//   myVar;
//   // Uncaught ReferenceError: myVar is not defined
  
//   myOtherVar;
//   // Uncaught ReferenceError: myOtherVar is not defined


// //  //                               nextNote(globalGotcha)

// firstName = "Ada";

// if (true) {
//     lastName = "Lovelace";
//   }
  
//   console.log(firstName, lastName)



// //  //                               nextNote()

// function bankAccount() {
//     secretPassword = "il0v3pupp135";
  
//     return "bankAccount() function invoked!";
//   }
  
//   console.log(bankAccount());
//   // => "bankAccount() function invoked!"
  
//   console.log(secretPassword);
//   // => "il0v3pupp135"


// //  //                               conclusion()

//(1). Always use const and let to declare variables.

//(2). Keep in mind that every function creates its own scope, 
// and any variables or functions you declare inside of the 
// function will not be available outside of it.

//(3). For Dijkstra's sake, always use const and let to 
// declare variables.


// //    scopeChain()
// //                     nextNote(nestedScopesAndTheScopeChain)

// const globalVar = 1;

// function firstFunc() {
//   const firstVar = 2;

//   return firstVar + globalVar;
// }

// console.log(firstFunc());
// // => 3



// // //  //                               newExample(1)

// const grandma = 60

// function herBoys(){
//     const firstBoy = 23
//     const secondBoy = 25
//     return grandma + firstBoy + secondBoy 

// } console.log(herBoys())


// //  //                               nextNote()

// const globalVar = 1;

// function firstFunc() {
//   const firstVar = 2;

//   function secondFunc() {
//     const secondVar = 3;

//     return secondVar + firstVar + globalVar;
//   }

//   const resultFromSecondFunc = secondFunc();

//   return resultFromSecondFunc;
// }

// console.log(firstFunc());
// // => 6


// // //  //                               newExample(2)

// const grandma = 60

// function herBoys(){
//     const firstBoy = 20
//     const secondBoy = 20

// function herGirls(){
//         const firstGirl = 20
//         const secondGirl = 20

//     return grandma + firstBoy + secondBoy + firstGirl + secondGirl
// }

// const resultFromHerGirls = herGirls()

// return resultFromHerGirls

// } console.log(herBoys())


// //  //                               nextNoteAndExample()

// const fruit = "Apple";

// function first() {
//   const vegetable = "Broccoli";

//   console.log("fruit:", fruit);
//   console.log("vegetable:", vegetable);
// //console.log("legume:", legume);
// }

// //^^^this bracket separates the scopes; remove it and you can
// // call first() within second(). return what you looking for in 
// // second(). Next, return second(). Lastly, call first() for 
// // #ETR to run.


// function second() {
//   const legume = "Peanut";

//   console.log("fruit:", fruit);
//   console.log("legume:", legume);
// //   console.log("vegetable:", vegetable)
// //    return   `${fruit}, ${vegetable}, ${legume}`;
// //     }

// //     return second()

// }
// console.log(first()); 
// // LOG: fruit: Apple
// // LOG: vegetable: Broccoli
// // ERROR: Uncaught ReferenceError: legume is not defined

// console.log(second());
// // LOG: fruit: Apple
// // LOG: legume: Peanut
// // ERROR: Uncaught ReferenceError: vegetable is not defined


// //  //                             nextNote(Identifiers)

// const myVar = "myVar refers to the variable that contains this string";
//=> undefined

 //to call these variables, console.log()

// function myFunc() {
//   return "myFunc refers to this function that returns this string";
// }
// => undefined

// console.log(myVar)
// console.log(myFunc())


// //  //                         nextNote(executionPhase)

// const myVar = 42;

// function myFunc() {
//   const myVar = 9001;

//   return myVar;
// }

// console.log(myFunc());


// //  //                               conclusion()
        
// This topic might feel a bit esoteric, but it's critical to understanding how 
// identifier lookups happen in JavaScript. That is, when the JavaScript engine 
// encounters a variable or function, how it knows what value or function to 
// retrieve from memory. If the engine finds the identifier declared locally,
// it uses that value. However, if it doesn't find a local match, it then looks 
// up (or down, depending on your perspective) the scope chain until it either
// finds a match in an outer scope or throws an Uncaught ReferenceError.


// //  //                               work(scopeLab)

var customerName = "bob"

function upperCaseCustomerName(){
     customerName = customerName.toUpperCase()
}



function setBestCustomer(){
    bestCustomer = "not bob"
   //return bestCustomer
}

function overwriteBestCustomer(){
     bestCustomer = "maybe bob"

    return bestCustomer
}
//console.log(overwriteBestCustomer())

const leastFavoriteCustomer = "Mary"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "John"

    return leastFavoriteCustomer
}
//console.log(changeLeastFavoriteCustomer())