import React from 'react';
import  {useState,useContext,createContext} from 'react' 
import { locateContext } from './App';
import {  useParams} from 'react-router-dom';
export function Payment() {
  const {locate,room,hallList,Difference_In_Days}=useContext(locateContext)
  const {id}=useParams()
  return <div className="Rooms_Guest">
<h1 style={{  letterSpacing: "5px"}}>Booked Successfully</h1>
<h2 style={{  letterSpacing: "5px"}}>Location :{locate}</h2>
<h3 style={{  letterSpacing: "3px"}}>Number of Room Booked : {room.length}</h3>
<h3 style={{  letterSpacing: "3px"}}>Number of Days : {Difference_In_Days}</h3>
<h4 style={{  letterSpacing: "3px"}}>Price :{hallList[id-1].Price}</h4>
<h4 style={{  letterSpacing: "3px"}}>Thank you</h4>
  </div>;
}
