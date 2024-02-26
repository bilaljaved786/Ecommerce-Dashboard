import Header from "./Header";
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    let [username, setUserName] = useState("bilal");
    let [password, setPassword] = useState(null);
    let [wrongUserName, setwrongUserName] = useState(null);

    let navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();

        let RegisteredUser = JSON.parse(localStorage.getItem("Register"));
        console.log("RegisteredUser",RegisteredUser)
        if (RegisteredUser.First == username) {
            localStorage.setItem("login", JSON.stringify({ username, password }));
            navigate("/Home");
        }
        else{
            setwrongUserName("wrong username entered");
            navigate("/Login");
        }
    }

    return (
        <div className="App">
            <Header />
            <h1>login page</h1>
            <form onSubmit={(e) => submitHandler(e)}>

                <input type="text" value={username} placeholder="user name"
                    onChange={(e) => setUserName(e.target.value)} /><span>{wrongUserName}</span> <br /><br />

                <input type="text" value={password} placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} /><br /><br />

                <button type="submit">login user</button>
            </form>
        </div>
    )
}

export default Login;