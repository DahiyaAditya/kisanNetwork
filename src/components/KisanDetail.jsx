import React from 'react'
import app from '../Firebase/Firebase'
import { useState } from 'react'
import { kisanDetails , verifiedDatas} from '../Firebase/Firebase'
import { useEffect } from 'react'
import { getDocs, addDoc } from 'firebase/firestore'
import { getAuth,signInWithPhoneNumber, RecaptchaVerifier} from "firebase/auth";
import swal from 'sweetalert'
const auth = getAuth(app);

const KisanDetail = () => {
    const [kisanData, setKisanData] = useState([])
    // const [form, setForm] = useState(
    //   {
    //     name:"",
    //     contact :"",
    //     verified :"",
    //   }
    // );
    useEffect(() => {
     async function getdata(){
        const _Data = await getDocs(kisanDetails);
          const newData = _Data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setKisanData(newData);
     }
     getdata()
   },[])
   const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }
   const requestOtp = (contact) => {
    generateRecaptha();
    // console.log(contact);
    let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, `+91${contact}` ,appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        swal({
          text: "OTP Sent",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
      }).catch((error) => {
        swal({
          title: error,
          icon: "error",
          buttons: false,
          timer: 3000
        })
        // console.log(error);
      })
  }
  return (
    <>
    <div className="detail-main" >
    {kisanData.map((obj,i)=>{
            return(
                
                <div className="Detail-main" key={i} >
                <div className="Detail-content" >
                    <h2>{obj.firstname} {obj.lastname}</h2>
                    <p>First Name  : {obj.firstname}</p>
                    <p>Last Name : {obj.lastname}</p>
                    <p>Village : {obj.village}</p>
                    <p>Contact no : {obj.contact}</p>
                </div>
                <div className="Detail-button">
                    <button className='button-16' onClick={() => requestOtp(obj.contact)}>SEND OTP</button>
                </div>
                <div id="recaptcha-container"></div>
            </div> 
            
            )
        })}
        
    </div>
    </>
  )
}

export default KisanDetail