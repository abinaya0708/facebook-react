import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useSelector } from "react-redux";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Header} from "./Header";
import { Createpost } from "./Createpost";


export const Routing=()=>{
    let state=useSelector((e)=>e)
    return(
        <BrowserRouter>
            <Routes>
                {
                    state.data.signtolog?
                    <Route path="/" element={<Login/>}/>:<Route path="/" element={<Signup/>}/>  
                }
                <Route path="/header" element={<Header/>}/>
                <Route path="/post" element={<Createpost/>}/>
                <Route path="/post/nav" element={<Header/>}/>       
            </Routes>
        </BrowserRouter>
    )
}



    