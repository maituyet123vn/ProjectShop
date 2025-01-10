import axios from 'axios';

const API_URL = 'http://localhost:8000/v1/product'; //thay đổi theo endpoint của mình

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
}

export const getProduct = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
}

export const getProductsByParams = async (params) => {
    try {
        let query = '';
        if (params.category) {
            query = `category=${params.category}`;
            // http://localhost:8000/v1/product/?category=66deb2e19fbc85bf4ef71f2c
        } else if (params.keyword) {
            query = `keyword=${params.keyword}`;
            //http://localhost:8000/v1/product/?keyword=%C3%81o%20s%C6%A1%20mi
        }

        const response = await axios.get(`${API_URL}/?${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
}

export const saveProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        console.error('Error add product: ', error);
        throw error;
    }
}

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error update product: ', error);
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error delete product: ', error);
        throw error;
    }
}
