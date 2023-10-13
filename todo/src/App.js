import React, { useState } from 'react'
import Input from './todofunction/Input'
import Box from './todofunction/Box'
const App = () => {
 const [todos, todoset]= useState([]);

 const removetoDo =(id)=>{

  const newtodo=todos.filter((d, index)=>{
 if (index!==id)
 {
  return true;
 }
else {
  return false;
}
  })
  todoset(newtodo)
 }

 const handleToDo =(item)=>{
  
todoset(
  [
    ...todos,
    {
      item,
      time: new Date().toLocaleTimeString()
    }
  ]
)
 }

  return (
    <div className='bg-black h-screen p-3 flex justify-center items-center '>
    <div className='w-[90%] h-[90%] bg-gray-50'>
    <Input handle={handleToDo} />

  <Box data={todos} remHandle={removetoDo}/>
    </div>
    </div>
  )
}

export default App
