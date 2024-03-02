import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateProducts() {
    const { id } = useParams();
    let [Name, setName] = useState();
    let [price, setPrice] = useState();
    let [barcode, setBarcode] = useState();
    let navigate = useNavigate();

    const submitHandler = (e) =>
        e.preventDefault();

    const clearFields = () => {
        setName("");
        setPrice("");
        setBarcode("");
    }

    async function updateProduct() {
        let product = { Name, price, barcode };
        await fetch(`https://api-generator.retool.com/BTlJOs/data/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        navigate("/Get_All_products");
    }

    async function getData() {
        let result = await fetch(`https://api-generator.retool.com/BTlJOs/data/${id}`, {
            method: "GET",
        });

        let response = await result.json();
        setName(response.Name);
        setPrice(response.price);
        setBarcode(response.barcode);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1>Update Product Page</h1> &nbsp;

            <form onSubmit={submitHandler}>
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} ></input><br /><br />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} ></input><br /><br />
                <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} ></input><br /><br />

                <button type="submit" onClick={() => updateProduct()}>Update Product</button> &nbsp;
                <button type="button" onClick={() => clearFields()}>clear all</button>
            </form>
        </div>
    )
}

export default UpdateProducts;