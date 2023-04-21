import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../../data/SidebarData";

export default function Sidebar(){
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return(<>
      <div className="sidebar-main">
      <h1>Side bar</h1>
        <Link to='#' className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <Link to="#" className='menu-bars'>
          <AiIcons.AiOutlineClose />
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          
          {SidebarData.map((item, index)=> {
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      
      
      </div>
      </>
  )
}