import React from 'react';
import { Link } from 'react-router-dom';
import Header from '~/DefaultLayout/Header/Header';
function DeletePage() {
    return (
        <div>
            <Header />
            <h1>Admin Page</h1>
            {/* Thêm nội dung cho trang admin tại đây */}
            <ul>
                <li>đây là trng delete</li>
            </ul>
        </div>
    );
}

export default DeletePage;
