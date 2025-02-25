import React, { useState } from 'react'
import Axios from "axios"

const App = () => {

  const[city,setCity]=useState("")
  const[data,setData]=useState()
  const key="97e72a8a7799451c56db7a27e3a5c7cc"


const getdata=async()=>{
  try{
  const response =await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
  console.log(response.data)
  setData(response.data)
  
  }
  catch(err){
    alert("please correct city name")
  }
}

  return (
    <div className='container-1'>
      <div className='container-2'>
       <div>
      <h1>weather</h1>
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter the city Name' />
      <button className='btn' onClick={getdata}>search</button>
      </div>
      </div>


      <div className='container-3'>
      {data&&(
       <div> 
      <h1>City:{data.city.name}</h1>
      <h1>Country:{data.city.country}</h1>
      <h1>Temp:{Math.round(data.list[0].main.temp)}c</h1>
      <h1>Min temp:{Math.round(data.list[0].main.temp_min)}c</h1>
      <h1>Min temp:{Math.round(data.list[0].main.temp_max)}c</h1>
      <h1>Weather:{data.list[0].weather[0].main}</h1>
      </div>
      )}
      </div>

     
     
      


      

    </div>
  )
}

export default App