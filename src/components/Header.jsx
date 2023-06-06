import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="header-content">
        <Link to={'/'}><h1 className='header-name'>KISAN <span>NETWORK</span> <br /><span>Smart Deals in Your Hand</span></h1></Link>
        <div className="header-menuone">
         <Link to={'/verified'}> <button className='button-16'>Verified List</button></Link>
        </div>
        <div className="header-menutwo">
         <Link to={'/Addkisan'}> <button className='button-16'>Add more Kisan</button></Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header