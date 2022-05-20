import React from 'react'
import { connect } from 'react-redux'

function About(props) {
  return (
    <> 
      <h2>Your name is {props.user} Surname is {props.surname} {console.log('props ',props)}</h2>
      <div>About</div>
      <button onClick={()=>{ props.changeUserName() }}>Change MyName</button>
    </>
  )
}

let mapStateToProps = (state)=>{
  console.log('state ',state);
  return state;
}

let mapDispatchToProps = (dispatch)=>{
  return {
    //dispatching plain actions
      changeUserName: ()=>{
                            dispatch({ type:'CHANGE_USER_NAME'})
                      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);