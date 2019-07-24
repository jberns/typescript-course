import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([11, 13, -5, 0])
const sorter = new Sorter(numbersCollection);
console.log(numbersCollection.data);
sorter.sort();
console.log(numbersCollection.data);