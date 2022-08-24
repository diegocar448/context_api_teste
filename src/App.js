import { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import Hello from './components/Hello';
import './App.css';


function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = ({name, email}) => {
    console.log('dados APP', {name, email});
    
    setName(name);
    setEmail(email);
  }

  return (
    <div className="app">
      <Hello name={ name }/>
      <CustomerForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default App;
