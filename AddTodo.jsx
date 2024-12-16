import React,{useState} from 'react'


const AddTodo=({listTodo})=>{
  const [data,setData]=useState('');
  

  return(
    <div style={{backgroundColor:"Grey",width:'50%',textAlign:'center',margin:'auto',marginTop:'25%'}}>
    <input type="text" value={data} onChange={(e)=>setData(e.target.value)} style={{height:'20px',marginTop:'5px',marginBottom:'5px'}}/>
    
    <button className='Add' style={{marginBottom:'5px',width:'100px',borderRadius:'10px'}} onClick={()=>{listTodo(data)
    setData('')
       }   } >ADD</button>
    </div>
  )
}
export default AddTodo;