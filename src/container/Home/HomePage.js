import React, { useEffect, useState } from 'react';
import "../Home/HomePage.scss"
import Header from "../Header/Header";
import HomePageCenter from "./HomePage/HomePageCenter";
import MovieAllTop from "./HomePage/MovieAllTop";
import MovieAction from "./HomePage/MovieAction";
import MovieEmotion from "./HomePage/MovieEmotion";
import ListFilmUser from "./HomePage/ListFilmUser"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';

function HomePage() {
    const navigate = useNavigate()
    const accessToken = useSelector((state) => state.user.accessToken)
    const [isLoading , setLoading] = useState(false)
        useEffect(() => {
        if (!accessToken){
            navigate("/login")
        }
    
    }, [])
 
    return (
        <>
     

            <div 
                className="homepage-all ">
                <Header />              
                <HomePageCenter/>
                <ListFilmUser />
                <MovieAllTop />
                 <MovieAction/>
                <MovieEmotion />   
                <Footer/>  
             
       
            </div> 
        
                              
           
            
        </>
    );
}

export default HomePage;