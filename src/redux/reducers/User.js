import {
  CHANGE_EMAIL, CHANGE_NAME, CHANGE_USERNAME, CHANGE_WEBSITE, SET_ALL,
} from 'redux/constants/User';

const initState = {
  name: '',
  username: '',
  email: '',
  website: '',
};

const user = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload,
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case CHANGE_USERNAME: {
      return {
        ...state,
        username: payload,
      };
    }
    case CHANGE_WEBSITE: {
      return {
        ...state,
        website: payload,
      };
    }
    case SET_ALL: {
      return payload;
    }
    default:
      return state;
  }
};

export default user;
