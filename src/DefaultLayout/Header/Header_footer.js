import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/component/Popper';

const cx = classNames.bind(styles);

function Header_footer() {
    return (
        <div className={cx('container-fluid')} style={{ maxWidth: '100%', width: '100%', padding: '0' }}>
            <div className={cx('header_footer')}>
                <div className={cx('footer_container')}>
                    <ul className={cx('ul')}>
                        <Tippy
                            interactive
                            placement="bottom" // Đặt vị trí popper
                            popperOptions={{
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 0], // Điều chỉnh vị trí xuống dưới theo ý muốn
                                        },
                                    },
                                ],
                            }}
                            render={(attrs) => (
                                <div className={cx('result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        {' '}
                                        {/*để như này thì khi set width của result bao nhiêu thì nó ăn theo */}
                                        <div className={cx('result-container')}>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nam tay ngắn
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nam tay dài
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo sơ mi nam tay ngắn
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo sơ mi nam tay dài
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nam tay ngắn
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nam tay dài
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo sơ mi nam tay ngắn
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo sơ mi nam tay dài
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nam tay ngắn
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nam tay dài
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <li className={cx('option-li')}>
                                <a href="/">Nam</a>
                            </li>
                        </Tippy>

                        <Tippy
                            interactive
                            placement="bottom" // Đặt vị trí popper
                            popperOptions={{
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 0], // Điều chỉnh vị trí xuống dưới theo ý muốn
                                        },
                                    },
                                ],
                            }}
                            render={(attrs) => (
                                <div className={cx('result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        {' '}
                                        {/*để như này thì khi set width của result bao nhiêu thì nó ăn theo */}
                                        <div className={cx('result-container')}>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nữ tay ngắn
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo thun nữ tay dài
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo sơ mi nữ tay ngắn
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo sơ mi nữ tay dài
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Đầm
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo len nữ
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo khoác nữ
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo khoác thun nữ
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Quần Jean nữ
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Quần short nữ
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Quần tây nữ
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Set đồ nữ
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <li className={cx('option-li')}>
                                <a href="/">Nữ</a>
                            </li>
                        </Tippy>

                        <Tippy
                            interactive
                            placement="bottom" // Đặt vị trí popper
                            popperOptions={{
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 0], // Điều chỉnh vị trí xuống dưới theo ý muốn
                                        },
                                    },
                                ],
                            }}
                            render={(attrs) => (
                                <div className={cx('result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        {' '}
                                        {/*để như này thì khi set width của result bao nhiêu thì nó ăn theo */}
                                        <div className={cx('result-container')}>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Bóp
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Dây nịt
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Giày
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Nón
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('column')}>
                                                <ul className={cx('column-ul')}>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Túi xách
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Dây chuyền
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Tất
                                                        </a>
                                                    </li>
                                                    <li className={cx('column-li')}>
                                                        <a href="/" className={cx('li-a')}>
                                                            Áo chống nắng
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <li className={cx('option-li')}>
                                <a href="/">Phụ kiện</a>
                            </li>
                        </Tippy>

                        <li className={cx('option-li')}>
                            <a href="/">Cửa hàng</a>
                        </li>
                        <li className={cx('option-li')}>
                            <a href="/">Blog fashion</a>
                        </li>
                        <li className={cx('option-li')}>
                            <a href="/">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header_footer;
