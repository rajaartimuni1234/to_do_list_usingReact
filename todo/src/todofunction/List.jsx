import React, {  useState } from 'react'
import { BsTrash } from "react-icons/bs";
const List = (props) => {
    const [done, setdone]=useState(false);
    
  return (
    <div className=' w-full border-b p-3 flex justify-between ' >
<div>
<span className='pr-2 text-[14px] text-slate-400 '>
 {props.time}
</span>

<span onClick={()=>
{
    setdone(!done)
}} className = {`${done=== true ? ` line-through`: ``} select-none cursor-pointer text-2xl`}>
  {props.item}
    </span>
</div>
<div onClick={()=>{
    props.handle(props.id)
}}>
    <BsTrash className=" text-red-600 cursor-pointer"  />
</div>

    </div>
  )
}

export default List