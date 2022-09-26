import { Button } from '@mui/material/';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {useContext,createContext} from 'react' 
import { locateContext } from './App';

export function No_of_Days() {
  
  const {firstDate,setFirstDate,SecondDate,setSecondDate,date1,date2,Difference_In_Time,Difference_In_Days}=useContext(locateContext)
  const navigate= useNavigate();
  return <div>

    <div className='Rooms_Guest'>
      <h3 style={{ letterSpacing: 2, wordSpacing: 8 }}>CHECK In & Out</h3>

      <input style={{ padding: 8, borderRadius: 12, border: 'green' }} type="date" onChange={e => setFirstDate(e.target.value)} id="birthday" name="birthday" />
      <input style={{ padding: 8, borderRadius: 12, border: 'green' }} type="date" onChange={e => setSecondDate(e.target.value)} id="birthday" name="birthday" />
      <span>{Difference_In_Days > -1 ? <Button variant="contained" color="success">No of Days : {Difference_In_Days}</Button> : null}</span>

    </div>
<div ><Button onClick={()=>navigate("/listRoom",{ replace: true })} variant="contained" color="success">Search</Button></div>
  </div>;
}
