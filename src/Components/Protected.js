import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    let navigate = useNavigate();
    useEffect(() => {
        let userRegister = localStorage.getItem("Register");
        if (userRegister != null) {
            let login = localStorage.getItem("login");
            if (login == null)
                navigate("/Login");
        } else
            navigate("/Register");
    }, []);

    return (
        <>
            <props.cmp />
        </>
    )
}

export default Protected;