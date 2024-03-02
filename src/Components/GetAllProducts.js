import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import React from "react";
import { Link } from "react-router-dom";

function GetAllProducts() {

    console.log("from the top");
    let [data, setData] = useState([]);

    async function GetAllProd() {
        const result = await fetch("https://api-generator.retool.com/BTlJOs/data", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        const jsonData = await result.json();
        setData(jsonData);
    }

    async function productDelete(id) {
        console.log("Product Delete Id Select", id);
        let result = await fetch("https://api-generator.retool.com/BTlJOs/data/" + id, {
            method: "DELETE"
        })
        console.log("product delete status",result.status);
        GetAllProd();
    }

    const productUpdate = (id) => {
        console.log("Product Update Id Select", id);
    }

    useEffect(() => {
        GetAllProd();
    },[]);

    if (data.length != 0) {
        console.log("Get Api Data Fetched", data)
    }

    return (
        <div>
            <br /><br />
            <Table striped hover >
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product barcode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dat, index) =>
                            (dat.id < 50)
                                ?
                                <tr key={index} >
                                    <td>{dat.id}</td>
                                    <td>{dat.Name}</td>
                                    <td>{dat.price}</td>
                                    <td>{dat.barcode}</td>
                                    <td><button onClick={() => productUpdate(dat.id)}>Update</button> &nbsp;
                                        <button><Link to={"/update_product"}>Update product</Link></button></td>
                                </tr>
                                :
                                null
                        ) 
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default GetAllProducts;