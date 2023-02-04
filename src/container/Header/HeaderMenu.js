import React from 'react' ;
import "./Header.scss" ;
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Image from '../Image';
import { logOutUser } from '../../redux/userSlice';
import { logOut } from '../service/service';

export default function (props) {


    const userInfo = useSelector((state) => state.user.userInfor)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
      let res = await logOut()
      if (res && res.errCode === 0) {          
          dispatch(logOutUser())
          navigate("/home")
      }
  }
  return (
    <div className='header-menu'>
        <div className='header-menu-avatar'>
              {userInfo && userInfo.image ? 
                            <Image src={userInfo.image}  alt="" /> : ''
                        }
             </div>
        <div className='header-menu-listBox'>
        {userInfo ? 
                    <Link to={`/homePage`} className="header-menu-item">Home</Link>
                    :
                    <Link to={`/home`} className="header-menu-item">Home</Link>
                }
                <Link to={`/music`} className="header-menu-item">Music</Link>
                <Link to={`/music`} className="header-menu-item">information</Link>
                {userInfo && userInfo.roleId ==="R1" 
                    &&
                    <Link to={`/manager`} className="header-menu-item">quản lí</Link>
                }
                {userInfo &&  <Link to={`/user/detail`} className="header-menu-item">Cá Nhân</Link>}
                {!userInfo &&  <Link to={`/login`} className="header-menu-item">Sign In</Link>}
                {!userInfo &&  <Link to={`/register`} className="header-menu-item">Sign Up</Link> }
                {userInfo &&  <div
                onClick={()=> handleLogOut()}
                 className="header-menu-item">Đăng xuất</div>}
                 </div>

    </div>
  )
}
