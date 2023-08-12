import React from 'react';
import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const cx = classNames.bind(styles);

function Body_Male() {
    return (
        <div className={cx('main-body')}>
            <div className={cx('container-male')}>
                <div className={cx('menu-male')}>
                    <ul className={cx('male-ul')}>
                        <li className={cx('male-li')}>
                            <a href="/" className={cx('male-li-a')}>
                                Áo thun nam
                            </a>
                        </li>
                        <li className={cx('male-li')}>
                            <a href="/" className={cx('male-li-a')}>
                                Áo sơ mi nam
                            </a>
                        </li>
                        <li className={cx('male-li')}>
                            <a href="/" className={cx('male-li-a')}>
                                Áo len nam
                            </a>
                        </li>
                        <li className={cx('male-li')}>
                            <a href="/" className={cx('male-li-a')}>
                                Áo khoác nam
                            </a>
                        </li>
                        <li className={cx('male-li')}>
                            <a href="/" className={cx('male-li-a')}>
                                Quần jean nam
                            </a>
                        </li>
                        <li className={cx('male-li')}>
                            <a href="/" className={cx('male-li-a')}>
                                Quần shorts nam
                            </a>
                        </li>
                    </ul>
                </div>
                {/* list 1 */}
                <div className={cx('container-product')}>
                    <div className={cx('product-list container')}>
                        <div style={{ margin: '0 -40px' }} className={cx('row')}>
                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2023/06/AP-2906N-0GR98-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2906N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                340,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2023/06/AP-2894N-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2894N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                280,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2023/06/AP-2910N-KE04-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2910N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                300,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* list 2 */}
                <div className={cx('container-product')}>
                    <div className={cx('product-list container')}>
                        <div style={{ margin: '0 -40px' }} className={cx('row')}>
                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2023/04/AP-2898N-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}>
                                                {' '}
                                                Áo thun nam có cổ tay ngắn(AP-2898N)
                                            </li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                400,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2023/03/AP-2853N.2.-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2853N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                320,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="	https://pt2000.com.vn/wp-content/uploads/2023/03/AP-2890N-2-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2890N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                320,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* list 3 */}
                <div className={cx('container-product')}>
                    <div className={cx('product-list container')}>
                        <div style={{ margin: '0 -40px' }} className={cx('row')}>
                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2023/03/AP-2894N-MAU-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2892N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                330,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="	https://pt2000.com.vn/wp-content/uploads/2023/03/ap-2886n-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2886N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                320,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2022/11/AS-010-0XX99-700K-3-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo sweater nam(AS-010)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                700,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* list 4 */}
                <div className={cx('container-product')}>
                    <div className={cx('product-list container')}>
                        <div style={{ margin: '0 -40px' }} className={cx('row')}>
                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2022/11/AP-2882-0NG02-380K-4-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay dài(AP-2882N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                380,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="	https://pt2000.com.vn/wp-content/uploads/2022/11/AP-2879-0XX99-430K-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2879N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                430,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div href="/" className={cx('product-a col-lg-4 ')}>
                                <div className={cx('wrapper-img')}>
                                    <a href="/">
                                        <img
                                            alt=""
                                            className={cx('product-img')}
                                            src="https://pt2000.com.vn/wp-content/uploads/2022/11/AP-2747-0DE00-420K-3-500x500.jpg"
                                        />
                                    </a>
                                </div>
                                <div className={cx('wrapper-information')}>
                                    <div className={cx('information-list')}>
                                        <ul className={cx('list-ul')}>
                                            <li className={cx('name-product')}> Áo thun nam tay ngắn(AP-2747N)</li>
                                            <li style={{ color: '#e1dbd8', fontSize: '20px' }} className={cx('price')}>
                                                420,000đ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body_Male;
