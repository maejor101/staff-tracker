import logo from './logo.svg';
import AddEmployee from './components/add';
import {useState, userState} from 'react';
import {useEffect} from 'react';
import DisplayEmployee from './components/displayEmployee';
import './App.css';

function App() {

  const saved = JSON.parse(localStorage.getItem('paymaster')) || [];

  const [paymaster, setPaymaster]= useState(saved);   // defining a state using  const
       


 

  const add= ((employeeName, employeeSurname, emailAdress, phoneNumber, employeeId, positionType) =>{

    setPaymaster((paymaster)=>[...paymaster, {employeeName:employeeName, employeeSurname:employeeSurname, emailAdress:emailAdress, phoneNumber:phoneNumber, employeeId:employeeId, positionType:positionType}]); // addding the 6 transactions to our array
    
console.log(paymaster);
  } )

  useEffect(() => {
    localStorage.setItem('paymaster', JSON.stringify(paymaster));
 }, [paymaster]);

 function deleteEmployee (employeeID) {
  setPaymaster(paymaster.filter(emp => {
    return emp.employeeId !== employeeID
  }))
}
  return (
    <div className="container"> 
     
     <AddEmployee add={add}/>
     <DisplayEmployee paymaster={paymaster} deleteEmployee={deleteEmployee}/>
    </div>
  );
}

export default App;
