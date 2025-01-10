import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useShoppingContext } from "../contexts/ShoppingContext";

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, totalPrice, clearCart, removeCartItem, increaseQty, decreaseQty } = useShoppingContext();
  return (
    <div className="row">
            <h3>Giỏ hàng</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => {
                        return (
                            <tr key={item._id}>
                                <td><img width="150px" src={item.image} className='img-fluid rounded' alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}
                                    <button type="button" className="btn btn-sm btn-primary ms-3 me-1 ml-1 mr-1" onClick={() => decreaseQty(item._id)}><strong>-</strong></button>
                                    <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQty(item._id)}><strong>+</strong></button>
                                </td>
                                <td>{item.price * item.qty}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(item._id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='col-md-12'>
                <span className='float-end me-2'><strong>Total: {totalPrice}</strong></span>
            </div>
            <div className='col-md-2 mt-5 mb-5'>
                <Link to='/products' className='btn btn-sm btn-primary float-start'>Tiếp tục mua hàng</Link>
            </div>
            <div className='col-md-2 mt-5 mb-5'>
                <button className='btn btn-sm btn-success float-end me-2 d-block' onClick={() => {
                    clearCart()
                    navigate('/products')
                }}>Đặt hàng</button>
            </div>
        </div>
  )
}

export default Cart