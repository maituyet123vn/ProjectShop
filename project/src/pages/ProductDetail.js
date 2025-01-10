import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProduct } from '../services/ProductService'

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProduct(id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className="middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-12">
                                    <a href="" data-lightbox="roadtrip" className="d-block mb-4">
                                        <img src={product.image} className="img-fluid rounded" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="brd_crumbs mb-3">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Library</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Data
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="prt_01 mb-1 d-flex align-items-center justify-content-between">
                                {/* <div class="flex-1"><span class="text-muted ft-medium">Up to 50% Off</span></div> */}
                                {/* <div class=""><span class="bg-danger text-light rounded py-1 px-2">Up to 50% Off</span></div> */}
                            </div>
                            <div className="prt_02 mb-3">
                                <h2 className="ft-bold mb-1">{product.name}</h2>
                                <div className="text-left">
                                    <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        {/* <span class="small">(412 Reviews)</span> */}
                                    </div>
                                    <div className="elis_rty">
                                        <span className="ft-medium text-muted line-through fs-md mr-2">
                                            10000
                                        </span>
                                        <span className="ft-bold theme-cl fs-lg mr-2">{product.price}</span>
                                        <span className="ft-regular text-light bg-success py-1 px-2 fs-sm">
                                            In Stock
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="prt_03 mb-4">
                                <p>
                                {product.desc}
                                </p>
                            </div>
                            <div className="short_products_info_body mb-4">
                                {/* Single Option */}
                                <div className="single_search_boxed">
                                    <div className="widget-boxed-header">
                                        <h4>
                                            <a
                                                href="#choosesize"
                                                data-toggle="collapse"
                                                className="collapsed"
                                                aria-expanded="false"
                                                role="button"
                                            >
                                                <i className="ti-view-list mr-2" />
                                                Select Sizes
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        className="widget-boxed-body collapse"
                                        id="choosesize"
                                        data-parent="#choosesize"
                                    >
                                        <div className="card-body pt-0 side-list no-border">
                                            {/* Choose Size */}
                                            <div className="text-left pb-0 pt-2">
                                                <div className="form-check size-option form-option form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={28}
                                                        defaultChecked=""
                                                    />
                                                    <label className="form-option-label" htmlFor={28}>
                                                        28
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={30}
                                                    />
                                                    <label className="form-option-label" htmlFor={30}>
                                                        30
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={32}
                                                    />
                                                    <label className="form-option-label" htmlFor={32}>
                                                        32
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={34}
                                                    />
                                                    <label className="form-option-label" htmlFor={34}>
                                                        34
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={36}
                                                    />
                                                    <label className="form-option-label" htmlFor={36}>
                                                        36
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={38}
                                                    />
                                                    <label className="form-option-label" htmlFor={38}>
                                                        38
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={40}
                                                    />
                                                    <label className="form-option-label" htmlFor={40}>
                                                        40
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={42}
                                                    />
                                                    <label className="form-option-label" htmlFor={42}>
                                                        42
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={44}
                                                    />
                                                    <label className="form-option-label" htmlFor={44}>
                                                        44
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={46}
                                                    />
                                                    <label className="form-option-label" htmlFor={46}>
                                                        46
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={48}
                                                    />
                                                    <label className="form-option-label" htmlFor={48}>
                                                        48
                                                    </label>
                                                </div>
                                                <div className="form-check form-option size-option  form-check-inline mb-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id={50}
                                                    />
                                                    <label className="form-option-label" htmlFor={50}>
                                                        50
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="prt_05 mb-4">
                                <div className="form-row mb-7">
                                    <div className="col-12 col-lg-auto">
                                        {/* Quantity */}
                                        <select className="mb-2 custom-select">
                                            <option value={1} selected="">
                                                1
                                            </option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-lg">
                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            className="btn btn-block custom-height bg-dark mb-2"
                                        >
                                            <i className="lni lni-shopping-basket mr-2" />
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className="col-12 col-lg-auto">
                                        {/* Wishlist */}
                                        <button
                                            className="btn custom-height btn-default btn-block mb-2 text-dark"
                                            data-toggle="button"
                                        >
                                            <i className="lni lni-heart mr-2" />
                                            Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="prt_06">
                                <p className="mb-0 d-flex align-items-center">
                                    <span className="mr-4">Share:</span>
                                    <a
                                        className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2"
                                        href="#!"
                                    >
                                        <i className="fab fa-twitter position-absolute" />
                                    </a>
                                    <a
                                        className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2"
                                        href="#!"
                                    >
                                        <i className="fab fa-facebook-f position-absolute" />
                                    </a>
                                    <a
                                        className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted"
                                        href="#!"
                                    >
                                        <i className="fab fa-pinterest-p position-absolute" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= Product Detail End ======================== */}
            {/* ======================= Product Description ======================= */}
            <section className="middle">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12">
                            <ul
                                className="nav nav-tabs b-0 d-flex align-items-center justify-content-center simple_tab_links mb-4"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link active"
                                        id="description-tab"
                                        href="#description"
                                        data-toggle="tab"
                                        role="tab"
                                        aria-controls="description"
                                        aria-selected="true"
                                    >
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        href="#information"
                                        id="information-tab"
                                        data-toggle="tab"
                                        role="tab"
                                        aria-controls="information"
                                        aria-selected="false"
                                    >
                                        Additional information
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        href="#reviews"
                                        id="reviews-tab"
                                        data-toggle="tab"
                                        role="tab"
                                        aria-controls="reviews"
                                        aria-selected="false"
                                    >
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                {/* Description Content */}
                                <div
                                    className="tab-pane fade show active"
                                    id="description"
                                    role="tabpanel"
                                    aria-labelledby="description-tab"
                                >
                                    <div className="description_info">
                                        <p className="p-0 mb-2">
                                            desc here desc here desc here desc here desc here desc here{" "}
                                        </p>
                                    </div>
                                </div>
                                {/* Additional Content */}
                                <div
                                    className="tab-pane fade"
                                    id="information"
                                    role="tabpanel"
                                    aria-labelledby="information-tab"
                                >
                                    <div className="additionals">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="ft-medium text-dark">ID</th>
                                                    <td>#1253458</td>
                                                </tr>
                                                <tr>
                                                    <th className="ft-medium text-dark">SKU</th>
                                                    <td>KUM125896</td>
                                                </tr>
                                                <tr>
                                                    <th className="ft-medium text-dark">Color</th>
                                                    <td>Sky Blue</td>
                                                </tr>
                                                <tr>
                                                    <th className="ft-medium text-dark">Size</th>
                                                    <td>Xl, 42</td>
                                                </tr>
                                                <tr>
                                                    <th className="ft-medium text-dark">Weight</th>
                                                    <td>450 Gr</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* Reviews Content */}
                                <div
                                    className="tab-pane fade"
                                    id="reviews"
                                    role="tabpanel"
                                    aria-labelledby="reviews-tab"
                                >
                                    <div className="reviews_info">
                                        <div className="single_rev d-flex align-items-start br-bottom py-3">
                                            <div className="single_rev_thumb">
                                                <img
                                                    src="assets/img/team-1.jpg"
                                                    className="img-fluid circle"
                                                    width={90}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single_rev_caption d-flex align-items-start pl-3">
                                                <div className="single_capt_left">
                                                    <h5 className="mb-0 fs-md ft-medium lh-1">
                                                        Daniel Rajdesh
                                                    </h5>
                                                    <span className="small">30 jul 2021</span>
                                                    <p>
                                                        At vero eos et accusamus et iusto odio dignissimos
                                                        ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi
                                                        sint occaecati cupiditate non provident, similique sunt
                                                        in culpa qui officia deserunt mollitia animi, id est
                                                        laborum
                                                    </p>
                                                </div>
                                                <div className="single_capt_right">
                                                    <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Review */}
                                        <div className="single_rev d-flex align-items-start br-bottom py-3">
                                            <div className="single_rev_thumb">
                                                <img
                                                    src="assets/img/team-2.jpg"
                                                    className="img-fluid circle"
                                                    width={90}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single_rev_caption d-flex align-items-start pl-3">
                                                <div className="single_capt_left">
                                                    <h5 className="mb-0 fs-md ft-medium lh-1">Seema Gupta</h5>
                                                    <span className="small">30 Aug 2021</span>
                                                    <p>
                                                        At vero eos et accusamus et iusto odio dignissimos
                                                        ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi
                                                        sint occaecati cupiditate non provident, similique sunt
                                                        in culpa qui officia deserunt mollitia animi, id est
                                                        laborum
                                                    </p>
                                                </div>
                                                <div className="single_capt_right">
                                                    <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Review */}
                                        <div className="single_rev d-flex align-items-start br-bottom py-3">
                                            <div className="single_rev_thumb">
                                                <img
                                                    src="assets/img/team-3.jpg"
                                                    className="img-fluid circle"
                                                    width={90}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single_rev_caption d-flex align-items-start pl-3">
                                                <div className="single_capt_left">
                                                    <h5 className="mb-0 fs-md ft-medium lh-1">
                                                        Mark Jugermi
                                                    </h5>
                                                    <span className="small">10 Oct 2021</span>
                                                    <p>
                                                        At vero eos et accusamus et iusto odio dignissimos
                                                        ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi
                                                        sint occaecati cupiditate non provident, similique sunt
                                                        in culpa qui officia deserunt mollitia animi, id est
                                                        laborum
                                                    </p>
                                                </div>
                                                <div className="single_capt_right">
                                                    <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Review */}
                                        <div className="single_rev d-flex align-items-start py-3">
                                            <div className="single_rev_thumb">
                                                <img
                                                    src="assets/img/team-4.jpg"
                                                    className="img-fluid circle"
                                                    width={90}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single_rev_caption d-flex align-items-start pl-3">
                                                <div className="single_capt_left">
                                                    <h5 className="mb-0 fs-md ft-medium lh-1">
                                                        Meena Rajpoot
                                                    </h5>
                                                    <span className="small">17 Dec 2021</span>
                                                    <p>
                                                        At vero eos et accusamus et iusto odio dignissimos
                                                        ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi
                                                        sint occaecati cupiditate non provident, similique sunt
                                                        in culpa qui officia deserunt mollitia animi, id est
                                                        laborum
                                                    </p>
                                                </div>
                                                <div className="single_capt_right">
                                                    <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews_rate">
                                        <form className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <h4>Submit Rating</h4>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="revie_stars d-flex align-items-center justify-content-between px-2 py-2 gray rounded mb-2 mt-1">
                                                    <div className="srt_013">
                                                        <div className="submit-rating">
                                                            <input
                                                                id="star-5"
                                                                type="radio"
                                                                name="rating"
                                                                defaultValue="star-5"
                                                            />
                                                            <label htmlFor="star-5" title="5 stars">
                                                                <i
                                                                    className="active fa fa-star"
                                                                    aria-hidden="true"
                                                                />
                                                            </label>
                                                            <input
                                                                id="star-4"
                                                                type="radio"
                                                                name="rating"
                                                                defaultValue="star-4"
                                                            />
                                                            <label htmlFor="star-4" title="4 stars">
                                                                <i
                                                                    className="active fa fa-star"
                                                                    aria-hidden="true"
                                                                />
                                                            </label>
                                                            <input
                                                                id="star-3"
                                                                type="radio"
                                                                name="rating"
                                                                defaultValue="star-3"
                                                            />
                                                            <label htmlFor="star-3" title="3 stars">
                                                                <i
                                                                    className="active fa fa-star"
                                                                    aria-hidden="true"
                                                                />
                                                            </label>
                                                            <input
                                                                id="star-2"
                                                                type="radio"
                                                                name="rating"
                                                                defaultValue="star-2"
                                                            />
                                                            <label htmlFor="star-2" title="2 stars">
                                                                <i
                                                                    className="active fa fa-star"
                                                                    aria-hidden="true"
                                                                />
                                                            </label>
                                                            <input
                                                                id="star-1"
                                                                type="radio"
                                                                name="rating"
                                                                defaultValue="star-1"
                                                            />
                                                            <label htmlFor="star-1" title="1 star">
                                                                <i
                                                                    className="active fa fa-star"
                                                                    aria-hidden="true"
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="srt_014">
                                                        <h6 className="mb-0">4 Star</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label className="medium text-dark ft-medium">
                                                        Full Name
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label className="medium text-dark ft-medium">
                                                        Email Address
                                                    </label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label className="medium text-dark ft-medium">
                                                        Description
                                                    </label>
                                                    <textarea className="form-control" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="form-group m-0">
                                                    <a className="btn btn-white stretched-link hover-black">
                                                        Submit Review <i className="lni lni-arrow-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= Product Description End ==================== */}
            {/* ======================= Similar Products Start ============================ */}
            {/* ======================= Similar Products Start ============================ */}
            {/* ======================= Customer Features ======================== */}
            <section className="px-0 py-3 br-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="d-flex align-items-center justify-content-start py-2">
                                <div className="d_ico">
                                    <i className="fas fa-shopping-basket" />
                                </div>
                                <div className="d_capt">
                                    <h5 className="mb-0">Free Shipping</h5>
                                    <span className="text-muted">Capped at $10 per order</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="d-flex align-items-center justify-content-start py-2">
                                <div className="d_ico">
                                    <i className="far fa-credit-card" />
                                </div>
                                <div className="d_capt">
                                    <h5 className="mb-0">Secure Payments</h5>
                                    <span className="text-muted">Up to 6 months installments</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="d-flex align-items-center justify-content-start py-2">
                                <div className="d_ico">
                                    <i className="fas fa-shield-alt" />
                                </div>
                                <div className="d_capt">
                                    <h5 className="mb-0">15-Days Returns</h5>
                                    <span className="text-muted">Shop with fully confidence</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="d-flex align-items-center justify-content-start py-2">
                                <div className="d_ico">
                                    <i className="fas fa-headphones-alt" />
                                </div>
                                <div className="d_capt">
                                    <h5 className="mb-0">24x7 Fully Support</h5>
                                    <span className="text-muted">Get friendly support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail