import React from 'react';
import styled from 'styled-components';
// import { FaDumbbell } from "react-icons/fa";
//@ts-ignore
import dumbbell from "../assets/dumbbell.svg";
//@ts-ignore
import cellphone_smartwatch from "../assets/cellphone-smartwatch2.svg";
import DumbbellSvg from './util/DumbbellSvg';
const fitnessModel = require('../assets/model.webp');




const  Section_2 :React.FC = () => {

  return (
    <Section_2Element >
           <div className="model"></div>
       

          <div className="container-1">
              <img src={fitnessModel} alt="" />
               <div className="text-container">
                  <div>
                
                    <DumbbellSvg  className="dumbbell-icon" width="180px" height="123"/>
                    <span>WORKOUT TRACKING</span>
                  </div>
                  <p>Fine Tune Your Routine With Precise Workout Stats</p>
                  {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas magnam tempora aspernatur impedit ea vel debitis culpa dolor in officiis.</p> */}
               </div>
          </div>
          <div className="container-2">
            <img src={cellphone_smartwatch} alt="" className='cellphone-smartwatch' />
          </div>
       


    </Section_2Element >
);
};

export default Section_2;


const Section_2Element = styled.div`
     min-height: 80vh;
      position: relative;
       display: grid;
      grid-template-columns: 70% 30%;
      background: #222323;
      padding: 6rem 0;

 

 

    .container-1{
      /* max-width: 70%; */
      background: #222323;
      position: relative;
    }
    
    .container-1 img{
      width:100%;
    }


    .container-2{
      /* max-width: 30%; */
      background: rgb(118,77,128);  
      background: linear-gradient(21deg, rgba(118,77,128,1) 13%, rgba(115,80,126,1) 49%, rgba(48,50,50,1) 74%); 
      margin-left: 4rem;
    }

    .model{
      width: 100%;
      min-height: 80vh;
      position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      
        z-index: 3;
        background: rgb(34,35,35);
        background: linear-gradient(94deg, rgba(34,35,35,1) 10%, rgba(101,103,103,0.3) 54%); 
        
    
    }

    .text-container{
      position: absolute;
      top: 20%;
      left: 5%;
      z-index: 3;
      color:#fff;
    
      letter-spacing: var(--spacing);
      /* width:%; */
    }

    .text-container div{
        display:flex;
        align-items: center; 
       
    }

    .text-container div span{
      width: 100%;
      font-size:1.5rem;
      font-weight: bold;
     
    
    }
    p:nth-of-type(1) {
      font-size: 4rem;
      margin-bottom: 1rem;
   
    }
    p:nth-of-type(2) {
     
    }


    .dumbbell-icon{
   
    
    
    } 

   
    .cellphone-smartwatch{
      position: absolute;
      top:20%;
      right:14%;
      z-index: 3;
    }
`