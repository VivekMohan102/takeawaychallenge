import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/List.css'

const CustomerList = ({ customers }) => {
  return (
    <div className='list-page'>
      <h1>Customer List</h1>
      <table className='list-table'>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Channel</th>
            <th>Address</th>
            <th>Postal</th>
            <th>City</th>
            <th>Province</th>
            <th>Country</th>
            <th>Actions</th>
            </tr>
        </thead>
              <tbody>
                  {customers?.map((customer) => (
                      <tr key={customer.id}>
                          <td>{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>{customer.channel}</td>
                          <td>{customer.address}</td>
                          <td>{customer.postal}</td>
                          <td>{customer.city}</td>
                          <td>{customer.province}</td>
                          <td>{customer.country}</td>
                          <td>
                              <Link to={`/edit/${customer.id}`}>
                                  <button className='edit-button'>Edit</button>
                              </Link>
                          </td>
                      </tr>
                  ))}
              </tbody>
      </table>
    </div>
  )
}

export default CustomerList
