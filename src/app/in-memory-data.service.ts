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
      { id: 7, author: 'Leslie Kaminoff, Amy Matthews ', date: '2014', title: 'Yoga Anatomy', src: 'http://www.humankinetics.com/AcuCustom/Sitename/DAM/128/9781492504290_dflt.jpg'},
      { id: 8, author: 'Emily Blunt', date: 'October 2017', title: 'The Girl On The Train', src: 'https://1645110239.rsc.cdn77.org/image/f660x940/q80/mm/been/movies16108/posters/the-girl-on-the-train-1.20170225023010.jpg'},
      { id: 9, author: 'Chloe Benjamin', date: 'September 2018', title: 'The Immortalists', src: 'https://prodimage.images-bn.com/pimages/9780735213180_p0_v4_s550x406.jpg'}
    ];
    return {books};
  }
}