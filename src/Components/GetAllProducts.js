import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function GetAllProducts() {

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
        await fetch("https://api-generator.retool.com/BTlJOs/data/" + id, {
            method: "DELETE"
        })
        GetAllProd();
    }

    useEffect(() => {
        GetAllProd();
    }, []);

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
                                <tr key={index} >
                                    <td>{dat.id}</td>
                                    <td>{dat.Name}</td>
                                    <td>{dat.price}</td>
                                    <td>{dat.barcode}</td>
                                    <td><button className="wrapper-adjust-button" onClick={() => productDelete(dat.id)}>Delete</button> &nbsp;
                                        <button><Link className="wrapper-adjust-button" to={`/update_product/${dat.id}`}>Update</Link></button></td>
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default GetAllProducts;