import React,{useState} from 'react'
import {useDispatch} from"react-redux" ;
import {changeColor} from '../features/theme'

function ChangeColor() {
    const[color,setColor]=useState("")
    const dispatch =useDispatch()
  return (
    <div style={{width:'300px'}}>
         <p style={{display:'inline'}}> select color : 
        <input type="color" onChange={(e)=>{setColor(e.target.value)}} style={{width:'40%'}}/>
        </p><p> selected color : {color}</p>
        <button onClick={()=>{dispatch(changeColor(color))}} style={{backgroundColor:'#b15959',fontSize:'25px',color:'white',border:'0',height:'50px',width:'200px'}}>Change Color</button>
    </div>
  )
}

export default ChangeColor