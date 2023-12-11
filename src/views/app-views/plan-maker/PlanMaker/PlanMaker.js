import { PlanMakerContextProvider } from "../context/PlanMakerContextProvider";
import { ItemSelector } from "../ItemSelector/ItemSelector";
import { Plan } from "../Plan/Plan";
import st from "./PlanMaker.module.css";

export function PlanMaker() {
  return (
    <PlanMakerContextProvider>
      <div className={st.container}>
        <ItemSelector />
        <Plan />
      </div>
    </PlanMakerContextProvider>
  );
}
