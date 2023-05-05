import { useState } from "react";
import "./styles.css"
export default function App(){
  const [newItem, setNewItem]  = useState("");
  const [toDos,setToDos] = useState([]);
  function handleSubmit(e){
    e.preventDefault();
    setToDos((currentToDos)=>{
      return  [
        ...currentToDos,{
          id:crypto.randomUUID,title:newItem,completed:false,
        }
      ]
    })
    setNewItem("");
  }

  function toggleToDo(id,completed){
    setToDos((currentToDos)=>{
      return  currentToDos.map(toDo=>{
        if(toDo.id === id){
          return {...toDo,completed};
        }
        return toDo;
      })
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" />
            <button className="btn">Add Item</button>
        </div>
      </form>
      <h1 className="header">To do list</h1>
       <ul className="list">
          {toDos.map(toDo=>{
            return <li key={toDo.id}>
                <label htmlFor="">
                  <input type="checkbox" onChange={(e)=>{
                    toggleToDo(toDo.id,e.target.checked)
                  }} checked={toDo.completed}/>
                  {toDo.title}
                </label>
                <button className="btn btn-danger">Delete</button>
              </li>
          })}


       </ul>
    </>
  );
}