
import { useState } from "react";
function AddEmployee(props) {

    const [employeeName, setEmployeeName] = useState('');
    const [employeeSurname, setEmployeeSurname] = useState('');
    const [emailAdress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [positionType, setPositionType] = useState('')


    const add = (() => {
        props.add(
            employeeName,
            employeeSurname,
            emailAdress, 
            phoneNumber, 
            employeeId, 
            positionType
            );
    

    })

    return (
        <div className="inputForm">
            <h3>
                EMPLOYEE TRACKER
            </h3>
            <input type="text" placeholder="Employee name" onChange={(event) => setEmployeeName(event.target.value)} /><br></br>
            <input type="text" placeholder="Employee last name" onChange={(event) => setEmployeeSurname(event.target.value)} /><br></br>
            <input type="text" placeholder="Email address" onChange={(event) => setEmailAddress(event.target.value)} /><br></br>
            <input type="text" placeholder="Phone number" onChange={(event) => setPhoneNumber(event.target.value)} /><br></br>
            <input type="text" placeholder="Employee ID" onChange={(event) => setEmployeeId(event.target.value)} /><br></br>

            <select onChange={(event) => setPositionType(event.target.value)}>
                <option>Apprentice (A)</option>
                <option>Block Man (BM)</option>
                <option>Meat Technician (MT)</option>
                <option>Trainee Manager (TM)</option>
                <option>General Assistant (GA)</option>
            </select>
            <br></br>
            <button className="submitBtn" onClick={add}> Submit </button>
        </div>
    );
}

export default AddEmployee;  //exposes the AddTransaction component to other modules

