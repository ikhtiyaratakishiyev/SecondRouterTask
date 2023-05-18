import React from 'react'
import Schedule2 from '../../assets/images/Schedule2.png'
import Medium from '../../assets/images/Medium.png'
import Transactions from '../../assets/images/Transactions.png'
import Medium_Chart from '../../assets/images/Medium_Chart.png'
import Calendar from '../../assets/images/Calendar.png'
const Activity = () => {
  return (
    <div>

<div className="outlet-schedule">
<img src={Transactions} alt="" />
<img src={Medium_Chart} alt="" />
<img src={Calendar} alt="" />
</div>
       <div className="outlet-schedule">
        <img src={Schedule2} alt="" />
        <img src={Medium} alt="" />
      </div>


       
    </div>
  )
}

export default Activity