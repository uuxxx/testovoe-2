import { ADD_ITEM, CHANGE_POSITION, REMOVE_ITEM, SET_INITIAL_CONFIG, SET_SELECTED_COMPONENT } from "./constants"

export const addItem = (name) => {
  return {
    type: ADD_ITEM,
    payload: name
  }
}

export const changePosition = (id, coords) => {
  const {x, y} = coords
  return {
    type: CHANGE_POSITION,
    payload: {id, x, y}
  }
}

export const removeItem = () => {
  return {
    type: REMOVE_ITEM,
  }
}

export const setSelectedComponent = (id) => {
  return {
    type: SET_SELECTED_COMPONENT,
    payload: id
  }
}

export const setInitialConfig = (state) => {
  return {
    type: SET_INITIAL_CONFIG,
    payload: state
  }
}