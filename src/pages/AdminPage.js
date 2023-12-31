import React from 'react';
import Header from '../DefaultLayout/Header/Header.js'; // Đảm bảo đường dẫn đúng
import { Link } from 'react-router-dom';
function AdminPage() {
    return (
        <div>
            <Header />
            <h1>Admin Page</h1>
            {/* Thêm nội dung cho trang admin tại đây */}
            <ul>
                <li>
                    <Link to="/admin/delete">Go to admin delete</Link>
                </li>
            </ul>
        </div>
    );
}

export default AdminPage;
