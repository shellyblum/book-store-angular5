import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, author: 'Adam Freeman', date: ' March 2014', title: 'Pro AngularJS', src: 'https://blog.mariusschulz.com/content/images/pro_angularjs.jpg' },
      { id: 2, author: 'Kyle Simpson', date: 'May 2000', title: 'You Don\'t Know JS', src: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/up%20%26%20going/cover.jpg' },
      { id: 3, author: 'Bonnie Eisenman', date: 'December 2015', title: 'Learning React Native', src: 'https://images-na.ssl-images-amazon.com/images/I/514Oh3JZ2mL._SX383_BO1,204,203,200_.jpg' },
      { id: 4, author: 'Simon Holmes', date: 'November 2015', title: 'Getting MEAN', src: 'https://images-na.ssl-images-amazon.com/images/I/51ZwZCpn5dL._SX392_BO1,204,203,200_.jpg' },
      { id: 5, author: 'Nathan Rozentals', date: 'April 2015', title: 'Mastering TypeScript', src: 'https://images-na.ssl-images-amazon.com/images/I/512hCH-UDoL._SX258_BO1,204,203,200_.jpg' },
      { id: 6, author: 'Matt Frisbie', date: '2017', title: 'Angular 2 Cookbook', src: 'https://images-na.ssl-images-amazon.com/images/I/51DtZXPd5BL._SX258_BO1,204,203,200_.jpg' },
      { id: 7, author: 'Addy Osmani', date: '2015', title: 'LEARNING JAVASCRIPT DESIGN PATTERNS', src: 'https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg'},
      { id: 8, author: 'Marijn Haverbeke', date: 'December 4, 2018', title: 'Eloquent JavaScript', src: 'https://images-na.ssl-images-amazon.com/images/I/51I9naPg55L._SX376_BO1,204,203,200_.jpg'},
      { id: 9, author: 'Garann Means', date: 'January 2012', title: 'Node for Front-End Developers', src: 'https://covers.oreillystatic.com/images/0636920023258/lrg.jpg'}
    ];
    return {books};
  }
}