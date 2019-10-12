// // Practice: Stacking Words

// // Create an array that contains the words in the sentence
// let sentence = ["The ","walrus ","danced ","through ","the ","trees ","in ","the ","light ","of ","the ","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp = buildMeUp.concat(theWordArray[i]);
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)







// Practice: Some words are more exciting than others

// let sentence = ["The ","walrus ","danced ","through ","the ","trees ","in ","the ","light ","of ","the ","moon "];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i + 1) % 3 === 0){
//             buildMeUp = buildMeUp.concat(theWordArray[i] + "!");
//         /*
//             If the current word's place (not index) in the array
//             is evenly divisible by 3, add an exclamation point
//             to the end of the word and then concatenate it to
//             `buildMeUp`.

//             Otherwise, just concatenate the word itself.
//          */

//             } else {
//             buildMeUp = buildMeUp.concat(theWordArray[i]);
//             }

//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }

// }

// addExcitement(sentence)











// Practice: Function Arguments
// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// I want to use a question mark
// addExcitement(sentence, "?")
// Example output:

// The

// The walrus

// The walrus danced?

// The walrus danced? through

// The walrus danced? through the

// The walrus danced? through the trees?

// The walrus danced? through the trees? in

// etc..


let sentence = ["The ","walrus ","danced ","through ","the ","trees ","in ","the ","light ","of ","the ","moon "];
let punctuation = "^ "

function addExcitement (theWordArray, punctuation) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0){
            buildMeUp = buildMeUp.concat(theWordArray[i] + punctuation);
            } else {
            buildMeUp = buildMeUp.concat(theWordArray[i]);
            }
        console.log(buildMeUp);
    }

}

addExcitement(sentence, punctuation)
