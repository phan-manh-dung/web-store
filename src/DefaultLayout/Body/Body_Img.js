import React from 'react';
import classNames from 'classnames/bind';
import styles from './Body.module.scss';

const cx = classNames.bind(styles);

function Body_Img() {
    return (
        <div className={cx('container-img')}>
            <div className={cx('img')}>
                <img
                    alt=""
                    className={cx('img-details')}
                    src="https://i1.wp.com/pt2000.com.vn/wp-content/uploads/2023/07/BG_PT2000_-scaled.jpg?ssl=1&resize=1536%2C1034"
                />
            </div>
        </div>
    );
}

export default Body_Img;
