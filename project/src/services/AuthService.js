import axios from 'axios';

const API_URL = 'http://localhost:8000/v1/account'; //thay đổi theo endpoint của mình

export const checkLogin = () => {
    let jsonData = localStorage.getItem('login')
    if (jsonData) {
      return JSON.parse(jsonData)
    }
    return false;
  }
  
export const register = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/add`, body);
        return response;
    } catch (error) {
        console.error('Create an account: ', error);
        throw error;
    }
}

export const login = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/login`, body);
        return response;
    } catch (error) {
        console.error('Login account: ', error);
        throw error;
    }
}