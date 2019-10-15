/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {} from './constants';

const initialState = fromJS({
  links: [
    {
      description: 'this is the link desc',
      url: 'http://github.com',
      topicName: 'links',
      id: 'fake',
    },
  ],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linkListContainerReducer;
