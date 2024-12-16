import React, { useState } from 'react'
import styled from 'styled-components'
import AddTodo from './AddTodo'

const App = () => {
 

  const [listData,setListData]=useState([])
  const AddData=(cal)=>{
    let val=cal.trim()
    if(val){
    setListData((prev)=>[...prev,val])}
}
  return (
    <div>
      <AddTodo listTodo={AddData}/>

      <ul>{listData.map((val,index)=>
      <li key={index} onClick={()=>setListData(()=>listData.filter((ball,ind)=>ind!=index))}>{`${val.charAt(0).toUpperCase()+val.slice(1)}`}</li>)}
      </ul>
    </div>

    
  )
}

const Button = styled.button`
  font-size: 2rem;
`

export default App