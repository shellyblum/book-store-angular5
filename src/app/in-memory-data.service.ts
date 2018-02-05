import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, author: 'Adam Freeman', date: ' March 2014', title: 'Pro AngularJS', src: '../assets/angularjs.jpg' },
      { id: 2, author: 'Kyle Simpson', date: 'May 2000', title: 'You Don\'t Know JS', src: '../assets/ydkjs.jpg' },
      { id: 3, author: 'Bonnie Eisenman', date: 'December 2015', title: 'Learning React Native', src: '../assets/react-native.jpg' },
      { id: 4, author: 'Simon Holmes', date: 'November 2015', title: 'Getting MEAN', src: '../assets/mean.jpg' },
      { id: 5, author: 'Nathan Rozentals', date: 'April 2015', title: 'Mastering TypeScript', src: '../assets/typescript.jpg' },
      { id: 6, author: 'Matt Frisbie', date: '2017', title: 'Angular 2 Cookbook', src: '../assets/angular2.jpg' },
      { id: 7, author: 'Leslie Kaminoff, Amy Matthews ', date: '2014', title: 'Yoga Anatomy', src: '../assets/yoga.jpg'},
      { id: 8, author: 'Emily Blunt', date: 'October 2017', title: 'The Girl On The Train', src: '../assets/girl.jpg'},
      { id: 9, author: 'Chloe Benjamin', date: 'September 2018', title: 'The Immortalists', src: '../assets/immortals.jpg'}
    ];
    return {books};
  }
}