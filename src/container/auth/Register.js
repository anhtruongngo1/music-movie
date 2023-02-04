import React, { useState } from 'react';
import '../auth/Register.scss';
import { FaUser, FaLock } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import Header from "../Header/Header"
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { registerUser } from "../service/service";
import {useNavigate} from "react-router-dom"
import { IconFace, IconGoogle } from '../Icons/Icons';

function Register() {
    const navigate = useNavigate()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loading , setLoading] = useState(false)
    const [notify , setnotify] = useState('')
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            email: '',
            confirmedPassword: '',
        },
        validationSchema: yup.object({
            userName: yup.string().required("vui lòng nhập userName"),
            password: yup.string().required('vui lòng nhập password').min(5,'userName phải đủ 5 kí tự'),
            email: yup.string().required('vui lòng nhập email').email('Invalid Email'),
            confirmedPassword:yup.string().required("vui lòng nhập lại password").oneOf([yup.ref('password')],'phải trùng với password'),
        }),
        onSubmit: async(values) => {
            console.log('check values', values.email);
            let res = await registerUser({

                email : values.email ,
                firstName: values.userName,
                password : values.password
            }
            )
            if (res && res.errCode === 0) {
                setnotify(res.errMessage)
                navigate("/login")
            }else{
                setnotify(res.errMessage)
            }
        }
    })
    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }
    return (
        <>
            <Header />
            <div className="register-body">
                <div className="register-body-screen">
                    <div className="register-block">

                        <div className="register-content">


                        </div>
                        <div className="register-container">
                            <div className="register-img">

                            </div>
                            <h3>WELCOME</h3>
                            <p>Sign up by entering the information below</p>
                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaUser />
                                </div>
                                <input type="text" placeholder="UserName"
                                    name="userName"
                                    value={formik.userName}
                                    onChange={formik.handleChange}
                                />

                            {formik.errors.userName && 
                                <p className='register-errmess'>{ formik.errors.userName}</p>
                             }
                            </div>
                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaUser />
                                </div>
                                <input type="mail" placeholder="email"
                                    name="email"
                                     value={formik.email}
                                     onChange={formik.handleChange}
                                />

                            {formik.errors.email && 
                                <p className='register-errmess'>{ formik.errors.email}</p>
                             }
                            </div>

                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaLock />
                                </div>
                                <input type={isShowPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder="Password"
                                    value={formik.password}
                                    onChange={formik.handleChange} />
                                <span onClick={()=>handleShowPassword()}
                                >{isShowPassword ? <FiEyeOff /> : <FiEye />}</span>


                            {formik.errors.password && 
                                <p className="register-errmess">{ formik.errors.password }</p>
                             }
                            </div>
                            <div className="register-input">
                                <div className="register-input-icon">
                                    <FaLock />
                                </div>
                                <input type={isShowPassword ? 'text' : 'password'}
                                    placeholder='confirmedPassword'
                                    value={formik.confirmedPassword}
                                    onChange={formik.handleChange}
                                    name='confirmedPassword'
                                />
                                <span onClick={()=>handleShowPassword()}
                                >{isShowPassword ? <FiEyeOff /> : <FiEye />}</span>


                            {formik.errors.confirmedPassword && 
                                <p className='register-errmess'>{ formik.errors.confirmedPassword}</p>
                             }
                            </div>
                               <button type="submit"
                                
                                onClick={formik.handleSubmit}
                                className="btn-register"
                                >SIGN UP {loading && <AiOutlineLoading3Quarters className='loading' />}

                            {notify && <p className='register-notify'>{notify}!</p> }
                                </button>
                            <div className="register-login-icon">
                                <div className="register-login-icon-face">
                                    <IconFace />
                                </div>
                                <div className="register-login-icon-google">
                                    <IconGoogle />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Register;