/**
 * @jest-environment jsdom
 */

import { apiMock, commentsTest } from '../_mocks_/CommentCounterTest.js';

describe('Add a new comment to API', () => {
  test('Add a new comment', () => {
    expect(apiMock(2, 'userName', 'comment').length).toBe(3);
  });

  test('Get number of comments', () => {
    const commentsArr = [{
      id: '1',
      name: 'Riyaz',
      userComment: 'add new comment',
    }, {
      id: '2',
      name: 'Kidist',
      userComment: 'add new comment',
    },
    ];
    expect(commentsTest(commentsArr).length).toBe(2);
  });
});