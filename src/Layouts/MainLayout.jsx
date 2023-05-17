import React from 'react'
import {Link,Outlet} from "react-router-dom"

import '../Styles/style.scss'

const MainLayaout = () => {


  return (
    <div className='main-layout'>
         <nav>
        <ul>
        <Link to=''> <li>Acount</li></Link>
        <Link to='payment'> <li>Odenish</li></Link>
        <Link to='schedule'> <li>Cedvel</li></Link>
        <Link to='point'> <li>Qiymetlendirme</li></Link>
           
           
            
        </ul>
         </nav>
         <section>
            <Outlet/>
         </section>
    </div>
  )
}

export default MainLayaout