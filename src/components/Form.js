import React, { useState } from 'react'


import Step01 from './steps/Step01';
import Step02 from './steps/Step02';
import Step03 from './steps/Step03';
import Step04 from './steps/Step04';
import Step05 from './steps/Step05';
import Step06 from './steps/Step06';
import Step07 from './steps/Step07';

import  st01 from './images/st01.svg';
import  st02 from './images/st02.svg';
import  st03 from './images/st03.svg';
import  st04 from './images/st04.svg';
import  st05 from './images/st05.svg';
import  st07 from './images/st07.svg'; 

function Form () {

   const [step, setStep] = useState(0); 

   const Steps = ["STEP 1", "STEP 2", "STEP 3", "STEP 4",
   "STEP 5", "STEP 6", "STEP 7"];

   const DisplaySteps = () =>{
    switch(step) {
        case 0:
          return (<Step01/>);
        case 1:
          return <Step02/>
        case 2:
          return <Step03/> 
        case 3:
          return <Step04/> 
        case 4:
          return <Step05/>  
        case 5:
          return <Step06/> 
        case 6:
          return <Step07/> 
        default:            
      }
   }

   const DisplayImages = () =>{
    switch(step) {
        case 0:
          return  <img src={st01} className=" hidden md:block h-[120%] absolute left-[100%] top-[20px] lg:top-[-35px] xl:top-[-40px] " alt="img"  />
        case 1:
          return  <img src={st02} className="hidden md:block h-[120%] absolute left-[100%] top-[10px] lg:top-[-50px] xl:top-[-60px]" alt="img" />
        case 2:
          return <img src={st03} className="hidden md:block h-[120%] absolute left-[100%] top-[-5px] lg:top-[-55px] xl:top-[-75px]" alt="img"/>
        case 3:
          return  <img src={st04} className="hidden md:block h-[120%] absolute left-[100%] top-[25px] lg:top-[-25px] xl:top-[-35px]" alt="img"/>
        case 4:
          return  <img src={st05} className="hidden md:block h-[120%] absolute left-[100%] top-[30px] lg:top-[-20px] xl:top-[-35px]" alt="img"/>
        case 5:
          return <Step06/> 
        case 6:
          return <img src={st07} className="hidden md:block h-[120%] absolute left-[100%] top-[60px] lg:top-[10px] xl:top-[0px]" alt="img"/>
        default:            
      }
   }

   

   



   


  return (
    <div  className="  absolute top-[10%] left-[5%]  w-[90%] h-[500px]  md:w-[55%]  shadow-xl rounded-2xl pb-2 bg-white justify-center">
       
        <div className='ml-[8%]'>
            {/*header */}
            <h1 className=' text-[14px] xl:text-[16px]'>{Steps[step]} OF 7</h1>
        </div>

      <div className='grid justify-items-center w-[100%]'>
        <div className='absolute top-[5%] w-[84%]  h-[2.5%] bg-white  rounded '>
            {/*progress bar */}
            
            <div  className={` h-[100%] bg-green-700 rounded
            ${step === 0 ? "w-[12%]" : step === 1 ? "w-[24%]" : step === 2 ? "w-[36%]" : step === 3 ? "w-[48%]" :
             step === 4 ? "w-[60%]" : step === 5 ? "w-[72%]" : step === 6 ? "w-[84%]" : ""}
            } `}>
            </div>
          </div>    
        </div>
        
       
        <div className='items-center w-[100%] ' >
            {/*body */}
            {DisplaySteps()}
          
            
            {DisplayImages()} 
               
           
           
        </div>
        <div className=' absolute top-[90%] w-[100%] xl:top-[80%]'>
            {/*footer */}
            <button 
            disabled={step === 0}
             onClick={ () =>
                {setStep((currStep) => currStep -1);
                }}

             className={`ml-[12%] bg-white text-slate-400 uppercase py-1 px-2 xl:py-2 xl:px-4 rounded-xl
    font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 text-[14px] xl:text-[18px]
    hover:text-white transition duration-200 ease-in-out ${step===0 ? "hidden" : ""}`}>Prev</button>
           
            <button 
            
             onClick={ () =>
            {setStep((currStep) => currStep +1);
            }}
            className=' float-right mr-[12%] bg-green-500 text-white uppercase py-1 px-2 xl:py-2 xl:px-4 rounded-xl
    font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 text-[14px] xl:text-[18px]
    hover:text-white transition duration-200 ease-in-out'>{step === Steps.length -1 ? "Confirm" : "Next"}</button>
        </div>
    </div>
  )
}

export default Form 