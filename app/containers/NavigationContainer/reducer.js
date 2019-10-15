/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { REQUEST_TOPICS_SUCCEEDED, SELECT_TOPIC } from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      description: 'links to useful open source libraries',
    },
    {
      name: 'apps',
      description: 'links to new and exciting apps',
    },
    {
      name: 'news',
      description: 'links to programming related news articles',
    },
  ],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);

    case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic);

    default:
      return state;
  }
}

export default navigationContainerReducer;
