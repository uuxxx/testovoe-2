import {
  ADD_ITEM, CHANGE_POSITION, REMOVE_ITEM, SET_INITIAL_CONFIG, SET_SELECTED_COMPONENT,
} from './constants';

export const addItem = (name) => ({
  type: ADD_ITEM,
  payload: name,
});

export const changePosition = (id, coords) => {
  const { x, y } = coords;
  return {
    type: CHANGE_POSITION,
    payload: { id, x, y },
  };
};

export const removeItem = () => ({
  type: REMOVE_ITEM,
});

export const setSelectedComponent = (id) => ({
  type: SET_SELECTED_COMPONENT,
  payload: id,
});

export const setInitialConfig = (state) => ({
  type: SET_INITIAL_CONFIG,
  payload: state,
});
