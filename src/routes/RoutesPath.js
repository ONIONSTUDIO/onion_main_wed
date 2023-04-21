import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ERRORLayout from "../components/Layout/ErrorLayout";
import HomePageLayout from "../components/Layout/HomePageLayout";
import MainLayout from "../components/Layout/MainLayout";
import { pathData } from "../data/RoutesPathData";
import { View } from "../pages/view/View";

export function RoutesPath() {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout/>}/>
        <Route element={<MainLayout/>}>
        {pathData.map((item)=> {
                return(
                <Route key={item.key} path={item.path} element={item.element}/>
                )
            })}
        </Route>
        <Route path="view" element={<View/>}>
            <Route index element={<View/>}></Route>
            <Route path=":id" element={<View/>}></Route>
        </Route>
        <Route path="*" element={<ERRORLayout/>}/>
    </Routes>
    </BrowserRouter>
    )
}