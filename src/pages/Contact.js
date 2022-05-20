import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_SURNAME } from '../store/actionTypes';

export default function Contact() {
  //1. State/Hook Area

  let dispatch = useDispatch();

  let store = useSelector(store=>store);

  return (
    <>
      <div>Contact {console.log(store)}</div>
      <h1>Hello {store.user} {store.surname}</h1>
      <button onClick={()=>{ dispatch({ type:CHANGE_SURNAME}) }}>Change Surname</button>
    </>
  )
}
