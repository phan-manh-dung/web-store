import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Đúng đường dẫn này
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Header_body from './Header_body';
import Header_footer from './Header_footer';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper_header')}>
            <div className={cx('top')}>
                <div className={cx('container')}>
                    <div className={cx('icon')}>
                        <a href="https://www.facebook.com/jas.murad.353">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                    <div className={cx('information')}>
                        <ul className={cx('ul')}>
                            <li className={cx('li')}>
                                <a href="tel:0373286662">Online: 0373286662</a>
                            </li>
                            <li className={cx('li')}>
                                <a href=""> 0373286662</a>
                            </li>
                            <li className={cx('li')}>
                                <a href="">Zalo: 0373286662</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Header_body />
            <Header_footer />
        </div>
    );
}

export default Header;
