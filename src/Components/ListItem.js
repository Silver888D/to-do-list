
import checked from '../images/checked.svg';
import unchecked from '../images/unchecked.svg';

const ListItem = ({ toDo, handleClick, index, setItems, items }) => {
    const doneHandler = () => {let doneToDos = [...items];
        doneToDos[index].done = !doneToDos[index].done;
        setItems(doneToDos);}
    return (<div>
        {toDo.done ?
        (<h2 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
        <img style={{backgroundColor: 'green'}} src={checked} alt='checked'/>{toDo.toDo}</h2>)
        :
        (<h2><img src={unchecked} alt='unchecked'/>{toDo.toDo}</h2>)}
        <button onClick={()=> handleClick(index)}>Remove</button>
        <button onClick={doneHandler}>Done</button>
        </div>);
        };

export default ListItem