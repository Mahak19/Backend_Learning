import React from 'react'
import './All.css'

// Component for displaying the top 5 sales
const TopSales = () => {
    return (
        <div className='add table-responsive'>
            <h1>Top 5 Sales</h1>
            {/* Table to display the sales data */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sales Id:</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sale Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data rows */}
                    <tr>
                        <th scope="row">1</th>
                        <td>S1212</td>
                        <td>Laptop</td>
                        <td>2</td>
                        <td>90000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>S1213</td>
                        <td>Smartphone</td>
                        <td>5</td>
                        <td>60000</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    )
}

export default TopSales
