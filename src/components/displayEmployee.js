import { Link } from "react-router-dom"

function DisplayEmployee (props){


     const click = (empID) =>{     // function for deleting data in local storage

        props.deleteEmployee(empID)
    }

    return (                                //using return to display the input data on a table
        <div className="dataTable">


        

    {props.paymaster.map((data)=>(
        <div className='list-Item' >

            <td>
            
                <h6 >{data.employeeName}</h6>
                
                </td>
            <td>
            
                <h6>{data.employeeSurname}</h6>
                </td>
            <td>
            
                <h6>{data.emailAdress}</h6>
            </td>

            <td>
  
                <h6>{data.phoneNumber}</h6>
                </td>
            <td>
       
                <h6>{data.employeeId}</h6>
                </td>
            <td>
       
                <h6>{data.positionType}</h6>
                
            </td>

            <button><Link to="/updateEmployee">Update</Link></button>
            <button onClick={()=>{click(data.employeeId)}}>Delete</button>
           
           
        </div>
 ))}
        </div>
    )
}

export default DisplayEmployee  // exporting component to the main file (app.js)
