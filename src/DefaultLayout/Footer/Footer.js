import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Đúng đường dẫn này
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('main-footer')}>
            <div className={cx('container-footer')}>
                <div className={cx('information-top')}>
                    <div className={cx('information-top_list row')}>
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
                                <div className={cx('list-mot-address')}>
                                    <div>
                                        <div className={cx('address-dc')}>dc:</div>
                                        <div className={cx('address-dc')}>dt:</div>
                                    </div>
                                    <div>
                                        <div className={cx('address-detail')}>153AB Nam Kỳ Khởi Nghĩa ,P.6 ,Q.3 </div>
                                        <div className={cx('address-detail')}>0373286662</div>
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
                                <div
                                    style={{ backgroundColor: 'red', width: '44px', height: '36px' }}
                                    className={cx('list-mot-address list-list ')}
                                >
                                    <FontAwesomeIcon className={cx('icon-youtube')} icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
