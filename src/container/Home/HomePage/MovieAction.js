import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getActionFilms } from "../../service/service";
import {useNavigate} from "react-router-dom" ;
import CardSkeletonItem from "../CardSkeletonItem"
function MovieAction() {
  const [dataFilm, setDataFilm] = useState([])
  const [loading , setLoading] = useState(true)

  const navigate = useNavigate()

    useEffect(() => {
        {
          let res = getActionFilms()
          let data = res.then((data) => {
            if (data && data.errCode === 0) {

              setDataFilm(
                data.data
              )
              setLoading(false)

            }
          })
      
        }
      }, [])
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        
        
        
  
  };
  let handleDetailFilm = (id) =>{
    navigate(`/manager-detail-film/${id}`)
  }
    return ( 
        <div className="homepage-container">
        <div className="homepage-all-no"></div>
        <h3>
        Phim Hành động hay nhất
        </h3> 
        <Slider {...settings}>
        {loading && <CardSkeletonItem  />}
        {loading && <CardSkeletonItem  />}
        {loading && <CardSkeletonItem  />}
        {loading && <CardSkeletonItem  />}
        {loading && <CardSkeletonItem  />}
        {loading && <CardSkeletonItem  />}
         
          {dataFilm && dataFilm.length > 0 &&
                    dataFilm.map((item, i) => (
                      <div onClick={()=>handleDetailFilm(item.id)}
                        key={i} className="homepage-menu">
            <img src={item.image} alt="" />

            </div>
                        
                    ))
                }
        

        </Slider>
    </div>
     );
}

export default MovieAction;