import {Route, Routes} from "react-router-dom";
import React from "react";
import Zad1 from "../views/Zad1";
import {Zad2} from "../views/Zad2";
export const Router = () => {
  return(
    <Routes>
      <Route path='/' element={<Zad1/>}/>
      <Route path='/Zad2' element={<Zad2/>}/>
      <Route path='*' element={<Zad1/>}/>
    </Routes>
  )
}