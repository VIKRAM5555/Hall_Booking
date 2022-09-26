import React from 'react';



import { Room } from './Room';


  
   
  


export function ListRoom({hallList}) {
  
  
  return <div className='roomCards'>
 
      {  hallList.map((data)=><Room img={data.img} Price={data.Price} Amenities={data.Amenities} id={data.id} />)}
       
  </div>;
}




