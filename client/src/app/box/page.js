'use client'
import {React, useState }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeHeight,changeWidth,changecircle, changecolor } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'

const Box = () => {
    const dispatch = useDispatch()
    const {height, borderRadius, width, backgroundColor} = useSelector(state=>state.box)
  return (
    <div>
      <div className={borderRadius} style={{backgroundColor: backgroundColor, height: height, width:width }}>
        
      </div>
      <Button  onClick={()=> dispatch(changeHeight())}>Height</Button>
      <Button  onClick={()=> dispatch(changeWidth())}>Width</Button>
      <Button  onClick={()=> dispatch(changecircle())}>Circle</Button>
      <Input   onChange={(color)=> dispatch(changecolor(color.target.value))}></Input>
    </div>
  )
}

export default Box