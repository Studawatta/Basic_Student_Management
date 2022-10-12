import React from 'react'

function Step02() {
  return (
   
    <div className=' w-[100%] h-[40vh]   rounded-2xl pb-2 flex flex-col p-10
    items-center '>
        
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px]">When did you get engaged?</h1> <br></br>
     
<form className="absolute top-[200px]">

<input type="date" className="border-b-2 border-slate-300  placeholder:italic placeholder:text-center" /> 

</form>
</div>
  )
}

export default Step02