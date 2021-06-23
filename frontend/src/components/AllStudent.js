import axios from "axios";
import React,{useState,useEffect} from "react";

export default function AllStudent(){

    const[students,setStudents]=useState([]);

    useEffect(()=>{
       const getStudent=()=>{
            axios.get("http://localhost:8070/student/").then((res)=>{
                //console.log(res.data);
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
       getStudent();
    },[])





    return(
        <div className="container">
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                    </thead>
                    <thead>
                        {
                            students.map((value,key)=>(
                                <tr key={key}>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.gender}</td>
                               </tr>

                            ))
                          

                        }
                           
                    </thead>

                 </table>
            </div>
        </div>
        </div>

    );
}

