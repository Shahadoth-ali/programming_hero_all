/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
 
  //step two by facing data from local file
const [watches,setWatches]=useState([])

useEffect(()=>{
  fetch('watches.json')
  .then(res=>res.json())
  .then(data=>setWatches(data))
},[])

  //step one
// const watches=[
//   {id:1,name:'apple watch',price:300},
//   {id:2,name:'samsung watch',price:200},
//   {id:3,name:'sony watch',price:500},
// ]



  return (
    <>
    {
      watches.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
    }
    </>
  )
}

export default App
