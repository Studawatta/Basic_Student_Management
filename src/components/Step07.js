import React from 'react'

function Step07() {
  return (
   
    <div className=' w-[100%] h-[50%]   rounded-2xl pb-2 flex flex-col p-10
    items-center'>
        
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px]">Next:Gifts! The Knot Registry lets<br></br>you manage and share them all in<br></br> one place.What do you think you'll<br></br>register for?</h1> <br></br>
     
<form className="absolute top-[250px]">
<input type="radio"/>
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">Items</label>
<br></br>
<input type="radio"/>
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">Chash</label>
<br></br>
<input type="radio"/>
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">Both items and Cash</label>
<br></br>
<input type="radio"/>
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">I'm not sure yet!</label>
</form>
</div>
  )
}

export default Step07