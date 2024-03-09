import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {

    let [Name, setName] = useState();
    let [price, setPrice] = useState();
    let [barcode, setBarcode] = useState();
    let navigate = useNavigate();

    const submitHandler = (event) =>
        event.preventDefault();

    async function AddProduct() {
        let product = { Name, price, barcode };
        await fetch("https://api-generator.retool.com/BTlJOs/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(product)
        })
        navigate("/Get_All_products");
    }

    const clearFields = () => {
        setName("");
        setPrice("");
        setBarcode("");
    }

    return (
        <div>
            <h1>Add Product</h1> &nbsp;
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