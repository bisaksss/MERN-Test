import React,{useState} from "react";
import axios from "axios";

export default function AddStudent()
{

    const [name,setName]= useState("");
    const [age,setAge]= useState("");
    const [gender,setGender]= useState("");

    
    let updateName=(event)=>
    {
        setName(event.target.value)
    }
    let updateAge=(event)=>
    {
        setAge(event.target.value)
    }

    let updateGender=(event)=>
    {
        setGender(event.target.value)
    }
 


    let setData=(event)=>
    {
        event.preventDefault();
        const newStudent={
            name,
            age,
            gender
        }
       // console.log(newStudent)

       axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
           alert("Student Added");

           setName("");
           setAge("");
           setGender("");
 
       }).catch((err)=>{
            alert(err);
       })

     

    }









    return(
        
        <div className="container">
        <form onSubmit={setData}> 
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Student Name" onChange={updateName}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Student Age" onChange={updateAge}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Student Gender" onChange={updateGender}/>
                </div>
          
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}