import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState('')
  const [itemList, setItemList] = useState([])

  const onChangeHandler = (e) => {
      setCurrentItem(e.target.value)
  }

  const addItemToList = () => {

    if (currentItem !== '') {
      setItemList([...itemList, { item: currentItem, key: Date.now() }])
    }

    setCurrentItem('')
   }
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Todo App</h1>
        <div className="wrapper">
          <div className="input-wrapper">
            <input type="text" placeholder='Write a todo' value={currentItem} onKeyDown={onChangeHandler} onChange={onChangeHandler} />
            <button onClick={addItemToList}>Add</button>
          </div>
          <List itemList={itemList} updateList={setItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
