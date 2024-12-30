// chapter no 14-16
// Question no 1

// let studentNames = [];

// Question no 2

// var studentNames = new Array();

// Question no 3

// let stringsArray;
// stringsArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// document.write(stringsArray);

// Question no 4

// let emptyArray = new Array(5);
// console.log(emptyArray);

// let singleElementArray = [5];
// console.log(singleElementArray);

// Question no 5

// let booleanArray = new Array(5).fill(false);
// console.log(booleanArray);

// Question no 6

// let mixedArray = [42, "Hello, world!", true, { name: "Aman", age: 18 }, [1, 2, 3], null, undefined];
// document.write(mixedArray);

// Question no 7

// const qualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M.Phil.",
//     "PhD"
// ];
// const listElement = document.getElementById("qualificationsList");
// qualifications.forEach(function(qualification) {
//     const listItem = document.createElement("li");
//     listItem.textContent = qualification;
//     listElement.appendChild(listItem);
// });

// Question no 8

// const studentNames = ["Alice", "Bob", "Charlie"];

//         const studentScores = [450, 380, 410];

//         const totalMarks = 500;
//         function calculatePercentage(score, total) {
//             return (score / total) * 100;
//         }
//         const resultsDiv = document.getElementById("results");

//         for (let i = 0; i < studentNames.length; i++) {
//             const name = studentNames[i];
//             const score = studentScores[i];
//             const percentage = calculatePercentage(score, totalMarks).toFixed(2);

//             const resultParagraph = document.createElement("p");
//             resultParagraph.textContent = `Student: ${name}, Score: ${score}, Percentage: ${percentage}%`;

//             resultsDiv.appendChild(resultParagraph);
//         }

// Question no 9

// a
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo"];  
// let userColor = prompt("What color do you want to add to the beginning of the array?");  
// colors.unshift(userColor);  
// document.write(colors);

// b
// let colors = ["Red", "Green", "Blue"];

// document.getElementById("colorArray").textContent = "Current colors: " + colors.join(", ");

// let newColor = prompt("Enter a color to add to the array:");

// if (newColor) {
// colors.push(newColor);

// document.getElementById("colorArray").textContent = "Updated colors: " + colors.join(", ");
// } else {
// alert("No color entered. The array remains unchanged.");
// }
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo"];

// c
// let colors = ["Red", "Green", "Blue"];
// document.getElementById("colorArray").textContent = "Current colors: " + colors.join(", ");
// colors.unshift("Yellow", "Purple");
// document.getElementById("colorArray").textContent = "Updated colors: " + colors.join(", ");

// d
// let colors = ["Red", "Green", "Blue"];
// document.getElementById("colorArray
// ").textContent = "Current colors: " + colors.join(", ");
// colors.shift();
// document.getElementById("colorArray
// ").textContent = "Updated colors: " + colors.join(", ");

// e
// let colors = ["Red", "Green", "Blue"];
// document.getElementById("colorArray
// ").textContent = "Current colors: " + colors.join(", ");
// colors.pop();
// document.getElementById("colorArray
// ").textContent = "Updated colors: " + colors.join(", ");

// f
// let colors = ["Red", "Green", "Blue"];
// document.getElementById("colorArray
// ").textContent = "Current colors: " + colors.join(", ");
// let index = prompt("Enter the index at which you want to add a color:");
// let newColor = prompt("Enter the color you want to add:");
// colors.splice(index, 0, newColor);
// document.getElementById("colorArray
// ").textContent = "Updated colors: " + colors.join(", ");

// g
// let colors = ["Red", "Green", "Blue"];
// document.getElementById("colorArray
// ").textContent = "Current colors: " + colors.join(", ");
// let index = prompt("Enter the index at which you want to delete a color:");
// let noOfColors = prompt("Enter the number of colors you want to delete:");
// colors.splice(index, noOfColors);
// document.getElementById("colorArray
// ").textContent = "Updated colors: " + colors.join(", ");

// Question no 10

// let studentScores = [85, 92, 78, 90, 88];
// studentScores.sort((a, b) => a - b);
// document.write(studentScores);


// Question no 11

// let cities = ["karachi","lahore","islamabad","quetta","peshawar"];
// let selectthecities = cities.slice(2,4);
// console.log(selectthecities);

// Question no 12

// var array = ["This","is","my","cat"]
// var string = array.join("");
// console.log(string);

// var array = ["This","is","my","cat"]
// var slice = array.join("");
// console.log(array);

// Question no 13

// var array = ["Keyboard","Mouse","Printer","Monitor"];
// document.write("<h1> out: <br>" + array[0] + "<br>");
// document.write("Out: <br>" + array[1] + "<br>");
// document.write("Out: <br> " + array[2] + "<br>");
// document.write("Out:<br> " + array[3] + "<br>");


// Question no 14

// var array = ["Keyboard","Mouse","Printer","Monitor"];
// document.write("<h1> out: <br>" + array[3] + "<br>");
// document.write("<h1> out: <br>" + array[2] + "<br>");
// document.write("<h1> out: <br>" + array[1] + "<br>");
// document.write("<h1> out: <br>" + array[0] + "<br>");



// Question no 15
