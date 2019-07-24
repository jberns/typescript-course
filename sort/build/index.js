"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([11, 50, -5, 0])
// const sorter = new Sorter(numbersCollection);
// sorter.print();
// sorter.sort();
// sorter.print();
var charactersCollection = new CharactersCollection_1.CharactersCollection('hello worl');
var sorter = new Sorter_1.Sorter(charactersCollection);
console.log(charactersCollection.data);
sorter.sort();
console.log(charactersCollection.data);
