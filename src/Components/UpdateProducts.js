import { useState, useEffect } from "react";

function UpdateProducts() {

    let [Name, setName] = useState();
    let [price, setPrice] = useState();
    let [barcode, setBarcode] = useState();
    let [image, setImage] = useState();

    function submitHandler(e) {
        e.preventDefault();
    }

    function AddProduct() {
        let product = { Name, price, barcode, image }
        console.log(product)
    }
    
    function clearFields() {
        setName("");
        setPrice("");
        setBarcode("");
        setImage("");
    }

    return (
        <div>
            <h1>Update Product Page</h1> &nbsp;

            <form onSubmit={submitHandler}>
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} ></input><br /><br />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} ></input><br /><br />
                <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} ></input><br /><br />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} ></input><br /><br />

                <button type="submit" onClick={() => AddProduct()}>Update Product</button> &nbsp;
                <button type="submit" onClick={() => clearFields()}>clear all</button>
            </form>
        </div>
    )
}

export default UpdateProducts;