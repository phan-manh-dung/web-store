import React from 'react';
import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Đúng đường dẫn này
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Body_Accessory from './Body_Accessory';
import Body_Female from './Body_Female';
import Body_Male from './Body_Male';
import Body_Img from './Body_Img';
import Body_Transport from './Body_Transport';
import Footer from '../Footer/Footer';

const cx = classNames.bind(styles);

function Body() {
    return (
        <div>
            <Body_Img />
            <Body_Male />
            <Body_Female />
            <Body_Accessory />
            <Body_Transport />
        </div>
    );
}

export default Body;
