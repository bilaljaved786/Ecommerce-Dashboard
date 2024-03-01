import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import React from "react";

function GetAllProducts() {

    let [data, setData] = useState([]);

    async function GetAllProd() {

        const result = await fetch("https://api-generator.retool.com/qBnfmg/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        const jsonData = await result.json();
        setData(jsonData);
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
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, index) =>
                            (d.id < 50)
                                ?
                                <tr key={index} >
                                    <td>{d.id}</td>
                                    <td>{d.Name}</td>
                                    <td>{d.price}</td>
                                    <td>{d.barcode}</td>
                                    <td ><img style={{ height: '30px' }} src={d.image} /></td>
                                    <td><button>Update</button> &nbsp; <button>Delete</button></td>
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