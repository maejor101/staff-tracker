import React from "react";

function UpdateEmployee() {
    return (
    <div>
       <h3>
               Update employee data
            </h3>
        <div className="inputForm">
           
            <input type="text" placeholder="Employee name" onChange={(event) => setEmployeeName(event.target.value)} /><br></br>
            <input type="text" placeholder="Employee last name" onChange={(event) => setEmployeeSurname(event.target.value)} /><br></br>
            <input type="text" placeholder="Email address" onChange={(event) => setEmailAddress(event.target.value)} /><br></br>
            <input type="text" placeholder="Phone number" onChange={(event) => setPhoneNumber(event.target.value)} /><br></br>
            <input type="text" placeholder="Employee ID" onChange={(event) => setEmployeeId(event.target.value)} /><br></br>

            <select onChange={(event) => setPositionType(event.target.value)}>
                 <option>Select Job Position</option>
                <option>Apprentice (A)</option>
                <option>Block Man (BM)</option>
                <option>Meat Technician (MT)</option>
                <option>Trainee Manager (TM)</option>
                <option>General Assistant (GA)</option>
            </select>
            <br></br>
            <button > Save changes </button>
        </div>
        
    </div>
    )
}

export default UpdateEmployee