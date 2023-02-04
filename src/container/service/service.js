import axios from '../../axios';
import authHeader from './auth-header';

console.log(process.env);
const handleLogin2 = (email, password) => {
    return axios.post('/api/login', { email, password })
}
const registerUser = (data) => {
    return axios.post('/api/create-new-user', data)
}
const getAllUsers = async (data) => {
    return axios.get('/api/get-all-user', data)
}
const getAllGender = () => {
    return axios.get('/api/get-all-gender')
}
const handleDeleteUser = (data) => {
    return axios.get(`/api/delete-user?id=${data.id}`, data.data)
}
const handleEditUser = (data) => {
    return axios.post(`/api/edit-user`, data, {
        headers: authHeader()
    })
}
const getAllFilms = async () => {
    return axios.get('/api/get-all-film')
}
const getAllYear = () => {
    return axios.get('/api/get-all-year')
}
const handleCreateFilm = (data) => {
    return axios.post('/api/create-new-film', data ,{
        headers: authHeader()
    })
}
const getDetailFilm = (id) => {
    return axios.get(`/api/get-detail-film?id=${id}`)
}
const handleDeleteFilm = (data) => {
    return axios.get(`/api/delete-film?id=${data.id}`, data.data)
}
const handleEditFilm = (data) => {
    return axios.post(`/api/edit-film`, data ,{
        headers: authHeader()
    })
}
const logOut = () => {
    return axios.post(`/api/logout`)
}
const getActionFilms = async () => {
    return axios.get('/api/get-action-film')
}
const getEmotionFilms = async () => {
    return axios.get('/api/get-emotion-film')
}
const getRandomfilm = async () => {
    return axios.get('/api/get-random-film')
}
const  getSearchFilm = async (q , type) => {
    return axios.get(`/api/get-search-film?q=${q}&type=${type}`)
}

export {
    handleLogin2, registerUser, getAllUsers, getAllGender, handleDeleteUser, handleEditUser,
    getAllFilms, getAllYear, handleCreateFilm, getDetailFilm, handleDeleteFilm, handleEditFilm,
    logOut , getActionFilms , getEmotionFilms , getRandomfilm , getSearchFilm
}
