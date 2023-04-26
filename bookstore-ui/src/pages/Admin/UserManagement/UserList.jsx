import React, {useState, useEffect} from 'react';

import all_users from '../../../constants/users';
import {calculateRange, sliceData} from '../../../utils/table-pagination';

import './styles.css';

function UserList () {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState(all_users);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_users, 5));
        setUsers(sliceData(all_users, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = users.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setUsers(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setUsers(sliceData(all_users, new_page, 5));
    }

    return(
        <div className='dashboard-content'>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Danh sách người dùng</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>ẢNH ĐẠI DIỆN</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>SỐ ĐIỆN THOẠI</th>
                        <th>HỌ TÊN NGƯỜI DÙNG</th>
                        <th>ĐỊA CHỈ</th>
                        <th>QUYỀN QUẢN TRỊ</th>
                        <th>NGÀY TẠO</th>
                        <th>NGÀY CẬP NHẬT</th>
                    </thead>

                    {users.length !== 0 ?
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td><span>{user.id}</span></td>
                                    <td><span>{user.avatar}</span></td>

                                    {/* <td>
                                        <div>
                                            <img 
                                                src={order.avatar}
                                                className='dashboard-content-avatar'
                                                alt={order.first_name + ' ' +order.last_name} />
                                            <span>{order.first_name} {order.last_name}</span>
                                        </div>
                                    </td> */}

                                    <td><span>{user.email}</span></td>
                                    <td><span>{user.phone_number}</span></td>
                                    <td><span>{user.full_name}</span></td>
                                    <td><span>{user.address}</span></td>
                                    <td><span>{user.isAdmin}</span></td>
                                    <td><span>{user.createdAt}</span></td>
                                    <td><span>{user.updatedAt}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {users.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserList;