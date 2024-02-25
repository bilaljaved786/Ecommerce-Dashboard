import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Protected(props) {
    let navigate = useNavigate();
    let location = useLocation();

    // handling of protected routes inside the useEffect hook
    useEffect(() => {
        console.log("useEffect calling", location.pathname);

        let userRegister = localStorage.getItem("Register");
        if (userRegister != null) {

            let login = localStorage.getItem("login");
            if (login == null)
                navigate("/Login");
            else
                navigate("/Home");
        } else
            navigate("/Register");

    }, []);

    return (
        <>
        {console.log("path name from protected page", location.pathname)}
            <props.cmp />
        </>
    )
}

export default Protected;