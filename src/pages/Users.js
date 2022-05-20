import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeMyName } from '../store/actions';
import { CHANGE_USER_NAME } from '../store/actionTypes';

export default function Users() {
    //1. State/Hook Area
    const [usr,setUsr] = useState([]);
    const [usrData,setUsrData] = useState([{name:'Sunil'}]) 
    const [show,setShow] = useState(false);

    let store = useSelector(store=>store);
    let dispatch = useDispatch();

    useEffect(()=>{
        console.log('Page Loaded Successfully');
        //getUsers();
        
       
    },[]);
    //2. Function defination
    let handleShow = ()=>{
        getUsers();
        setShow(true);
    }
    let handleClose = ()=>{
        setShow(false);
        //alert('handleClose');
    }
    let getUsers = async()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>response.json())
        .then(response=>{
            // console.log(response);
            setUsr(response);
        })
        .catch((error)=>{
            console.log(error);
        });

    }
    //3. Return Statement 
    return (
        <>
            
            <div>Users</div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        usr.length > 0 &&
                        usr.map((cv,idx,arr)=>{
                            return (
                                        <p key={idx}>
                                            {console.log(cv)}
                                            <a href="#">{cv.name}</a>
                                        </p>
                                    );
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <button className="btn btn-success" onClick={handleShow} >Get User</button>
            <button onClick={()=>{ dispatch(changeMyName()) }}>Change My Name (Async Actions)</button>
            <button onClick={()=>{ dispatch({type:CHANGE_USER_NAME}) }}> Change My Name2 (Normal Actions)</button>
            <h1>My name is {store.user} {store.surname} </h1>
            {console.log(store)}
        </>
    )
}
