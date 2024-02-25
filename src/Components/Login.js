import Header from "./Header";
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    let [username, setUserName] = useState(null);
    let [password, setPassword] = useState(null);
    let navigate = useNavigate();
    
    function submitHandler(event) {
        event.preventDefault();

        console.log("username and password", { username, password })
        localStorage.setItem("login", JSON.stringify({ username, password }));
        navigate("/Home");
    }

    return (
        <div className="App">
            <Header />
            <h1>login page</h1>
            <form onSubmit={(e) => submitHandler(e)}>

                <input type="text" value={username} placeholder="user name" 
                    onChange={(e)=>setUserName(e.target.value)} /><br /><br />
                    
                <input type="text" value={password} placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)} /><br /><br />
                    
                <button type="submit">login user</button>
            </form>
        </div>
    )
}

export default Login;