import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';

const user = new User('John', new Date(2020, 1, 1));
const anotherUser = new User('Jerry', new Date(2020, 1, 1));
const newUser = new User('Mike', new Date(2020, 1, 1));

const jonny = new Author('Jonny', new Date(1944, 1, 1));
const billy = new Author('Billy', new Date(1944, 1, 1));
const authors = [jonny, billy];

const book1984 = new Book('1984', new Date(1949, 5, 8), user, authors);
new Book('my favorite book', new Date(1949, 5, 8), newUser, authors);
new Book('shit book', new Date(1949, 5, 8), anotherUser, authors);
console.log(book1984.suggestedPublicators)