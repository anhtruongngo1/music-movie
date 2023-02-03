import classNames from "classnames/bind";
import styles from "../Footer/footer.scss" ;
import logo from "../../assets/logo/logo1.jpg"
import informed from "../../assets/logo/informed.webp" 
import android from "../../assets/logo/android.webp" 
import ios from "../../assets/logo/ios.webp"
import face from "../../assets/logo/iconFace.svg"
import inst from "../../assets/logo/inst.svg" 
import ytb from "../../assets/logo/ytb.svg"
import tiktok from "../../assets/logo/tiktok.svg" 
import faceActive from "../../assets/logo/faceActive.svg"
import instActive from "../../assets/logo/instActive.svg" 
import ytbActive from "../../assets/logo/ytbActive.svg"
import tiktokActive from "../../assets/logo/tiktokActive.svg" 


const cx = classNames.bind(styles)

function Footer() {

    return ( 
        <footer className={cx('wrapper')}>

            <div className={cx('container')}>
                <div className={cx('container-logo')}>
                        <img src={logo} className={cx('col-image')}  />

                </div>
                <div className={cx('container-box')}>
                <section className={cx('container-col')}>
                        <address>
                            <span>
                            Bii-shop là dịch vụ được cung cấp bởi Công ty Cổ Phần Bii, thành viên của Công ty Cổ Phần Giải Trí và Giáo Dục (GEE.,JSC)
                            </span>
                            <span>
                            Địa chỉ: Xã Hòa Châu , Huyện Hòa Vang , Thành Phố Đà Nẵng , Việt Nam.
                            </span>
                            <span>
                            Mã số doanh nghiệp: 0123456789.
                            </span>
                            <span>
                            Ngày cấp mã số doanh nghiệp: 14/5/2001.
                            </span>
                            <span>
                            Nơi cấp: Sở kế hoạch và đầu tư thành phố Đà Nẵng.
                            </span>
                            <a href="#">
                                <img src={informed} className={cx('icon-app')} />

                            </a>
                        </address>           
                </section>
                <section className={cx('container-col')}>
                    <div className={cx('col-box')}>
                        <section className={cx('box-col')}>
                            <h4 className={cx('footer-title')}>
                                GIỚI THIỆU
                            </h4>
                            <ul>
                                <li>Quy chế sử dụng dịch vụ</li>
                                <li>Chính sách bảo mật</li>
                                <li>Khuyến mãi</li>


                            </ul>

                        </section>
                        <section className={cx('box-col')}>
                        <h4 className={cx('footer-title')}>
                               HỔ TRỢ
                            </h4>
                            <ul>
                                <li>1800 9090 (24/7)</li>
                                <li>play@bi.com.vn</li>
                                <li>https://bishop.vn/help</li>


                            </ul>

                </section>

                    </div>

                </section>
                <section className={cx('container-col')}>
                    <h4 className={cx('footer-title')}>
                    TẢI ỨNG DỤNG
                    </h4>
                    <div className={cx('footer-app')}>
                        <a>
                            <img src={android} className={cx('icon-app')}/>
                        </a>
                        <a>
                            <img src={ios} className={cx('icon-app')}/>
                        </a>

                    </div>
                    <h4 className={cx('footer-title')}>
                    KẾT NỐI VỚI CHÚNG TÔI
                    </h4>
                    <div className={cx('footer-app')}>
                        <a className={cx('footer-link')}>
                            <img src={face} className={cx('icon-social')}/>
                            <img src={faceActive} className={cx('icon-social-active')}/>
                        </a>
                        <a className={cx('footer-link')}>
                            <img src={inst} className={cx('icon-social')}/>
                            <img src={instActive} className={cx('icon-social-active')}/>
                        </a>
                        <a className={cx('footer-link')}>
                            <img src={ytb} className={cx('icon-social')}/>
                            <img src={ytbActive} className={cx('icon-social-active')}/>
                        </a>
                        <a className={cx('footer-link')}>
                            <img src={tiktok} className={cx('icon-social')}/>
                            <img src={tiktokActive} className={cx('icon-social-active')}/>
                        </a>

                    </div>

                    </section>
                </div>

                

            </div>


        </footer>
     );
}

export default Footer;