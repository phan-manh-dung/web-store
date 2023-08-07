import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Đúng đường dẫn này
import { faRotate, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../../assets/img/logogriph.png';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header_footer() {
    return (
        <div className={cx('header_footer')}>
            <div className={cx('footer_container')}>
                <ul>fsfs</ul>
            </div>
        </div>
    );
}

export default Header_footer;
