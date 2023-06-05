import React from 'react'
import { useState } from 'react'
import { kisanData } from '../Firebase/Firebase'
import { useEffect } from 'react'

const KisanDetail = () => {
    const [kisanData, setKisanData] = useState([
       
        
    ])
    setKisanData(kisanData.Data)
  return (
    <>
    <div className="detail-main" >
    {kisanData.map((obj,i)=>{
            return(
                
                <div className="Detail-main" key={i} >
                <div className="Detail-content" >
                    <h2>{obj.FirstName} {obj.LastName}</h2>
                    <p>First Name  : {obj.FirstName}</p>
                    <p>Last Name : {obj.LastName}</p>
                    <p>Village : {obj.Village}</p>
                    <p>Contact no : {obj.contact}</p>
                </div>
                <div className="Detail-button">
                    <button className='button-16'>SEND OTP</button>
                </div>
            </div> 
            
            )
        })}
    </div>
    </>
  )
}

export default KisanDetail