import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoSelector } from "./Slices/todoSlice";
import { addTodo, deleteTodo } from "./Slices/todoSlice";
import Editpopup from "./Editpopup";

const App = () => {
  const [editComp, seteditComp] = useState(false)
  const [inpt, setInpt] = useState('')
  const dispatch = useDispatch();
  const tasks = useSelector(todoSelector)
  
  const [editaskValue,seteditaskValue] =useState('');
  const [editaskId,seteditaskId]=useState(null)

  const editData = (e, id,value) => {
    e.preventDefault();
    console.log("testing")
    seteditaskValue(value)
    seteditaskId(id)
    seteditComp(true)
  }

  const deleteItem = (e, id) => {
    e.preventDefault();
    dispatch(deleteTodo({ id: id }))
  }

  return (
    <>
      <input
        type='text'
        value={inpt}
        onChange={(e) => { setInpt(e.target.value) }}
        name='taskInput'
        className="inputbox"
      />
      <button onClick={() => {
        dispatch(addTodo({ task: inpt }))
        setInpt('')
      }}>Submit</button>

      {
        tasks.map((item, index) =>

          <>

            <div key={item.id}>{index + 1} {item?.task}
              <button onClick={(e) => editData(e, item?.id, item.task)}>edit</button>
              <button onClick={(e) => deleteItem(e, item.id)}>delete</button>
            </div>
          </>


        )
      }

      {
        editComp &&
        <Editpopup
          show={editComp}
          onHide={() => seteditComp(false)}
          editaskId={editaskId}
          editaskValue={editaskValue}
          seteditaskValue={seteditaskValue}         
        />
      }
    </>
  )
}


export default App;