import React from 'react'
import { useState } from 'react'


const Verified = () => {
    const [verifiedData, setVerifiedData] = useState([
        {
            Name: "Aditya Singh",
            contact: 345678765,
            verfied: 56/45/4754
        }
    ])
    console.log(verifiedData);
  return (
    <>
        <div className="Verified-main"  >
           {
            verifiedData.map((obj)=>{
                return(
              <div className="Detail-content" >
                 <p>Name  : {obj.Name}</p>
                 <p>Contact no : {obj.contact}</p>
                 <p>Verified on :{obj.verfied}</p>
            </div>
                )
            })        
}         
    </div> 
    </>
  )
}

export default Verified