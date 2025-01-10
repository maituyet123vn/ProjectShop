import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from '../services/CategoryService';
import { checkLogin } from '../services/AuthService';
import { useShoppingContext } from "../contexts/ShoppingContext";

const Header = () => {
    const [keyword, setKeyword] = useState([]);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [isLogin, setIsLogin] = useState("");

    const { cartQty } = useShoppingContext();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategories();
                setCategories(fetchedCategories);
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategories();

        let isCheckLogin = checkLogin();
        setIsLogin(isCheckLogin);
    }, []);

    const onSearch = () => {
        if (keyword.trim()) {
          navigate(`/products?keyword=${keyword}`);
        }
    };

    const onLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div className="header header-light dark-text">
            <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                    <div className="nav-header">
                        <a className="nav-brand" href="#">
                            <img src="./assets/img/logo.png" className="logo" alt="" />
                        </a>
                        <div className="nav-toggle" />
                        <div className="mobile_nav">
                            <ul>
                                <li>
                                    <a href="#" onclick="openSearch()">
                                        <i className="lni lni-search-alt" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#login">
                                        <i className="lni lni-user" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onclick="openWishlist()">
                                        <i className="lni lni-heart" />
                                        <span className="dn-counter">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onclick="openCart()">
                                        <i className="lni lni-shopping-basket" />
                                        <span className="dn-counter">0</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}>
                        <ul className="nav-menu">
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Product</a>
                                <ul className="nav-dropdown nav-submenu">
                                    {categories.map((item) => (
                                        <li>
                                            <Link to={`/products?category=${item._id}`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li>
                            {keyword}<input
                                type="text"
                                name="keyword"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                />
                                <a onClick={onSearch}>
                                    <i className="lni lni-search-alt" />
                                </a>
                            </li>
                            <li>
                                <a href="#" data-toggle="modal" data-target="#login">
                                    <i className="lni lni-user" />
                                </a>
                            </li>
                            <li>
                                <a href="#" onclick="openWishlist()">
                                    <i className="lni lni-heart" />
                                    <span className="dn-counter">2</span>
                                </a>
                            </li>
                            <li>
                                <Link to={`/cart`}>
                                    <i className="lni lni-shopping-basket" />
                                    <span className="dn-counter theme-bg">{cartQty}</span>
                                </Link>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Tài Khoản</a>
                                <ul className="nav-dropdown nav-submenu">
                                    {!isLogin && (
                                        <>
                                        <li>
                                            <Link to={`/login`}>Đăng nhập</Link>
                                        </li>
                                        <li>
                                            <Link to={`/login`}>Đăng ký</Link>
                                        </li>
                                        </>
                                    )}
                                    
                                    <li>
                                        <Link to={`/admin/products`}>Trang Quản Trị</Link>
                                    </li>
                                    {isLogin && (
                                        <>
                                        <li>
                                            <a>Cập nhật tài khoản</a>
                                        </li>
                                        <li>
                                            <a onClick={onLogout}>Đăng Xuất</a>
                                        </li>
                                        </>
                                    )}
                                </ul>
                            </li>
                            <li>
                                <a>Xin Chào Admin</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header