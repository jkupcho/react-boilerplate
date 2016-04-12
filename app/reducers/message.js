import { DISPATCH_MESSAGE_UPDATE } from '../actions/message';

export default (state = 'hello world!!!', action) => {
  switch (action.type) {
    case DISPATCH_MESSAGE_UPDATE:
      return action.message;
    default:
      return state;
  }
}