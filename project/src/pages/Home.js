import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { getProducts } from '../services/ProductService'
import { useShoppingContext } from "../contexts/ShoppingContext";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { addCartItem } = useShoppingContext();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts();
    }, []);

    return (
        <section className="middle">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="sec_title position-relative text-center">
                            <h2 className="off_title">Trendy Products</h2>
                            <h3 className="ft-bold pt-3">Our Trending Products</h3>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row align-items-center rows-products">
                    {/* Single */}
                    {products.map((item) => (
                        <div key={item._id} className="col-xl-3 col-lg-4 col-md-6 col-6">
                            <div className="product_grid card b-0">
                                <div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">
                                    Sale
                                </div>
                                <button className="btn btn_love position-absolute ab-right snackbar-wishlist">
                                    <i className="far fa-heart" />
                                </button>
                                <div className="card-body p-0">
                                    <div className="shop_thumb position-relative">
                                        <Link to={`/product/${item._id}`} className="card-img-top d-block overflow-hidden">
                                            <img src={item.image} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="product-hover-overlay bg-dark d-flex align-items-center justify-content-center">
                                            <div className="edlio">
                                                {/* <a routerLink="product/{{prod._id}}" data-toggle="modal" data-target="#quickview"
            class="text-white fs-sm ft-medium"><i class="fas fa-eye mr-1"></i>Quick View</a> */}
                                                <a onClick={() => addCartItem(item)} className="text-white fs-sm ft-medium">
                                                    <i className="fas fa-eye mr-1" />
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footers b-0 pt-3 px-2 bg-white d-flex align-items-start justify-content-center">
                                    <div className="text-left">
                                        <div className="text-center">
                                            <h5 className="fw-bolder fs-md mb-0 lh-1 mb-1">
                                                <Link to={`/product/${item._id}`}>{item.name}</Link>
                                            </h5>
                                            <div className="elis_rty">
                                                <span className="ft-bold fs-md text-dark">${item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home;