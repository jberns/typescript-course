"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([11, 13, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
console.log(numbersCollection.data);
sorter.sort();
console.log(numbersCollection.data);
