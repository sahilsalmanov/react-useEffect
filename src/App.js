import './App.css';
import Users from './components/Users';
import Posts from './components/Posts';
import { useState } from 'react';

function App() {


  const [value,setValue] = useState(0)

  function func(value) {
    setValue(value)
  }


  return (
    <div className="App">
   <Users func = {func}/>
   <Posts func = {value}/>
    </div>
  );
}

export default App;
