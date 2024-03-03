import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function GetAllProducts() {

    let [data, setData] = useState([]);

    useEffect(() => {
        GetAllProd();
    }, []);

    async function GetAllProd() {
        const result = await fetch("https://api-generator.retool.com/BTlJOs/data", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        const jsonData = await result.json();
        console.log("from getAllprod function");
        setData(jsonData);
    }

    async function productDelete(id) {
        await fetch("https://api-generator.retool.com/BTlJOs/data/" + id, {
            method: "DELETE"
        })
        GetAllProd();
    }

    async function search(id) {
        const result = await fetch(`https://api-generator.retool.com/BTlJOs/data/${id}`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })

        const jsData = await result.json();
        if (Object.keys(jsData).length === 0) {
            setData([jsData]);

        } else {
            const dataArray = Array.isArray(jsData) ? jsData : [jsData];
            setData(dataArray);
        }
    }

    if (data.length != 0)
        console.log("fetching data", data);

    return (
        <div>
            <span>search</span><input type="text" onChange={(e) => search(e.target.value)} />
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
                                {
                                    (Object.keys(dat).length !== 0)
                                        ? <td><button className="wrapper-adjust-button" onClick={() => productDelete(dat.id)}>Delete</button> &nbsp;
                                            <button><Link className="wrapper-adjust-button" to={`/update_product/${dat.id}`}>Update</Link></button></td>
                                        : null
                                }

                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default GetAllProducts;