import './App.css';
import Employee from './components/Employee.js';
import React, {useState} from 'react';

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("dev");
  return (
    <div className="App">
      {showEmployee ? (
      <>
      <input type="text" onChange={e => setRole(e.target.value)} />
      <Employee name="Samuelton" role="dev"/>
      <Employee role={role}/>
      <Employee role={role}/>
      </>
      ) : <p>No access</p> }
    </div>  
  );
}

export default App;
