import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

function ListOfEmps() {

  const [emps,setEmps]=useState([])
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const naviagate=useNavigate();

  const gotoEmployee=(empObj)=>{
    //navigate to /employee
    naviagate("/employee",{state:empObj});
  };

  const gotoEditEmployee=(empObj)=>{
    //navigate to /employee 
    naviagate("/edit-emp",{state:empObj});
  };

  const deletedEmployeeById=async(empObjId)=>{
    //console.log(empObjId);
    try
    {
      setLoading(true);
      let res=await axios.delete(`http://localhost:6002/emp-api/employees/${empObjId}`)
      if(res.status===200)
      {
        //get latest emps data
        getEmps();
      }
      else
      {
        let errorRes=await res.json();
        console.log(errorRes);
        throw new Error(errorRes);
      }
    }catch(error)
    {
      console.log("Error is: ",error)
      setError(error);
    }
    finally
    {
      setLoading(false);
    }
  }


  async function getEmps() {
    try{
      let res=await axios.get("http://localhost:6002/emp-api/list")
      if(res.status===200)
      {
        let resObj=await res.data;
        setEmps(resObj.payload);
      }
      else
      {
        let errorRes=await res.json();
        console.log(errorRes);
        throw new Error(errorRes);
      }
    }catch(error)
    {
      console.log("Error is: ",error)
      setError(error);
    }
    finally
    {
      setLoading(false);
    }
  }

  useEffect(()=> {
    getEmps();
  },[])


  return (
    <div>
      <h1 className="text-4xl text-center mb-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-5">
      {
        emps.map((empObj)=>
          <div key={empObj._id} className=" bg-white p-5 shadow-2xl text-center rounded-2xl">
              <p>Name: {empObj.name}</p> 
              <p>Email: {empObj.email}</p>
              <p>Mobile: {empObj.mobile}</p> 
              <p>Designation: {empObj.designation}</p>
              <p className="mb-4">Company Name: {empObj.companyName}</p>  
              <div className="flex justify-around">
                <button onClick={()=>gotoEmployee(empObj)} className="p-2 bg-green-600 rounded-2xl text-white">
                  View
                </button>
                <button onClick={()=>gotoEditEmployee(empObj)} className="p-2 bg-yellow-600 rounded-2xl text-white">
                  Edit
                </button>
                <button onClick={()=>deletedEmployeeById(empObj._id)}className="p-2 bg-red-600 rounded-2xl text-white">
                  Delete
                </button>
              </div>
          </div>
        )
      }
      </div>    
    </div>
  )
}

export default ListOfEmps