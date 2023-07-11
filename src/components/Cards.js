import React, { useState } from "react";
import Cardsdata from "./Cardsdata";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { ADD } from "./redux/actions/action";


const Cards = () => {

    const dishpatch=useDispatch()


    // add the items in the cart
    const [data, setData] = useState(Cardsdata)
    // console.log(data)
    const send = (e) => {
        // console.log(e)
        dishpatch(ADD(e))
    }
    // add the items in the cart XXXXX
    return (
        <>
            <div className="container">
                <h1 style={{ textAlign: "center", margin: "1rem 0px" }}>Add to Cart Projects</h1>
                <div className="row" style={{
                    display: "flex",
                    justifyContent: "center", alignItems: "center", gap: "2rem",
                }}>
                    {
                        data.map((element, id) => {
                            return (
                                <>
                                    <Card style={{ width: "20rem", border: "none", margin: "0.2rem 0px" }} className="card_item">
                                        <Card.Img variant="top" src={element.imgdata} style={{ height: '16rem' }} />
                                        <Card.Body>
                                            <Card.Title>{element.rname}</Card.Title>
                                            <Card.Text>
                                                Price : ₹ {element.price}
                                            </Card.Text>
                                            <div className="button_div"
                                                onClick={() => send(element)}
                                                style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                                                <Button variant="primary" style={{ width: "22rem" }}>Add to Cart</Button>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}
export default Cards