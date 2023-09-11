import Header from './components/Header';
import StudentList from './components/StudentList';
import AddForm from './components/AddForm';

import { useState } from "react";

function App() {
  // สร้าง State
  const [students, setStudent] = useState([
    { id: 1, name: "supawat", gender:"male"},
  ]);

  function deleteStudent(id){
    setStudent(students.filter(item=>item.id !==id))
  }

  return (
    <div className="App">
      <Header title="Basic-React"/>
      <main>
        <AddForm students={students} setStudent={setStudent}/>
        <StudentList count="จำนวนนักเรียน" students={students} deleteStudent={deleteStudent} />
      </main> 
    </div>
  );
}

export default App;
