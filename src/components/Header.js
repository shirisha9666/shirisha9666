import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { DLT } from "./redux/actions/action";
import Menu from '@mui/material/Menu';
import { Table } from "@mui/material";




const Header = () => {
    const dishpatch = useDispatch()

    // add the items in the cart

    const getdata = useSelector((state) => state.cartreducer.carts)
    // console.log(getdata)
    // add the items in the cart XXXXX
    const [price, setPrice] = useState(0)
    console.log(price)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const delate = (id) => {
        dishpatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setPrice(price)
    }
    useEffect(() => {
        total()
    }, [total])
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" style={{ textDecoration: "none", color: "white", marginRight: "1rem" }}>Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink style={{ textDecoration: "none", color: "white" }}>Home</NavLink>

                    </Nav>


                    <Badge badgeContent={getdata.length} color="primary"

                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa-solid fa-cart-shopping" style={{
                            color: "white",
                            fontSize: "2rem",
                            cursor: "pointer"
                        }}></i>


                    </Badge>




                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className="card_details" style={{ width: "24rem", padding: "10px", }}>
                                <Table >
                                    <thead>
                                        <tr style={{ borderBottom: "3px black solid", }}>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr style={{ borderBottom: "1px solid black" }}>
                                                            <td>
                                                                <NavLink to={`/Cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: "5rem", height: "5rem", marginTop: "1rem" }} alt="" />
                                                                </NavLink>

                                                            </td>
                                                            <td style={{ borderBottom: "1px solid black" }}>
                                                                <p>{e.rname}</p>
                                                                <p> Price : ₹{e.price}</p>
                                                                <p>Quantiy : {e.qnty}</p>
                                                                <p style={{ cursor: "pointer", color: "red", fontSize: "1.5rem" }}>
                                                                    <i class="fa-sharp fa-solid fa-trash smalltrash" onClick={() => delate(e.id)}></i>
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p style={{
                                                                    cursor: "pointer", color: "red", fontSize: "1.5rem",
                                                                    position: "relative", bottom: "30px"
                                                                }}>
                                                                    <i class="fa-sharp fa-solid fa-trash largetrash" onClick={() => delate(e.id)}></i>
                                                                </p>
                                                            </td>

                                                        </tr>

                                                    </>
                                                )
                                            })
                                        }
                                        <p style={{
                                            textAlign: "center",
                                            margin: "1.5rem",
                                        }}><strong>Total :</strong>₹ {price}</p>
                                    </tbody>
                                </Table>

                            </div>

                            :
                            <div className="card_details" style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "24rem",
                                height: "3rem",
                                gap: "1rem"
                            }}>
                                <i className="fas fa-close"
                                    onClick={handleClose}
                                    style={{
                                        position: "absolute",
                                        top: "4px",
                                        right: "20px",
                                        cursor: "pointer",
                                        fontSize: "1.2rem"

                                    }}></i>
                                <p style={{ fontSize: '1.5rem' }}>Your Cart is empty</p>
                                <img
                                    style={{ height: "4rem" }}
                                    src="https://github.com/harsh17112000/react_redux_cart_youtube/blob/main/public/cart.gif?raw=true" />
                            </div>

                    }




                </Menu>
            </Navbar>
        </>
    )
}
export default Header