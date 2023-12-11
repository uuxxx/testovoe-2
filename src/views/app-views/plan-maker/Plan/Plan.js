import { Switch } from "antd";
import { useContext, useEffect, useState } from "react";
import planMakerContext from "../context/planMakerContext";
import { PlanItem } from "./PlanItems";
import { removeItem } from "../context/actions";
import st from "./Plan.module.css";

function get400EmptyDivs() {
  return Array(400)
    .fill("")
    .map((_, i) => <div key={i}></div>);
}

export function Plan() {
  const [isMarkupVisible, setIsMarkupVisible] = useState(false);
  const onChangeMarkupVisibility = () => setIsMarkupVisible((prev) => !prev);

  const {state, dispatch} = useContext(planMakerContext);

  useEffect(() => {
    const onKeyDown = (e) => {
      if(e.key === 'Backspace') {
        dispatch(removeItem())
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [dispatch])

  return (
    <div className={st.container}>
      <div className={st.header}>
        <h3>Карта заведения</h3>

        <div className={st.switch}>
          <span>Сетка</span>
          <Switch
            checked={isMarkupVisible}
            onChange={onChangeMarkupVisibility}
          />
        </div>
      </div>
      <div className={st.grid}>
        <div className={`${st["grid-markup"]} ${isMarkupVisible ? st.on : ""}`}>
          {get400EmptyDivs()}
        </div>

        {Object.keys(state.components).map(id => <PlanItem key={id} id={id}/>)}
      </div>
    </div>
  );
}
