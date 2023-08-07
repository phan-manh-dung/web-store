import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Đúng đường dẫn này
import { faRotate, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../../assets/img/logogriph.png';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

function Header_body() {
    return (
        <div className={cx('middle')}>
            <div className={cx('container-middle')}>
                <div className={cx('search')}>
                    <div>
                        <input placeholder="Tìm sản phẩm tại đây ..." />
                    </div>
                </div>
                <div className={cx('logo')}>
                    <img src={logoImage} alt="logo" width="400" height="70" />
                </div>
                <div className={cx('control')}>
                    <div className={cx('cart')}>
                        <Tippy
                            content="Chưa có sản phẩm nào trong giỏ hàng"
                            placement="bottom"
                            offset={[-80, 10]}
                            arrow={false}
                            animation="scale-subtle"
                            maxWidth={180}
                        >
                            <div className={cx('cart-icon-container')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </a>
                                <span>0</span>
                            </div>
                        </Tippy>
                        <div className={cx('cart-icon-container')}>
                            <a href="/">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                        <div className={cx('cart-icon-container')}>
                            <a href="/">
                                <FontAwesomeIcon icon={faRotate} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header_body;
