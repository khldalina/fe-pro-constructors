import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';

const jonny = new Author('Jonny', new Date(1944, 1, 1));
const billy = new Author('billy', new Date(1944, 1, 1));
const mike = new Author('mike', new Date(1944, 1, 1));
const molly = new Author('molly', new Date(1944, 1, 1));
const sam = new Author('sam', new Date(1944, 1, 1));
const tom = new Author('tom', new Date(1944, 1, 1));
const ted = new Author('ted', new Date(1944, 1, 1));

console.log(jonny);
console.log(billy);
const authors = [jonny, billy, mike, molly ];
const authors2 = [ted, tom, mike, sam ];



let alina = new User('Alina', new Date());
console.log(alina);
let frog = new User('frog', new Date());
let cat = new User('cat', new Date());
let redd = new User('redd', new Date());
let ben = new User('ben', new Date());

alina.addToFriends(frog);
alina.addToFriends(redd);
alina.addToFriends(cat);
frog.addToFriends(redd);
ben.addToFriends(redd);
redd.addToFriends(cat);

console.log(frog);
console.log(alina);
console.log(redd);
console.log(cat);

let book1 = new Book('book1', 1256, frog, authors);
let book2 = new Book('book2', 1256, cat, authors);
let book3 = new Book('book3', 1256, redd, authors2);
let book4 = new Book('book4', 1256, frog, authors);
let book5 = new Book('book5', 1256, redd, authors2);
let book6 = new Book('book6', 1256, redd, authors);
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);

alina.likeBook(book4);
alina.likeBook(book3);
alina.likeBook(book1);

frog.likeBook(book1);
frog.likeBook(book4);
frog.likeBook(book6);
redd.likeBook(book1);
frog.unlikeBook(book1);
console.log(book1);
console.log(frog.friendsNames);
console.log(frog.likeBook);
console.log(frog.likes);
console.log(frog.likedBooks);
console.log(frog.publishedBooks);
console.log(redd.publishedBooks);
console.log(alina.publishedBooks);


const book1984 = new Book('1984', new Date(1949, 5, 8), redd, authors2);
console.log(book1984);
console.log(book1984.suggestedPublicators);
console.log(book1.suggestedPublicators);
console.log(book4.suggestedPublicators);
console.log(book2.suggestedPublicators);
console.log(book3.suggestedBooks);
console.log(book5.suggestedBooks);
