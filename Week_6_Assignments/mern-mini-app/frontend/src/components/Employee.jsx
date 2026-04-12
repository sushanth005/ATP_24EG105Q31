import { useLocation } from "react-router";

function Employee() {
  //read state recieved in navigation
  const {state} = useLocation();

  return (
    <div className="p-16 text-center text-2xl">
      <h2 className="text-3xl mb-3">Employee Details:</h2>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
      <p>Designation: {state.designation}</p>
      <p>Company Name: {state.companyName}</p>
    </div>
  )
}

export default Employee