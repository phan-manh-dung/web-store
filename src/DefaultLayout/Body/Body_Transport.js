import React from 'react';
import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Đúng đường dẫn này
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingDollar, faShield, faTruck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Body_Transport() {
    return (
        <div className={cx('main-body')}>
            <div className={cx('body-transport')}>
                <div className={cx('container-transport')}>
                    <div className={cx('transport-wrapper')}>
                        <div className={cx('guarantee')}>
                            <div className={cx('container_logo')}>
                                <span className={cx('logo-guarantee')}>
                                    <FontAwesomeIcon icon={faShield} className={cx('pick_logo')} />
                                    <div>
                                        <span className={cx('content')}>Bảo hành</span>
                                    </div>
                                </span>
                            </div>
                            <div className={cx('container_content')}>
                                <span className={cx('content_hai')}>Sản phẩm luôn được bảo hành</span>
                            </div>
                        </div>
                        <div className={cx('guarantee')}>
                            <div className={cx('container_logo')}>
                                <span className={cx('logo-guarantee')}>
                                    <FontAwesomeIcon icon={faTruck} className={cx('pick_logo')} />
                                    <div>
                                        <span className={cx('content')}>Giao hàng</span>
                                    </div>
                                </span>
                            </div>
                            <div className={cx('container_content')}>
                                <span className={cx('content_hai')}>Miễn phí vận chuyển từ hai đơn hàng</span>
                            </div>
                        </div>
                        <div className={cx('guarantee')}>
                            <div className={cx('container_logo')}>
                                <span className={cx('logo-guarantee')}>
                                    <FontAwesomeIcon icon={faHandHoldingDollar} className={cx('pick_logo')} />
                                    <div>
                                        <span className={cx('content')}>Giảm giá</span>
                                    </div>
                                </span>
                            </div>
                            <div className={cx('container_content')}>
                                <span className={cx('content_hai')}>Sản phẩm thường xuyên được giảm giá</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body_Transport;
