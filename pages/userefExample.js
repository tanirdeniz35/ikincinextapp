"use client";
import React,{useRef,useEffect,useState} from 'react'

const userefExample = () => {
const [count,setCount]=useState(0)
const ali=useRef(null);
useEffect(()=>{
 console.log(ali.current);
},[]);
const fakeClick = () => {
ali.current.click();
};
  return (
    <>
    <button onClick={fakeClick}>Sahte buton</button>
    <span>Sayaç:{count}</span>
    <button ref={ali} onClick={()=>setCount(count+1)}> + </button>
    </>
  )
}

export default userefExample