function DisplayEmployee (props){


    const click = () =>{     // function for deleting data in local storage
        
        localStorage.removeItem('paymaster')
        window.location.reload()   // reloads the page after delete is clicked
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

            <button>Update</button>
            <button onClick = {click}>Delete</button>
           
           
        </div>
 ))}
        </div>
    )
}

export default DisplayEmployee  // exporting component to the main file (app.js)
