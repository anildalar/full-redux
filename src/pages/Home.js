import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
    //1. State/Hook Area
    let store = useSelector(store=>store)

    return (
      <React.Fragment>  
        <h1>Welcome {store.user}</h1>
        <div>Home {console.log(store.user)}</div>
      </React.Fragment>
    )
}
