import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import { cartreducer } from './redux/reducers/reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { DLT, ADD ,RMV } from './redux/actions/action';


const CardDetails = () => {
const dishpatch=useDispatch()
const history=useNavigate()
  const [data, setData] = useState([]);
  console.log(data)
  const { id } = useParams()

  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata)

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id
    })
    setData(compareData)
  }
  useEffect(() => {
    compare()
  }, [id])

  const delate=(id)=>{
    dishpatch(DLT(id))
    history("/");
  }

  const send = (e) => {
    // console.log(e)
    dishpatch(ADD(e))
}
const remove = (item) => {
  // console.log(e)
  dishpatch(RMV(item))
}
  return (
    <div className='container' >
      <h2 style={{ textAlign: "center", marginTop: "1.5rem" }}>Iteams Details Page</h2>

      <section className='container'
      >

        {
          data.map((ele) => {
            return (
              <>

                <div className='details' style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.082)", width: "70%",
                  marginTop: "4rem",
                  padding:"2rem",
                  marginLeft:"10rem"
                }}>
                  <div className='items_img' style={{marginRight:"2rem"}}>
                    <img src={ele.imgdata} />

                  </div>
                  <Table>
                    <tr>
                      <td>
                        <p><strong>Restaurant : </strong>  {ele.rname}</p>
                        <p><strong>Price : </strong>₹ {ele.price}</p>
                        <p><strong>Dishes : </strong>{ele.address}</p>
                        <p>Total : ₹ {ele.price * ele.qnty} </p>
                        <div style={{
                          display: "flex", gap: "2rem", background: "	#C0C0C0"
                          , width: "8rem", height: "4rem",
                          marginTop: "3rem"
                        }}>
                          <p style={{ fontSize: "2rem", cursor: "pointer" }}onClick={ele.qnty <=1 ? ()=>delate(ele.id):()=>remove(ele)}>-</p>
                          <p style={{ fontSize: "2rem" }} >{ele.qnty}</p>
                          <p style={{ fontSize: "2rem", cursor: "pointer" }} onClick={()=>send(ele)}>+</p>
                        </div>
                      </td>
                      <td>
                        <p><strong>Rating :{ele.rating} </strong> <span style={{
                          background: "	#008000"
                          , padding: "5px",
                          borderRadius: "3px",
                          color: 'white'
                        }}>3.8 ☆</span></p>
                        <p><strong>Order-review : </strong>{ele.somedata}</p>
                        <p onClick={()=>delate(ele)}><strong>Remove : </strong><i className="fa-solid fa-trash" 
                        
                        style={{
                          cursor: "pointer",
                          color: "red",
                          fontSize: "1.5rem"
                        }}></i></p>
                      </td>
                    </tr>
                  </Table>
                </div>

              </>
            )
          })
        }

      </section>

    </div>
  )
}

export default CardDetails