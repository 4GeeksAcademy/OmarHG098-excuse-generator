/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Something changed!");
  document.querySelector("#excuse").innerHTML = excusa();
};
let excusa = () => {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  return (
    who[whoRandom] + action[actionRandom] + what[whatRandom] + when[whenRandom]
  );
};
