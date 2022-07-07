import { useState } from "react";

const AddItem = ({handleSubmit,toDoInput,setToDoInput}) => {
    return (
    <form onSubmit={handleSubmit}><label>
        New To Do 
        <input id="Input" type="text" value={toDoInput} onChange={(e) => setToDoInput(e.target.value)}/>
        </label>
    <input type="submit"/>
    </form>);
    };

export default AddItem