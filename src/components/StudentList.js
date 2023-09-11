import Item from "./Item";
import { useState } from "react";
import "./custom-css/StudentList.css"

function StudentList(props){
    const [show,setShow]=useState(true);
    
    const {students,deleteStudent} = props;

    const btnStyle = {
      background:show? "red" : "green",
    }

    const changeWord = show?"Hide" : "Show"
    
    return(
        <>
            <ul>
            <div className="custom-button-hide">
                <h1 style={{color:"orange"}}>{props.count} : {students.length}</h1>
                <button onClick={()=>setShow(!show)} style={btnStyle}>{changeWord}</button> 
            </div>
            {show && students.map((data)=>(
              <Item key={data.id} data={data} deleteStudent={deleteStudent}/>
            ))}
            </ul>
        </>
    );
}
export default StudentList;