import React from 'react'

function Step03() {
  return (
   
    <div className='  w-[100%] h-[40vh]   rounded-2xl pb-2 flex flex-col p-10
    items-center '>
        
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px] ">Congrats!<br></br>Do you know your venue yet?</h1> <br></br>
     
<form className="absolute top-[200px]">

<input type="radio"/>
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">Yes,we even booked it.</label>
<br></br><br></br><br></br>

<input type="radio"/>
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">Nope,we`re still considering options</label>

</form>
</div>
  )
}

export default Step03