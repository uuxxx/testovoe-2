import { useContext, useState, useRef } from 'react';
import { Button } from 'antd';
import { addItem, setInitialConfig } from '../context/actions';
import planMakerContext from '../context/planMakerContext';
import { download } from '../download';
import { Item } from "./Item";
import st from "./ItemSelector.module.css";

const listOfItems = [
  { label: "Стол на 5 мест", name: 'table-5'},
  { label: "Стол круглый на 4 места", name: 'table-4'},
  { label: "Стол на 2 места", name: 'table-2'},
];

export function ItemSelector() {
  const {dispatch, state} = useContext(planMakerContext)
  const [selectedItem, setSelectedItem] = useState(null)
  const inputRef = useRef(null)

  const addComponent = () => {
    dispatch(addItem(listOfItems[selectedItem].name))
  }

  const saveConfig = () => {
    download('config.json', JSON.stringify(state))
  }

  const onGetConfigClick = () => {
    inputRef.current?.click()
  }

  const onInputChange = (e) => {
    const file = e.target.files[0]
    if(!file?.type.includes('json')) return;
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(file);
  }

  const onReaderLoad = (event) => {
    const res = JSON.parse(event.target.result);
    // Validation :)
    if(!('components' in res) || !('selectedComponent' in res)) {
      return;
    }
    dispatch(setInitialConfig(res));
  }

  return (
    <div className={st.container}>
      <div className={st["item-list"]}>
        {listOfItems.map((props, i) => {
          const select = () => setSelectedItem(i)
          return <Item key={i} select={select} selected={i === selectedItem} setSelectedItem={setSelectedItem} {...props} />
        })}
      </div>
      <Button onClick={addComponent} type='primary' disabled={selectedItem === null}>Добавить</Button>
      <div className={st['config-btns']}>
        <Button onClick={saveConfig} type='primary'>Сохранить конфигурацию</Button>  
        <Button onClick={onGetConfigClick} type='primary'>
          <input onChange={onInputChange} className={st.hidden} type='file' ref={inputRef}/>
          Загрузить конфигурацию
        </Button>
      </div>
    </div>
  );
}
