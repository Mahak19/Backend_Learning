import React from 'react'
import './All.css'

// Component for the registration form
const Registration = () => {
  return (
    <div className='add'>
      <h1>REGISTRATION FORM</h1>
      {/* Form fields for first name, last name, email, and password */}
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">First Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Last Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Email</label>
        <input type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Password</label>
        <input type="password" class="form-control" />
      </div>
      {/* Submit button */}
      <div class="d-grid gap-2">
        <button class="btn btn-primary submit" type="button">Submit</button>
      </div>
    </div>
  )
}

export default Registration
