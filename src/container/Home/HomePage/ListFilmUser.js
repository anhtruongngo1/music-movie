import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {   deleteToCart } from "../../service/userService";
import { useNavigate } from "react-router-dom" ;
import { useDispatch, useSelector } from 'react-redux';
import "../HomePage/ListFilm.scss"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { fetchUser, handleCart } from '../../../redux/userSlice';
import CardSkeletonItem from "../CardSkeletonItem"


function ListFilmUser() {

  const navigate = useNavigate()
  const userInfo = useSelector((state) => state.user.userInfor)
  const dataCart = useSelector((state) => state.user.CartFilm)

  const [loading , setLoading] = useState(true)

  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchUser())
    setLoading(false)
 
  }, [])
  useEffect(()=>{

  },[dataCart])





  const ListDataCart =   dataCart.length < 5 ? dataCart.length : 5

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: ListDataCart ,
    slidesToScroll: 1,




  };
  let handleDetailFilm = (id) => {
    navigate(`/manager-detail-film/${id}`)
  }
  let handleDeleteCart = async(id) =>{
     let res = await deleteToCart({
      id : id ,
      idUser : userInfo.id
     })
     if(res && res.errCode ===0){
        dispatch(fetchUser())
     }
  }

  
  return (
   <>
   { dataCart && dataCart.length > 0 &&
     <div className="homepage-container">
     <div className="homepage-all-no"></div>
     <h3>
      Danh Sách Phim Của Bạn
     </h3>
     <Slider {...settings}>
      {loading && <CardSkeletonItem />}
       {dataCart && dataCart.length > 0 &&
         dataCart.map((item, i) => (
           <div 
             key={i} className="homepage-menu">
             <img src={item.film.image} alt="" onClick={() => handleDetailFilm(item.id)} />
             <div className="homepage-icon">
              <AiOutlineCloseCircle onClick={()=>handleDeleteCart(item.id)} />

             </div>

           </div>

         ))
       }


     </Slider>
   </div>
   }
   </>
  );
}

export default ListFilmUser;