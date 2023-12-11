import st from './ItemSelector.module.css';

export function Item({
  label, name, selected, select,
}) {
  return (
    <div onClick={select} className={`${st.item} ${selected ? st.selected : ''}`}>
      <img className={st.icon} src={`/img/plan-maker/${name}.png`} alt={label} />
      <p className={st.title}>{label}</p>
    </div>
  );
}
