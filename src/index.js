import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Arrow Function</h1>, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

const newNumber = numbers.map(x => x * x);
console.log(newNumber);
