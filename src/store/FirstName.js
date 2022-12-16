import React from 'react'
import { useSelector } from 'react-redux'
const fname=useSelector((state)=>state.firstname)
const FirstName = () => {
  return (
    <div>{fname}</div>
  )
}

export default FirstName

