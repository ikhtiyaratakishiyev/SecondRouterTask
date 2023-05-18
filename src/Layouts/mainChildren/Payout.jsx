import React from 'react'
import Medium_Chart from '../../assets/images/Medium_Earning.png'
import Content from '../../assets/images/Content.png'
import Safety from '../../assets/images/Safety.png'
import Medium from '../../assets/images/Medium.png'
import Transfers from '../../assets/images/Transfers.png'
const Payout = () => {
  return (
    <div>
    <div className="outlet-schedule">
       <img src={Content} alt="" />
        <img src={Safety} alt="" />   
        </div>
        <div className="outlet-schedule">
       <img src={Medium_Chart} alt="" />
        <img src={Medium} alt="" />  
        <img src={Transfers} alt="" />  
        </div>
    </div>
  )
}

export default Payout