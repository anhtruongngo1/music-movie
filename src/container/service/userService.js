import axios from '../../axios';
import authHeader from './auth-header';

const getUserDetail = (id) => {
    return axios.get(`/api/get-user-detail?id=${id}`)
}
const postToCart = (data) => {
    return axios.post(`/api/add-to-card`,data)
}
const getToCart = (id) => {
    return axios.get(`/api/get-cart-user?id=${id}`)
}
const deleteToCart = (data) => {
    return axios.get(`/api/delete-cart-user?id=${data.id}&idUser=${data.idUser}`)
}
const sendEmail = (data) => {
    return axios.post(`/api/send-remedy`,data)
}
export  {
    getUserDetail , postToCart , getToCart , sendEmail ,deleteToCart

}