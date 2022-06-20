import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap"

const Showproduct = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            let result = await fetch("http://localhost:4000/app/showproduct")
            result = await result.json()
            console.log(result)
            setData(result)
        }

        fetchMyAPI()
    }, [])
    // console.log("result", data)
    return (
        <div>
            <h1>product List</h1>
            <Table striped bordered hover style={{border:"1px solid black"}}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Brand</td>
                    </tr>
                </tbody>
                {
                    data.map((item) => {

                        return <tr>

                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.brand}</td>
                        </tr>

                    })
                }


            </Table>
        </div>
    )
}

export default Showproduct