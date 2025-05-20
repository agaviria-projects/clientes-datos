import {Routes, Route} from "react-router-dom";

import { Home } from "../../pages/Home/Home";
import {Menu} from "../../common/Menu/Menu";
import {Analitica } from "../../pages/Analitica/Analitica";
import {Login} from "../../pages/Login/Login";


export function Rutas(){
    return(
        <>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path ="/home" element={<Home/>}></Route>    
                <Route path ="/analitica" element={<Analitica/>}></Route> 
                <Route path ="/login" element={<Login/>}></Route>   
            </Routes>
        </>
    )

}