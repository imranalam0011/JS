//1. Ways to print in Javascript
// alert("hi");
// document.write("This is document write");

//2. Javascript console API

// document.write("This is document write");
// console.log("Hello World", 4 + 6);
// console.warn("This is warning");
// console.error("This is an error");

//3. Javascript Variables

// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM - Document Object Modal
let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");

// console.log(elemClass);
// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName("div");
// console.log(tn);

// createdElement = document.createElement("p");
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement("b");
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

// // Selecting Using Query
// sel = document.querySelector(".container");
// console.log(sel);

// sel = document.querySelectorAll(".container");
// console.log(sel);

// function clicked() {
//   console.log("The button was clicked");
// }
// window.onload = function () {
//   console.log("The document was loaded");
// };

// // Events in Javascript
// firstContainer.addEventListener("click", function () {

//   console.log("clicked on container");
// });

// firstContainer.addEventListener("mouseover", function () {
//   console.log("Mouse on container");
// });

// firstContainer.addEventListener("mouseout", function () {
//   console.log("Mouse out of container");
// });

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseup", function () {
//   document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//   console.log("Mouse up when clicked on container");
// });

// firstContainer.addEventListener("mousedown", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b> We have clicked </b>";
//   console.log("Mouse down when clicked on container");
// });

// Arrow Function
// function summ(a, b) {
//   return a + b;
// }

// summ = (a, b) => {
//   return a + b;
// };

// logkaro = () => {
//   console.log("I am your log");
// };
// // SetTimeout and setinterval
// clr = setTimeout(logkaro, 2000);
// // clr = setInterval(logkaro, 2000);

// JavaScript localstring
// localStorage.setItem("name", "Imran");
// localStorage;
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();

// obj = { name: "Imran", length: 1, a: { this: 'tha"t' } };
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"Imran","length":1,"a":{"this":"that"}}`);
// console.log(parsed);
