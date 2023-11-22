
import React from "react";
import { About } from "../pages/about/About";
import { Home } from "../pages/home/Home";
import { Work } from "../pages/work/Work";

export const pathData = [
    {
        key: 1,
        title: 'Home',
        path: '/',
        element: <Home/>
    },
    {
        key: 2,
        title: 'About',
        path: 'about',
        element: <About/>
    },
    {
        key: 3,
        title: 'Work',
        path: 'work',
        element: <Work/>
    }

]