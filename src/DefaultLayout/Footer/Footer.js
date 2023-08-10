import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Đúng đường dẫn này
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('main-footer')}>
            <div>
                <div className={cx('container-footer')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('information-top-list row')}>
                            <div className={cx('top-list_mot col-lg-3')}>
                                <div className={cx('wrapper-list_mot')}>
                                    <div className={cx('list-mot_logo')}>
                                        <img
                                            alt=""
                                            width="254"
                                            height="64"
                                            src="https://i2.wp.com/pt2000.com.vn/wp-content/uploads/2018/08/logopt2000.png?ssl=1"
                                        />
                                    </div>
                                    <div className={cx('container-list-mot-address')}>
                                        <div className={cx('list-mot-address')}>
                                            <div className={cx('container')}>
                                                <div className={cx('address-mot')}>
                                                    <div className={cx('address-detail')}>
                                                        <strong>DC:</strong>153AB Nam Kỳ Khởi Nghĩa ,P.6 ,Q.3
                                                    </div>
                                                    <div className={cx('address-detail')}>
                                                        <strong>DT:</strong>0373286662
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('top-list_mot col-lg-2')}>
                                <div className={cx('wrapper-list_mot')}>
                                    <div style={{ textAlign: 'left' }} className={cx('list-mot_logo')}>
                                        <span className={cx('recruitment')}>md2003</span>
                                    </div>
                                    <div className={cx('list-mot-address')}>
                                        <ul className={cx('recruitment-ul')}>
                                            <li className={cx('recruitment-li')}>
                                                <a href="/">Tuyển dụng</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <img
                                        style={{ marginTop: '6px' }}
                                        alt=""
                                        src="https://i0.wp.com/pt2000.com.vn/wp-content/uploads/2018/08/pt2000dangkybocongthuong.png?ssl=1"
                                    />
                                </div>
                            </div>

                            <div className={cx('top-list_mot col-lg-3')}>
                                <div className={cx('wrapper-list_mot')}>
                                    <div style={{ textAlign: 'left' }} className={cx('list-mot_logo')}>
                                        <span className={cx('recruitment')}>khách hàng</span>
                                    </div>
                                    <div className={cx('list-mot-address list-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li style={{ textAlign: 'left' }} className={cx('recruitment-li')}>
                                                <a href="/">Thông tin tài khoản</a>
                                            </li>
                                        </ul>
                                        <ul className={cx('list-ul')}>
                                            <li style={{ textAlign: 'left' }} className={cx('recruitment-li ')}>
                                                <a href="/">Đơn hàng</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('top-list_mot col-lg-3')}>
                                <div className={cx('wrapper-list_mot')}>
                                    <div style={{ textAlign: 'left' }} className={cx('list-mot_logo')}>
                                        <span className={cx('recruitment')}>hỗ trợ</span>
                                    </div>
                                    <div className={cx('list-mot-address list-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li style={{ textAlign: 'left' }} className={cx('recruitment-li')}>
                                                <a href="/">Chính sách thanh toán</a>
                                            </li>
                                        </ul>
                                        <ul className={cx('list-ul')}>
                                            <li style={{ textAlign: 'left' }} className={cx('recruitment-li ')}>
                                                <a href="/">Chính sách đổi hàng</a>
                                            </li>
                                        </ul>
                                        <ul className={cx('list-ul')}>
                                            <li style={{ textAlign: 'left' }} className={cx('recruitment-li')}>
                                                <a href="/">Chính sách bảo mật</a>
                                            </li>
                                        </ul>
                                        <ul className={cx('list-ul')}>
                                            <li style={{ textAlign: 'left' }} className={cx('recruitment-li ')}>
                                                <a href="/">Hướng dẫn mua</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('top-list_mot col-lg-1')}>
                                <div className={cx('wrapper-list_mot')}>
                                    <div style={{ textAlign: 'left' }} className={cx('list-mot_logo')}>
                                        <span className={cx('recruitment')}>khách hàng</span>
                                    </div>
                                    <div style={{}} className={cx('list-mot-address-logo')}>
                                        <FontAwesomeIcon className={cx('icon-youtube')} icon={faYoutube} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('container')}>
                <div className={cx('container-pay')}>
                    <div className={cx('pay')}>
                        <span className={cx('pay-name')}> chấp nhận thanh toán</span>
                    </div>
                    <div className={cx('container-img')}>
                        <img
                            alt=""
                            src="	https://i2.wp.com/pt2000.com.vn/wp-content/uploads/2018/08/mastercardicon.png?ssl=1"
                        />
                        <img
                            alt=""
                            src="https://i2.wp.com/pt2000.com.vn/wp-content/uploads/2018/08/visaicon.png?ssl=1"
                        />
                    </div>
                </div>
            </div>

            <div className={cx('container-footer-address')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('area')}>
                        <div className={cx('area-south')}>
                            <span className={cx('south')}>Miền nam</span>
                        </div>
                        <div className={cx('line')}>
                            <div className={cx('line-mot')}></div>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>153AB Nam kỳ khởi nghĩa, P.6, Q.3, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 39.303.753</li>

                                    <li className={cx('footer-li-li')}>767 Hậu Giang, P.11, Q.6, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 37.555.605</li>

                                    <li className={cx('footer-li-li')}>35-37 Lê Văn Sỹ, P.13, Q.Phú Nhuận, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 39.914.123</li>

                                    <li className={cx('footer-li-li')}>883 Quang Trung, P.14, Q.Gò Vấp, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 38.310.090</li>

                                    <li className={cx('footer-li-li')}>
                                        1549 Phạm Văn Thuận, P.Thống Nhất, Tp.Biên Hòa, T.Đồng Nai
                                    </li>
                                    <li className={cx('footer-li-li')}>025 18.820.869</li>
                                </ul>
                            </div>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>153AB Nam kỳ khởi nghĩa, P.6, Q.3, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 39.303.753</li>

                                    <li className={cx('footer-li-li')}>767 Hậu Giang, P.11, Q.6, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 37.555.605</li>

                                    <li className={cx('footer-li-li')}>35-37 Lê Văn Sỹ, P.13, Q.Phú Nhuận, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 39.914.123</li>

                                    <li className={cx('footer-li-li')}>883 Quang Trung, P.14, Q.Gò Vấp, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 38.310.090</li>

                                    <li className={cx('footer-li-li')}>
                                        1549 Phạm Văn Thuận, P.Thống Nhất, Tp.Biên Hòa, T.Đồng Nai
                                    </li>
                                    <li className={cx('footer-li-li')}>025 18.820.869</li>
                                </ul>
                            </div>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>153AB Nam kỳ khởi nghĩa, P.6, Q.3, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 39.303.753</li>

                                    <li className={cx('footer-li-li')}>767 Hậu Giang, P.11, Q.6, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 37.555.605</li>

                                    <li className={cx('footer-li-li')}>35-37 Lê Văn Sỹ, P.13, Q.Phú Nhuận, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 39.914.123</li>

                                    <li className={cx('footer-li-li')}>883 Quang Trung, P.14, Q.Gò Vấp, Tp.HCM</li>
                                    <li className={cx('footer-li-li')}>028 38.310.090</li>

                                    <li className={cx('footer-li-li')}>
                                        1549 Phạm Văn Thuận, P.Thống Nhất, Tp.Biên Hòa, T.Đồng Nai
                                    </li>
                                    <li className={cx('footer-li-li')}>025 18.820.869</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('container-fluid')}>
                    <div className={cx('area')}>
                        <div className={cx('area-south')}>
                            <span className={cx('south')}>Miền Trung</span>
                        </div>
                        <div className={cx('line')}>
                            <div className={cx('line-mot')}></div>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>57 Lê Duẩn, P.Hải Châu 1, Tp.Đà Nẵng</li>
                                    <li className={cx('footer-li-li')}>023 63.562.974</li>

                                    <li className={cx('footer-li-li')}>69 Hùng Vương, Tp.Huế, T.Thừa Thiên Huế</li>
                                    <li className={cx('footer-li-li')}>023 43.883.111</li>
                                </ul>
                            </div>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>
                                        66-68 Lý Thánh Tôn, Tp.Nha Trang, T.Khánh Hòa
                                    </li>
                                    <li className={cx('footer-li-li')}>025 83.814.586</li>

                                    <li className={cx('footer-li-li')}>37 Nguyễn Văn Cừ, Tp.Vinh, T.Nghệ An</li>
                                    <li className={cx('footer-li-li')}>023 83.580.001</li>
                                </ul>
                            </div>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>
                                        115 Lý Thường Kiệt, Tp.Buôn Mê Thuột, T.Đắk Lắk
                                    </li>
                                    <li className={cx('footer-li-li')}>026 23.841.574</li>

                                    <li className={cx('footer-li-li')}>
                                        E4 E5 E6 Tuyên Quang, Tp.Phan Thiết, T.Bình Thuận
                                    </li>
                                    <li className={cx('footer-li-li')}>025 23.822.688</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('container-fluid')}>
                    <div className={cx('area')}>
                        <div className={cx('area-south')}>
                            <span className={cx('south')}>Miền Bắc</span>
                        </div>
                        <div className={cx('line')}>
                            <div className={cx('line-mot')}></div>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>01 Bà Triệu, Q.Hai Bà Trưng, Tp.Hà Nội</li>
                                    <li className={cx('footer-li-li')}>024 39.346.842</li>
                                </ul>
                            </div>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>119 Chùa Bộc, Q.Đống Đa, Tp.Hà Nội</li>
                                    <li className={cx('footer-li-li')}>024 35.641.839</li>
                                </ul>
                            </div>
                            <div className={cx('col-lg-4')}>
                                <ul className={cx('footer-ul-ul')}>
                                    <li className={cx('footer-li-li')}>7 Trần Thái Tông, Q.Cầu Giấy, Tp.Hà Nội</li>
                                    <li className={cx('footer-li-li')}>024 37.689.664</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
