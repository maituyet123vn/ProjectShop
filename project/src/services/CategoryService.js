import axios from 'axios';

const API_URL = 'http://localhost:8000/v1/category'; //thay đổi theo endpoint của mình



export const getCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories: ', error);
        throw error;
    }
}

export const getCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${API_URL}/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Categories: ', error);
        throw error;
    }
}

export const saveCategory = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        console.error('Error add product: ', error);
        throw error;
    }
}

export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error delete product: ', error);
        throw error;
    }
}

export const updateCategory = async (id, category) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, category);
        return response.data;
    } catch (error) {
        console.error('Error update product: ', error);
        throw error;
    }
}




