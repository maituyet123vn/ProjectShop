import React, { useEffect, useState } from "react";
import { deleteProduct, getProducts } from '../../services/ProductService'
import { Link } from "react-router-dom";

const AdminProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchedProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.log(error);
            }
        }
        fetchedProducts();
    }, []);

    const onDelete = async (id) => {
        try {
            const shouldRemove = window.confirm("Are you sure want to delete? ")
            if (shouldRemove) {
                await deleteProduct(id);
                window.location.reload(false);
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="sec_title position-relative text-center">
                        <h2 className="off_title">Quản lý sản phẩm</h2>
                        <h3 className="ft-bold pt-3">Quản lý sản phẩm</h3>
                    </div>
                </div>
            </div>
            <Link to={'/admin/add-product'} className="btn btn-primary">
                Thêm sản phẩm
            </Link>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Hình ảnh</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((item) => (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><img src="{item.image}" alt="" style={{ width: '100px' }} /></td>
                        <td>
                            <Link to={'/admin/edit-product/' + item._id} className="btn btn-sm btn-primary me-1 mr-1">Sửa</Link>
                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(item._id)}>Xoá</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductList