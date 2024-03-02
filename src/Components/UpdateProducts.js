import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateProducts() {
    const { id } = useParams();
    let [Name, setName] = useState();
    let [price, setPrice] = useState();
    let [barcode, setBarcode] = useState();

    const submitHandler = (e) =>
        e.preventDefault();

    const clearFields = () => {
        setName("");
        setPrice("");
        setBarcode("");
    }

    async function updateProduct() {
        let product = { Name, price, barcode };
        let result = await fetch(`https://api-generator.retool.com/BTlJOs/data/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        let response = await result.json();
        console.log(response)
    }

    async function getData() {
        let result = await fetch(`https://api-generator.retool.com/BTlJOs/data/${id}`, {
            method: "GET",
        });
        let res = await result.json();
        setName(res.Name);
        setPrice(res.price);
        setBarcode(res.barcode);
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