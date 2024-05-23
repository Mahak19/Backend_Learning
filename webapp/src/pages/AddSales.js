import React from 'react'
import './All.css'

// Component for adding a sales entry
const AddSales = () => {
    return (
        <div className='add'>
            {/* Title */}
            <h1>ADD SALE ENTRY</h1>
            {/* Form inputs */}
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Product Name</label>
                <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Quantity</label>
                <input type="number" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Amount</label>
                <input type="number" class="form-control" />
            </div>
            {/* Submit button */}
            <div class="d-grid gap-2">
                <button class="btn btn-primary submit" type="button">Submit</button>
            </div>
        </div>
    )
}

export default AddSales
