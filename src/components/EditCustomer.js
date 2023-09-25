import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/Edit.css'

const EditCustomer = ({ customers, setCustomers }) => {

    const {customerId} = useParams();
    const customerToEdit = customers.find((customer) => customer.id === Number(customerId));
    const [editedCustomer, setEditedCustomer] = useState(customerToEdit);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange=(e)=>{
        const {name,value} = e.target;
        setEditedCustomer({...editedCustomer, [name]:value});
    }

    const handleSave = () => {

        if(!editedCustomer.name || !editedCustomer.email){
            setError('Name and Email are mandatory fields');
            window.scrollTo({ top: 0 , behavior: 'smooth'});
        }

        else{
            const updatedCustomer = customers.map((customer) => customer.id === editedCustomer.id ? editedCustomer : customer)
            setCustomers(updatedCustomer);
            navigate('/');
        }
    }

    const handleCancel=()=>{
        navigate('/');
    }

  return (
    <div>
      <h1 className='form-title'>Edit Customer</h1>
      <form className='form-container'>
      <div className='error'>{error}</div>
        <div className='form-field'>
            <label>Name: </label>
            <input type='text' name='name' value={editedCustomer.name} onChange={handleInputChange}></input>
        </div>
        <div className='form-field'>
        <label>Email: </label>
            <input type='email' name='email' value={editedCustomer.email} onChange={handleInputChange}></input>
        </div>
        <div className='form-field'>
        <label>Channel: </label>
            <select name='channel' value={editedCustomer.channel} onChange={handleInputChange}>
                <option value='website'>Website</option>
                <option value='email'>Email</option>
                <option value='phone'>Phone</option>
                <option value='word-of-mouth'>Word-of-mouth</option>
                <option value='other'>Other</option>
                <option value='unknown'>Unknown</option>
            </select>
        </div>
        <div className='form-field'>
        <label>Address: </label>
            <input type='text' name='address' value={editedCustomer.address} onChange={handleInputChange}></input>
        </div>
        <div className='form-field'>
        <label>Postal: </label>
            <input type='text' name='postal' value={editedCustomer.postal} onChange={handleInputChange}></input>
        </div>
        <div className='form-field'>
        <label>City </label>
            <input type='text' name='city' value={editedCustomer.city} onChange={handleInputChange}></input>
        </div>
        <div className='form-field'>
        <label>Province: </label>
            <input type='text' name='province' value={editedCustomer.province} onChange={handleInputChange}></input>
        </div>
        <div className='form-field'>
        <label>Country: </label>
            <input type='text' name='country' value={editedCustomer.country}></input>
        </div>
      </form>
      <div className='edit-buttons'>
        <button className='save-button' onClick={handleSave}>Save</button>
        <button className='cancel-button' onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default EditCustomer
