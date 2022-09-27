


import '../styles/Landing.css'
import React, { useState } from 'react'
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDogs } from '../actions'


import{Link} from"react-router-dom"


export default function LandingPage(){
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const imagenes = allDogs.map(e=> e.image)
    const [Imagen,setimagen]=useState(1)
    let contador =0;
    useEffect(() => {
        dispatch(getDogs())

    }, [dispatch])
  
  
    function Img (){
      
            setimagen(Imagen+1)
        if(Imagen ===172){
            setimagen(0)
        }
    }
    


    return(
        
        <div className='landing' on>
            
            <img src={imagenes[Imagen]} className="fondo" />
          
          
            
            <Link to="/Home">
                     
                {/* <button hidden>/learn react/i</button> */}
                
                <button className='button_Home'  onMouseOver={()=>{Img()}} >bienvenido a Wiki dogs </button>
                </Link>

        </div>
    )


}
