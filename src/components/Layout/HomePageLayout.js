import React from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { Footer } from "../common/Footer";
import { Home } from "../../pages/home/Home";



export default function HomePageLayout(){
  return(
    <>
    <Topbar/>
    <div className="content">
        <Sidebar/>
      <div className="page-layout">
        <Home/>
      </div>
    </div>
    <Footer/>
    
    
    </>
  )
}