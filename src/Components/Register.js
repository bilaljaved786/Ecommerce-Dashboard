import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../App.css';

function Register() {

    let [First, setFname] = useState("bilal");
    let [Last, setLname] = useState("javed");
    let [Email, setEmail] = useState("bilal@gmail.com");
    let [Company, setCompany] = useState("Dtek.ai");

    let navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();

        let data = { First, Last, Email, Company };
        let result = await fetch("https://api-generator.retool.com/neM4z0/EmployeeAsync", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })

        result = await result.json();
        localStorage.setItem("Register", JSON.stringify(result));
        navigate("/Add_product");
    }

    return (
        <div>
            <Header />
            <h1 className="register-form-padding">User Registration Form</h1><br />
            <form onSubmit={submitHandler}>

                <input type="text" value={First} placeholder='First Name' onChange={(e) => setFname(e.target.value)} ></input> <br /> <br />
                <input type="text" placeholder='Last Name' value={Last} onChange={(e) => setLname(e.target.value)} ></input> <br /> <br />
                <input type="text" placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)}></input> <br /> <br />
                <input type="text" placeholder='Company Name' value={Company} onChange={(e) => setCompany(e.target.value)}></input> <br /> <br />

                <button type="submit" >sign up</button>
            </form>
        </div>
    )
}

export default Register;