import React, { useState } from "react";
import { saveCategory } from "../../services/CategoryService";


const AddCategory = () => {
    const [formCategoryData, setFormCategoryData] = useState({});

    
    const handleCategoryhange = (e) => {
        //dung cu phap destructing trong es6
        const { name, value } = e.target;
        
        setFormCategoryData((formCategoryData) => ({
            ...formCategoryData,
            [name]: value,
        }));
        console.log(formCategoryData);
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();
        console.log(formCategoryData);
        if (
            formCategoryData.name 
        ) {
            try {
                const res = await saveCategory(formCategoryData);
                console.log(res);
                alert("Them danh muc thanh cong");
                window.location.href = "/admin/products"
            } catch (error) {
                console.log("Add product error: ", error);
                alert("Them danh muc khong thanh cong");
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
                            <form onSubmit={handleAddCategory} className="border p-3 rounded">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Tên san pham *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formcontrolname="name"
                                            id="name"
                                            name="name"
                                            value={formCategoryData.name}
                                            onChange={handleCategoryhange}
                                            placeholder="Vd: Danh muc A"
                                        />
                                    </div>
                                </div>

                                
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-md full-width bg-dark text-light fs-md ft-medium"
                                    >
                                        Them danh muc
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

export default AddCategory