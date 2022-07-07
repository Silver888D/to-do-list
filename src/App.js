import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav'
import ListTitle from './Components/ListTitle'
import AddItem from './Components/AddItem'
import ListItem from './Components/ListItem'

function App() {
  const [items, setItems] = useState([]);
    const [toDoInput, setToDoInput] = useState('');
    
    const handleClick = (index) => {
        let storedItems = [...items]; storedItems.splice(index, 1); setItems(storedItems);};
        
        const handleSubmit = (e) => {e.preventDefault();
            setItems([...items,{toDo: toDoInput},]);
            setToDoInput('');};
  return (
    <div className='App'>
     <div className='Nav'><Nav></Nav></div>
     <div className='Main'>
      <div className='List-Title'><ListTitle></ListTitle></div>
      <div className='Input'><AddItem handleSubmit={handleSubmit} toDoInput={toDoInput}
            setToDoInput={setToDoInput}></AddItem></div>
      <div className='List-Box'>
        <div className='List-Item'>{items.map((item, index) => {
                return (<ListItem toDo={ item.toDo }
                  key={ index } handleClick={ () => handleClick(index)}/>);})}</div>
        
      </div>
     </div>
    </div>
  );
}

export default App;
