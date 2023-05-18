import React from 'react'
import Transfers from '../../assets/images/Transfers.png'
import Small from '../../assets/images/Small.png'
import Large from '../../assets/images/Large.png'
import Large_Balance from '../../assets/images/Large_Balance.png'
import '../../Styles/style.scss'
const Point = () => {
  return (
    <div>
       <div className="outlet-schedule">
       <img src={Small} alt="" />
           <img src={Large} alt="" />
         
        </div>
        <div className="outlet-schedule">
       <img src={Large_Balance} alt="" />
       <img src={Transfers} alt="" /> 
        </div>
     
    </div>
  )
}

export default Point