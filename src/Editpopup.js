
import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {editTodo} from './Slices/todoSlice'
import {useDispatch} from 'react-redux'

function Editpopup({show,onHide,editaskValue,editaskId,seteditaskValue}) {
  const dispatch=useDispatch()
  const editask=(e)=>{
    e.preventDefault();
    dispatch(editTodo({task:editaskValue,id:editaskId}))
    onHide();
  }
  return (
    <Modal.Dialog  >
      
      <Modal.Header show={show} onHide={onHide}  closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input type="text" value={editaskValue} onChange={(e)=>seteditaskValue(e.target.value)}/>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={editask}>Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Editpopup;