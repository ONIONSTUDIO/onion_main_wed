import React from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../common/Footer";



export default function MainLayout(){
  return(
    <>
    <Topbar/>
    <div className="content">
        <Sidebar/>
      <div className="page-layout">
        <Outlet/>
      </div>
    </div>
    <Footer/>
    
    
    </>
  )
}