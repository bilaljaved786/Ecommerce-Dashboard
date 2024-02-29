import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    let navigate = useNavigate();
    let [username, setUserName] = useState("bilal");
    let [password, setPassword] = useState("pakistan-147");
    let [wrongUserName, setwrongUserName] = useState(null);

    function submitHandler(e) {
        e.preventDefault();

        let RegisteredUser = JSON.parse(localStorage.getItem("Register"));
        if (RegisteredUser.First == username && password == "pakistan-147") {
            localStorage.setItem("login", JSON.stringify({ username, password }));
            navigate("/Home");
        }
        else {
            setwrongUserName("wrong username");
            navigate("/Login");
        }
    }

    return (
        <div className="App">
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