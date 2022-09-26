import React from 'react';
import { Add_Room } from './Add_Room';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  {useState,useContext,createContext} from 'react'
import { locateContext } from './App';

import { No_of_Days } from './No_of_Days';


export function FirstPage() {

  const {room,setRoom}=useContext(locateContext)
  return  <div className="App">
  <h3 style={{letterSpacing: 5,wordSpacing:20}}>Gaikan ROOMS</h3>

 <BasicSelect />
 <div className='addonContainer'> 

 
{ room.map((a,i)=><Add_Room i={i} room={room} setRoom={setRoom} a={a}/>)}

  </div>

   
  <No_of_Days/>
 

</div>;
}
 

export default function BasicSelect() {
 
 

  const locations='CHENNAI MUMBAI KOLKATA BANGLORE'.split(" ")
const {locate,setLocate}=useContext(locateContext)


  const handleChange = (event) => {
    setLocate(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl  className='dropdown'>
        <InputLabel id="demo-simple-select-label"><h5>where are you going...?</h5></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locate}
          label='where are you going...?'
          onChange={handleChange}
        >
         {locations.map((data)=><MenuItem value={data}>{data}</MenuItem>) }
          
        </Select>
      </FormControl>
    </Box>
  );
}
