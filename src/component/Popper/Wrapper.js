import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    // sử dụng nhận 1 children để sau chỉ cần tahy đổi cái này
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
