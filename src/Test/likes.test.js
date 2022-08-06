
/**
 * @jest-environment jsdom
 */

 import { apiMock2, countertests } from '../_mocks_/likes.js';

 describe('Add a new city', () => {
   test('Add a new city', () => {
     expect(apiMock2(3, 'city').length).toBe(3);
   });
 
   test('Get number of city', () => {
     const cities = [{
       id: '1',
       name: 'Madrid',
     }, {
       id: '2',
       name: 'Berlin',
     },
     {
       id: '3',
       name: 'Sydney',
     },
     {
       id: '4',
       name: 'Tokyo',
     },
     ];
     expect(countertests(cities).length).toBe(4);
   });
 });
 