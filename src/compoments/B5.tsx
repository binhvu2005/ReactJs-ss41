import React from 'react'

export default function B5() {
  return (
    <div className='bg-blue-100 w-[320px] h-[120px] flex justify-center align-center'>
     <div className="relative w-[300px] h-[100px] bg-blue-300">
  <p>Relative parent</p>
  <div className="absolute bottom-0 left-0  bg-blue-600">
    <p>Absolute child</p>
  </div>
</div>
    </div>
  )
}
