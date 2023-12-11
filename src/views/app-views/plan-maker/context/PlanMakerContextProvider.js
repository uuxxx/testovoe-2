import { useImmerReducer } from "use-immer";
import PlanMakerContext from "./planMakerContext";
import { reducer } from "./reducer";

export function PlanMakerContextProvider({children}) {
  const [state, dispatch] = useImmerReducer(reducer, {components: {}, selectedComponent: null})

  return <PlanMakerContext.Provider value={{state, dispatch}}>{children}</PlanMakerContext.Provider>
}