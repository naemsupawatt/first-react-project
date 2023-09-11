import { useState } from "react";
import "./custom-css/AddForm.css"
function AddForm(props){
    const{students,setStudent} = props;
    
    const[name,setName] = useState("Set name");
    const[gender,setGender] = useState("male");
    function saveStudent(e){
        e.preventDefault();
        if(!name){
            alert("ป้อนชื่อด้วยครับ")
        }else{
            const newStudent={
                id:Math.floor(Math.random()*1000),
                name:name,
                gender:gender
            }
            setStudent([...students,newStudent])
            setName("");
            setGender("male");
        }
    }
    return(
        <section className="container">
            <form onSubmit={saveStudent}>
                <label>ชื่อนักเรียน</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                </select>
                <button type="submit" className="btn-add">Save</button>
            </form>
        </section>
    );
}
export default AddForm;