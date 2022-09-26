
import './App.css';
import { FirstPage } from './FirstPage';
import React, { useEffect, useRef } from 'react';
import {Route,Routes ,BrowserRouter, json} from "react-router-dom";
import { ListRoom } from './ListRoom';
import { ListRoomIsolate } from './ListRoomIsolate';
import { Payment } from './Payment';
import  {useState,createContext} from 'react' 
 export const locateContext = createContext()
export default function App() {

  const [firstDate, setFirstDate] = useState('');
  const [SecondDate, setSecondDate] = useState('');

  var date1 = new Date(firstDate);
  var date2 = new Date(SecondDate);

  var Difference_In_Time = date2.getTime() - date1.getTime();

  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


  const [locate, setLocate] = useState('');
  const [room, setRoom] = useState([1]);
 const [hallList,setHallList]=useState([])
 const PreventRender=useRef(true)

 useEffect(()=> {
  if(PreventRender.current===true){
  fetch('https://spoti05.herokuapp.com/hallBooking')
    .then((a)=>a.json())
    .then((a)=>hallList.push(...a))
    .catch(function(error) {
    console.log('Request failed', error)
    })
    PreventRender.current=false

  }
  
  },[])

   
 
 
  
  return (
    <BrowserRouter>
      <locateContext.Provider value={{locate:locate, setLocate:setLocate,room:room,setRoom:setRoom,hallList:hallList,firstDate:firstDate,setFirstDate:setFirstDate,SecondDate:SecondDate,setSecondDate:setSecondDate,date1:date1,date2:date2,Difference_In_Time:Difference_In_Time,Difference_In_Days:Difference_In_Days}}>
    <Routes>
  
      
      <Route path="/" element={<FirstPage/>} />
       <Route path="/listRoom" element={<ListRoom hallList={hallList}/>} />
       <Route path="/listRoom/:id" element=  { <ListRoomIsolate hallList={hallList}/>} />
       <Route path="/listRoom/:id/payment" element=  { <Payment/>} />
 
    </Routes> 
    </locateContext.Provider>
  </BrowserRouter>
  );
}


