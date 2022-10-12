import React from 'react'


function Step01() {
  return (
    
    <div className='w-[100%] h-[50%]   rounded-2xl pb-2 flex flex-col p-10
     items-center '>
     
      
      <h1 className=" text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px] ">Tell us about your self so we can <br></br> customize your planing exprience.</h1> 
      
<form className="absolute top-[40%]">
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">My name is </label>
<input type="text" className=" border-b-2 border-slate-300  placeholder:italic placeholder:text-center placeholder:text-[14px] placeholder:lg:text-[18px] placeholder:xl:text-[20px]" placeholder="Your first name"/> <input type="text" className="border-b-2 border-slate-300 placeholder:italic placeholder:text-center placeholder:text-[14px] placeholder:lg:text-[18px] placeholder:xl:text-[20px]" placeholder="Your last name"/>
<br></br><br></br><br></br>

<label className="text-[14px] lg:text-[18px] xl:text-[20px]">My partner name is </label>
<input type="text" className="border-b-2 border-slate-300  placeholder:italic placeholder:text-center placeholder:text-[14px] placeholder:lg:text-[18px] placeholder:xl:text-[20px]" placeholder="Their first name"/> <input type="text" className="border-b-2 border-slate-300 placeholder:italic placeholder:text-center placeholder:text-[14px] placeholder:lg:text-[18px] placeholder:xl:text-[20px]" placeholder="Their last name"/>
</form>


</div>


  )
}

export default Step01