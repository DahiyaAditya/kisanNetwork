import React from 'react'
import { useState } from 'react'
import { addDoc } from 'firebase/firestore'
import { kisanDetails } from '../Firebase/Firebase'
import swal from 'sweetalert'
const AddKisan = () => {
    const [form, setForm] = useState(
      {
        firstname :"",
        lastname :"",
        contact :"",
        village :"",
      }
    );
    const changeFname= (e)=>{
      setForm({ ...form,firstname: e.target.value})
    }
    const changeLname= (e)=>{
     setForm({ ...form,lastname: e.target.value})
    }
    const changeContact= (e)=>{
      setForm({ ...form,contact: e.target.value})
     }
    const changeVillage = (e)=>{
     setForm({ ...form,village: e.target.value})
    }
  

    const addKisanDetail = async ()=>{
      try {
        // console.log(form);
        await addDoc(kisanDetails, form);
        swal({
          title: "Successfully Added",
          icon: "success",
          buttons: false,
          timer: 3000
        })
      } catch (error) {
        swal({
          title: error,
          icon: "error",
          buttons: false,
          timer: 3000
        })
      }
    }
  return (
    <>
      <div className="add-kisan-main">
        <div className="add-main">
          <div className="add-title">
            <h1>Add Kisan To Kisan Network</h1>
          </div>
          <div className="add-detail">
            <label htmlFor="title">First Name</label>
            <input 
               type="text"  
               name="title" 
               id="title" 
               onChange={changeFname} 
            />
             <br />
            <label htmlFor="year">Last Name</label>
            <br />
            <input
              type="text"
              name="year"
              id="year"
              value={form.year}
              onChange={changeLname}
            />
            <label htmlFor="image">Village</label>
            <input
              type="text"
              name="image"
              id="image"
              value={form.image}
              onChange={changeVillage}
            />
            <br />
            <label htmlFor="image">Contact no</label>
            <input
              type="number"
              name="image"
              id="image"
              value={form.image}
              onChange={changeContact}
            />
            <button className="button-16 add-kisanbutton" onClick={addKisanDetail}>
            Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddKisan