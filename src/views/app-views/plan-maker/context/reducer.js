import { ADD_ITEM, CHANGE_POSITION, REMOVE_ITEM, SET_INITIAL_CONFIG, SET_SELECTED_COMPONENT } from "./constants";

export function reducer(state, {type, payload}) {
  switch (type) {
    case ADD_ITEM:
      const id = crypto.randomUUID()
      state.components[id] = {name: payload, x: 0, y: 0}
      state.selectedComponent = id
      return state
    case REMOVE_ITEM:
      delete state.components[state.selectedComponent] 
      state.selectedComponent = null
      return state      
    case CHANGE_POSITION:
      state.components[payload.id].x = payload.x
      state.components[payload.id].y = payload.y
      return state
    case SET_SELECTED_COMPONENT:
      state.selectedComponent = payload
      return state
    case SET_INITIAL_CONFIG: 
      return payload
    default:
      return state;
  }
}