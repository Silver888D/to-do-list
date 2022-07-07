import { useState } from 'react';
import checked from '../images/checked.svg';
import unchecked from '../images/unchecked.svg';

const ListItem = ({ toDo, handleClick}) => {
    const [due, setDue] = useState(false);
    return (<div>
        {due?
        (<h2><img src={checked} alt='checked'></img>{toDo}</h2>)
        :
        (<h2><img src={unchecked} alt='unchecked'></img>{toDo}</h2>)}
        <button onClick={handleClick}>Remove</button>
        <button onClick={() => setDue(!due)}>Done</button>
        </div>);
        };

export default ListItem