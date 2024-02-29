import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();

    let login = localStorage.getItem("login");
    if (login == null) {
        navigate("/Login")
    }
    return (
        <>
            <h1>Dashboard page</h1>
        </>
    )
}

export default Home;