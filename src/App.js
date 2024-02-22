import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <button onClick={()=>alert("normal Button clicked")}>normal button</button> <br/><br/>
    <Button onClick={()=>alert("bootstrap Button clicked")}>bootstrap button</Button>
    </div>
  );
}

export default App;
