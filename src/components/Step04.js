import React from 'react'
  


const getDropList = () => {
  const year = new Date().getFullYear();
 
  return (
    Array.from( new Array(2), (v,i) =>
      <option key={i} value={year+i}>{year+i}</option>
    )
  );
};
   



function Step04() {
  return (
   
    <div className=' w-[100%] h-[50%]   rounded-2xl pb-2 flex flex-col p-10 items-center
    '>
        
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px]">Got it!Do you have palce and<br></br>season in mind?</h1> <br></br>
     
<form className="absolute top-[200px]">
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">We are thinking about </label>
<input type="text" className="border-b-2 border-slate-300  placeholder:italic placeholder:text-center placeholder:text-[14px] placeholder:lg:text-[18px] placeholder:xl:text-[20px]" placeholder="Location"/> 
<br></br><br></br><br></br>

<label className="text-[14px] lg:text-[18px] xl:text-[20px]">During </label>&nbsp;
<select className='border-b-2 border-slate-300 text-[14px] lg:text-[18px] xl:text-[20px]' >
    <option value="" disabled selected hidden >Season</option>
   
  </select>
  &emsp;
   <select className='border-b-2 border-slate-300 text-[14px] lg:text-[18px] xl:text-[20px]' >
   <option value="" disabled selected hidden>Year</option>
    {getDropList()}
    </select>
  
  </form>
</div>
  )
}

export default Step04