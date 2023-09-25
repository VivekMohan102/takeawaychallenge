import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CustomerList from './components/CustomerList';
import EditCustomer from './components/EditCustomer';

function App() {

  const [customers, setCustomers]=useState();

  useEffect(()=>{
    fetch('https://waveaccounting.github.io/se-challenge-fe-customers/settings.json')
    .then((response) => response.json())
    .then((data) => setCustomers(data.customers))
    .catch((error) => console.error('Error in fetching data', error));
  },[])

  return (
  <Router>
    <div>
      <Routes>
        <Route path='/' element = {<CustomerList customers={customers}/>}></Route>
        <Route path='/edit/:customerId' element={<EditCustomer customers={customers} setCustomers={setCustomers}/>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
