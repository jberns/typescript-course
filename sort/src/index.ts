import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([11, 50, -5, 0])
// const sorter = new Sorter(numbersCollection);

// sorter.print();
// sorter.sort();
// sorter.print();

const charactersCollection = new CharactersCollection('hello worl');
const sorter = new Sorter(charactersCollection);

console.log(charactersCollection.data);
sorter.sort();
console.log(charactersCollection.data);