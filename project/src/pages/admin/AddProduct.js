import React, { useEffect, useState } from "react";
import { saveProduct } from "../../services/ProductService";
import { getCategories } from "../../services/CategoryService";

const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [formProductData, setFormProductData] = useState({});

    //Hook useEffect duoc su dung de goi API lay ds san pham khi component duoc render
    useEffect(() => {
        //Lay ds danh muc
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategories();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Error fetching categories: ", error);

            }
        };
        //Goi ham getchCategories de lay du lieu khi component duoc render
        fetchCategories();
    }, []);

    const handleProductChange = (e) => {
        //dung cu phap destructing trong es6
        const { name, value } = e.target;
        console.log(e.target);
        console.log(name);
        console.log(value);
        //Cap nhat formProductData voi gia tri moi khi input thay doi
        //{...formProductData} la cach su dung cu phap spread de tao mot ban sao moi cua formProductData
        //[name]: value: Day la cu phap su dung computed property name.
        //No cho phep them hoac cap nhat mot thuoc tinh trong doi tuong moi voi ten la gia tri cua bien name
        // va gan gia tri value cho thuoc tinh do
        setFormProductData((formProductData) => ({
            ...formProductData,
            [name]: value,
        }));
        console.log(formProductData);
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        console.log(formProductData);
        if (
            formProductData.name &&
            formProductData.image &&
            formProductData.desc &&
            formProductData.category &&
            formProductData.price
        ) {
            try {
                const res = await saveProduct(formProductData);
                console.log(res);
                alert("Them san pham thanh cong");
                window.location.href = "/admin/products"
            } catch (error) {
                console.log("Add product error: ", error);
                alert("Them san pham khong thanh cong");
            }
        } else {
            alert("Vui long nhap hop le");
            return console.log("Khong hop le");

        }
    }

    return (
        <>
            <div className="gray py-3">
                <div className="container">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Pages</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Login
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================= Top Breadcrubms ======================== */}
            {/* ======================= Login Detail ======================== */}
            <section className="middle">
                <div className="container">
                    <div className="row align-items-start justify-content-between">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mfliud">
                            <form onSubmit={handleAddProduct} className="border p-3 rounded">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Tên san pham *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formcontrolname="name"
                                            id="name"
                                            name="name"
                                            value={formProductData.name}
                                            onChange={handleProductChange}
                                            placeholder="Vd: San pham A"
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Danh muc *</label>
                                        <select
                                            id="productCategory"
                                            name="category"
                                            className="form-control"
                                            value={formProductData.category}
                                            onChange={handleProductChange}>
                                            {categories &&
                                                categories.map((category) => (
                                                    <option key={category._id} value={category._id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Hinh anh *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formcontrolname="image"
                                            id="image"
                                            name="image"
                                            value={formProductData.image}
                                            onChange={handleProductChange}
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Gia *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formcontrolname="price"
                                            id="price"
                                            name="price"
                                            value={formProductData.price}
                                            onChange={handleProductChange}
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Mo ta *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formcontrolname="desc"
                                            id="desc"
                                            name="desc"
                                            value={formProductData.desc}
                                            onChange={handleProductChange}
                                            placeholder=""
                                        />
                                    </div>
                                </div>




                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-md full-width bg-dark text-light fs-md ft-medium"
                                    >
                                        Them san pham
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= Login End ======================== */}
        </>
    );
};

export default AddProduct;