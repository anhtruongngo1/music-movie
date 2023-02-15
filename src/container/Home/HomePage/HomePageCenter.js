import React, { useEffect, useState } from 'react';
import "../HomePage.scss";
import Bg2 from "../../../assets/film/font.png"
import Bg1 from "../../../assets/film/film.jpg";
import Bg3 from "../../../assets/film/matbiec2.webp";
import { GrOverview } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { getRandomfilm } from "../../service/service";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import {postToCart} from "../../service/userService" ;
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../redux/userSlice';
import CardSkeleton from '../CardSkeleton';
import { useNavigate } from 'react-router';



function HomePageCenter() {
    const [loading2 , setLoading] = useState(true)
    const [dataFilm, setDataFilm] = useState({})
    const [dataArr, setDataArr] = useState()
    const userInfo = useSelector((state) => state.user.userInfor)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
          let res = getRandomfilm()
          let data = res.then((data) => {
              if (data && data.errCode === 0) {
                setDataFilm(
                   data.data
                  )   
              }
              setDataArr(data.data[0])
              setLoading(false)
              
          })
      
        
    }, [])
    const handleNextArr = () => {
        const arrRandom = dataFilm[Math.floor(Math.random() * dataFilm.length) | 0]
        if (arrRandom.id !== dataArr.id) {
            setDataArr( arrRandom)
            
        }
        else {
            handleNextArr()
        }
    }
    let handleAddCart = async(id) =>{
        let res = await postToCart({
            idUser : userInfo.id ,
            idFilm : id

        })
        if(res && res.errCode ===0){
            dispatch(fetchUser(userInfo.id))

            alert("thêm vào danh sách thành công")
        }
            alert("phim đã tồn tại trong danh sách")
        

    }
    const handleViewFilm = () =>{
        alert('phim còn đang quá trình phát triển')
    }

    return ( 
        <>
    
            <div className="manager-film-detail2" >
             {loading2 &&  <CardSkeleton /> }  

            {!loading2 && <div className="film-detail-background2">
                <div className="backgound-bottom2"> </div>
                <div className="backgound-left2">
                </div>
                    <div className="backgound-right2">
                        {dataArr && dataArr.image &&
                            <img src={dataArr.image} alt='' />
                        }
                    
                    <div className="backgound-right-movie"
                        style={
                            {
                                background: `url(
                                ${ dataArr && dataArr.backgroundImg ? dataArr.backgroundImg : 'null'}
                                )center center / cover no-repeat`
                            }
                        }
                    >
    
                    </div>
    
                </div>
            </div> }
            <div className="film-detail-content">
                <div className="detail-content-title">
                        {dataArr && dataArr.movieName && 
                            <img src={dataArr.movieName} alt="" />
                        }
                
    
                </div>
                    <div className="detail-content-overview">
                    <div className="film-detail-btn">
                        <button onClick={()=>handleViewFilm()}
                        className="film-detail-btn-link">
                            <GrOverview className="film-detail-btn-icon" />
                            <span>Xem film</span>
                        </button>
                        <button onClick={()=>handleAddCart(dataArr.id)}
                         className="film-detail-btn-link film-detail-btn-active ">
                            <IoMdAddCircleOutline className="film-detail-btn-icon" />
                            <span 
                            >Danh sách của tôi</span>
                        </button>
                    </div>
                    <div className="overview-list-description">
                            {dataArr && dataArr.description ? dataArr.description : 'chưa có'}
                            <span onClick={() =>navigate(`/manager-detail-film/${dataArr.id}`)}>
                                xem chi tiết
                                <MdNavigateNext  className="overview-list-description-icon"/>
                            </span>
                    </div>
                 
                    
                </div>
    
            </div>
            <div className="film-detail-center-menu">
                <ul >
                        <li onClick={() =>handleNextArr()}
                            className="film-detail-center-icon">
                            <GrFormPreviousLink  className="film-detail-center-icon-link"/>
                        </li>
                        <li onClick={() =>handleNextArr()}
                            className="film-detail-center-icon">
                            <GrFormNextLink className="film-detail-center-icon-link" />
                        </li>
                </ul>
            </div>
       
    
    </div>
            
     
        </>
     );
}

export default HomePageCenter;