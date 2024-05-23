import React from 'react'

export default function B10() {
  return (
    <div>
      <form>
  <label >Email:</label>
  <input id="email" name="email" type="email" className="is-dirty peer" required />
  <div className="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
  
</form>
    </div>
  )
}
