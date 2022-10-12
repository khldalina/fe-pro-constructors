import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
    this.name = name;
    this.date = date;
    this.myBooks = [];
    this.friends = [];
    this.likes = [];

    this.addToFriends = function (friend){
        if (this.friends.includes(friend)) {
            this.friends = this.friends.filter((user) => user !== friend);
            friend.friends = this.friends.filter((user) => user !== this);
        }else {
            this.friends.push(friend);
            friend.friends.push(this);
        }
    };

    this.removeFriend = this.addToFriends;
    this.likeBook = function (book){
        if (this.likes.includes(book)) {
            this.likes = this.likes.filter((user) => user !== book);
            book.likes = this.likes.filter((user) => user !== this);
        }else {
            this.friends.push(book);
            book.friends.push(this);
        }
    }
    this.unlikeBook = this.likeBook;

    Object.defineProperty(this ,'friendNames' , {
        get() {
            return this.friends.map(({name}) => name).join(',');
        }
      });
}

