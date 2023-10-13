import React from 'react'
import List from './List'
const Box = (props) => {
  const item = props.data.map(
    (singledata, index)=>{
   return <List id={index} item={singledata.item} time={singledata.time} handle={props.remHandle} />
    }
  )

  
  
  return (
    <div>
      {item}
    </div>
  )
}

export default Box