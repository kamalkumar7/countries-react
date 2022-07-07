import React,{useState, useContext} from 'react'
import Card from './Components/Country_card'
import {Route, Routes} from "react-router-dom"
import Country from './Components/Country'
import {BrowserRouter as Router} from 'react-router-dom'
import { Context } from './Context'
export default function App(){
  
   const {changeTheme} = useContext(Context)

  
 
     return(
        <div className="main">
            <div className='header'>
                <h1>Where in the world?</h1>
          
            </div>
            <Router>
                <Routes>

                    <Route exact path='/' element={<Card />}>
                       
                    </Route>
                    <Route path='/country/:name' element={<Country/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}