import { useState } from "react";

function AddProduct() {

    let [Name, setName] = useState();
    let [price, setPrice] = useState();
    let [barcode, setBarcode] = useState();

    function submitHandler(event) {
        event.preventDefault();
    }

    async function AddProduct() {
        let product = { Name, price, barcode };
        let result = await fetch("https://api-generator.retool.com/BTlJOs/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(product)
        })
        let response = await result.json();
        localStorage.setItem("Product", JSON.stringify(response));
    }

    function clearFields() {
        setName("");
        setPrice("");
        setBarcode("");
    }

    return (
        <div>
            <h1>Add Product Page</h1> &nbsp;

            <form onSubmit={submitHandler}>
                <input type="text" value={Name} placeholder="Name" onChange={(e) => setName(e.target.value)} ></input><br /><br />
                <input type="text" value={price} placeholder="price" onChange={(e) => setPrice(e.target.value)} ></input><br /><br />
                <input type="text" value={barcode} placeholder="barcode" onChange={(e) => setBarcode(e.target.value)} ></input><br /><br />
                <button type="submit" onClick={() => AddProduct()}>Add Product</button> &nbsp;
                <button type="submit" onClick={() => clearFields()}>clear all</button>
            </form>
        </div>
    )
}

export default AddProduct;