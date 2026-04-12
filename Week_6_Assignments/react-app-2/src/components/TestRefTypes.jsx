import {useState} from 'react';

function TestRefTypes()
{
    //state
    const [user,setUser]=useState({name:"Ravi",age:41,city:"Hyderabad"});
    const [marks,setMarks]=useState([10,20,30]);

    //update user
    const updateUser=()=>{
        setUser({...user,name:"bhanu"});
    }

    //update marks
    const updateMarks=()=>{
        setMarks([...marks,40]);
    }

    return(
        <div className="text-center mt-9">
            <p className="text-3xl">Username: {user.name}</p>
            <p className="text-3xl">Age: {user.age}</p>
            <p className="text-3xl">City: {user.city}</p>

            <button className="p-5 bg-amber-600" onClick={updateUser}>Update User</button>

            {
                marks.map((mark)=>{
                    <p className="text-3xl" key={mark}>
                        {mark}
                    </p>
                })
            }

            <button className="p-5 bg-amber-600" onClick={updateMarks}>Update Marks</button>
        </div>
    )
}

export default TestRefTypes