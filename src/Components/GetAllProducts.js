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
        console.log("cc get Api data fetched", data)
    }

    return (
        <div>
            <br /><br />
            <Table striped hover >
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product barcode</th>
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        data.map((d, index) =>
                            <tr>
                                <td>{d.Name}</td>
                                <td>@mdo</td> <span>Delete</span> &nbsp; <span>Update</span>
                            </tr>
                        )
                    } */}

                </tbody>
            </Table>
        </div>
    )
}

export default GetAllProducts;