import React from 'react'
import {Link,Outlet} from "react-router-dom"
import Activity from '../assets/images/Activity.png'
import Clients from '../assets/images/Clients.png'
import Earnings from '../assets/images/Earnings.png'
import mounth from '../assets/images/mounth.png'
import Icon from '../assets/icons/Icon.png'
import Text from '../assets/images/Text.png'
import dashboard from '../assets/icons/dashboard.png'
import activity from '../assets/icons/activity.png'
import library from '../assets/icons/library.png'
import security from '../assets/icons/security.png'
import schedule from '../assets/icons/schedule.png'
import payouts from '../assets/icons/payouts.png'
import settings from '../assets/icons/settings.png'

import '../Styles/style.scss'

const MainLayaout = () => {


  return (
    <div className='main-layout'>
     
         <nav>
         <div className="logo">
        <img src={Icon} alt="" />
       <img src={Text} alt="" />
       
      </div>

        <ul>
        <Link to=''> <button><img src={dashboard} alt="" /> Dashboard </button> </Link>
        <Link to='activity'> <button className='li-btn'><img src={activity} alt="" /><li>Activity</li></button>  </Link>
        <Link to='library'> <button className='li-btn'><img src={library} alt="" /><li>Library</li></button></Link>
        <Link to='security'> <button className='li-btn'><img src={security} alt="" /><li>Security</li></button></Link>
        <Link to='schedule'> <button className='li-btn'><img src={schedule} alt="" /><li>Schedule</li></button></Link>
        <Link to='payout'> <button className='li-btn'><img src={payouts} alt="" /><li>Payouts</li></button></Link>
        <Link to='settings'> <button className='li-btn'><img src={settings} alt="" /><li>Settings</li></button></Link>  
        </ul>

         </nav>
         <section>
          <nav>
            <div className="top-nav-item">
            <h4>Hi,Ikhtiyar</h4>
            <h1>Velcome to Venus!</h1>
            </div>
         
            <div className="top-nav-inpt">

         <input type="text"  placeholder='Search'  />
            </div>
         
          </nav>
           <div className="img">
             <img src={Activity} alt="" />
             <img src={Clients} alt="" />
             <img src={Earnings} alt="" />
             <img src={mounth} alt="" />
           </div>
            <Outlet/>
         </section>
    </div>
  )
}

export default MainLayaout