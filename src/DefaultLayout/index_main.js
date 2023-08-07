import Header from './Header/Header';
import Body from './Body/Body';
import styles from './Default.module.scss';
import classNames from 'classnames/bind';
import Footer from './Footer/Footer';
import React from 'react';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Body />
                    <div className={cx('footer')}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
