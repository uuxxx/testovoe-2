import { useContext } from 'react';
import Draggable from 'react-draggable';
import { changePosition, setSelectedComponent } from '../context/actions';
import planMakerContext from '../context/planMakerContext';
import st from './Plan.module.css';

export function PlanItem({ id }) {
  const { state, dispatch } = useContext(planMakerContext);
  const { name, x, y } = state.components[id];

  const isSelected = state.selectedComponent === id;

  const onDrag = (e, data) => {
    const { x, y } = data;
    dispatch(changePosition(id, { x, y }));
  };

  const onMouseDown = () => {
    dispatch(setSelectedComponent(id));
  };

  return (
    <Draggable onMouseDown={onMouseDown} onDrag={onDrag} bounds="parent" grid={[25, 25]} position={{ x, y }}>
      <div className={`${st['plan-item']} ${isSelected ? st.selected : ''}`} style={{ backgroundImage: `url(/img/plan-maker/${name}.png)` }} />
    </Draggable>
  );
}
