

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './userGetDocument.css';
// import { toast } from 'react-toastify';

// export function UserGetDocument() {
//     const [users, setUsers] = useState([]);
//     const history = useNavigate();

//     useEffect(() => {
//         axios.get('http://localhost:8000/getData')
//             .then(result => {
//                 setUsers(result.data);
//             })
//             .catch(err => {
//                 console.error("Error fetching data:", err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:8000/deleteUser/' + id)
//             .then(res => {
//                 toast.success("Details Deleted Successfully 😃!", {
//                     position: "top-center"
//                 });
//                 history('/user/GetDocument'); // Navigate to user document page after deletion
//                 window.location.reload(); // Reload the page to reflect changes
//             })
//             .catch(err => {
//                 console.log(err);
//                 toast.error("Error deleting user 😞", {
//                     position: "top-center"
//                 });
//             });
//     };

//     return (
//         <>
//             <section>
//                 <div className="form_heading">
//                     <h1>User Document Details</h1>
//                 </div>
//                 <div className="table_container">
//                     <table className="user_table">
//                         <thead className="table_head">
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Number</th>
//                                 <th>Address</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 users.map((user, index) => (
//                                     <tr key={index}>
//                                         <td data-label="Name">{user.name}</td>
//                                         <td data-label="Email">{user.email}</td>
//                                         <td data-label="Number">{user.number}</td>
//                                         <td data-label="Address">{user.address}</td>
//                                         <td data-label="Action" className="centered_button">
//                                             <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </section>
//         </>
//     );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import {
  Table, TableBody, TableCell, TableHead, TableRow,
  Button, Box, TableContainer, TablePagination, Paper
} from '@mui/material';
import './userGetDocument.css';
// import userGetDocument from '../../../services/apiList'
// import userGetDocument from '../../../services/apiList'
import apiList from '../../../services/apiList';


export function UserGetDocument() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [totalUsers, setTotalUsers] = useState(0);
    const history = useNavigate();
    let navigate = useNavigate();

    // check validators
    const checkValidUser = () => {
        const admin = Cookies.get("findDubai_Vendor_Login");
        // console.log(admin)
        if (admin === "false" || admin === undefined) {
          toast.error("Unauthorized user");
          navigate("/vendor/login");
        }
      };
      useEffect(() => {
        checkValidUser();
      }, []);

    useEffect(() => {
        fetchUsers(page, rowsPerPage);
    }, [page, rowsPerPage]);

    const fetchUsers = async (page, rowsPerPage) => {
        try {
            // const res = await axios.get(`${apiList.adminServicesSearch}?name=${state.query}&page=${state.page}&limit=${state.limit}`);

            const response = await axios.get(`${apiList.userGetDocument}?page=${page}&limit=${rowsPerPage}`);
            setUsers(response.data.users);
            setTotalUsers(response.data.total);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // const handleDelete = (id) => {
    //     axios.delete(`${apiList.userDeleteDocument}${id}`)
    //         .then(res => {
    //             toast.success("Details Deleted Successfully 😃!", {
    //                 position: "top-center"
    //             });
    //             history('/user/GetDocument'); // Navigate to user document page after deletion
    //             window.location.reload(); // Reload the page to reflect changes
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             toast.error("Error deleting user 😞", {
    //                 position: "top-center"
    //             });
    //         });
    // };

    const handleDelete = async (id) => {
        try {
            await axios.delete(apiList.userDeleteDocument(id));
            toast.success("Details Deleted Successfully 😃!", {
                position: "top-center"
            });
            fetchUsers(page, rowsPerPage); // Fetch updated users
        } catch (err) {
            console.log(err);
            toast.error("Error deleting user 😞", {
                position: "top-center"
            });
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <section className='container'>
                <div className="form_heading d-flex align-iten-center justify-content-center">
                    <h1>User Document Details</h1>
                </div>
                <Box sx={{ overflowX: 'auto', p: 2 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ border: '1px solid #ccc' }}>
                            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Email</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Number</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Address</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.number}</TableCell>
                                        <TableCell>{user.address}</TableCell>
                                        <TableCell className="centered_button">
                                            {/* <Button
                                                variant="contained"
                                                // color="secondary"
                                                onClick={() => handleDelete(user._id)}
                                                className='btn-danger'
                                            > */}
                                         <button className="btn btn-danger" 
                                         onClick={() => handleDelete(user._id)}>Delete</button>

                                                {/* Delete */}
                                            {/* </Button> */}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={totalUsers}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                </Box>
            </section>
        </>
    );
}
