import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Input = (props) => {
 const inputBox =useRef();

  return (
    <div  className="p-3 flex justify-between gap-[5px]">
        <input type="text" placeholder="Enter data here !!" className=" w-full focus:outline-none placeholder:pl-4 pl-8 border border-slate-400" ref={inputBox}/>
        <div className=" cursor-pointer w-[50px] h-[50px] bg-red-600 text-white text-3xl rounded-full  flex justify-center items-center" onClick={()=>{
          props.handle(inputBox.current.value)
          inputBox.current.value="";
        }} >
           <AiOutlinePlus/> 
        </div>
    </div>
  )
}

export default Input