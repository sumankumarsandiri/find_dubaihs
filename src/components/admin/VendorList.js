import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableHead, TableRow,
  Button, Box, Dialog, DialogActions, DialogContent,
  DialogTitle, TextField, Typography, TableContainer,
  TablePagination, Paper
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import apiList from '../../services/apiList';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currentVendor, setCurrentVendor] = useState(null);
  const [vendorToDelete, setVendorToDelete] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalVendors, setTotalVendors] = useState(0);

  useEffect(() => {
    fetchVendors(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const fetchVendors = async (page, rowsPerPage) => {
    try {
      const response = await axios.get(apiList.vendorPagination(page, rowsPerPage));
      setVendors(response.data.vendors);
      setTotalVendors(response.data.total);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(apiList.deleteVendor(id));
      fetchVendors(page, rowsPerPage);
      handleCloseDelete();
    } catch (error) {
      console.error(error);
      alert('Error deleting vendor');
    }
  };

  const handleEditClick = (vendor) => {
    setCurrentVendor(vendor);
    setOpenEdit(true);
  };

  const handleDeleteClick = (vendor) => {
    setVendorToDelete(vendor);
    setOpenDelete(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setCurrentVendor(null);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setVendorToDelete(null);
  };

  const handleEditChange = (e) => {
    setCurrentVendor({ ...currentVendor, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(apiList.updateVendor(currentVendor._id), currentVendor);
      fetchVendors(page, rowsPerPage);
      handleCloseEdit();
    } catch (error) {
      console.error(error);
      alert('Error updating vendor');
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
    <Box sx={{ overflowX: 'auto', p: 2, marginTop: 5 }}>
      <TableContainer component={Paper}>
        <Table sx={{ border: '1px solid #ccc' }}>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Service Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Vendor Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Mobile Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Location</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendors.map((vendor, index) => (
              <TableRow key={vendor._id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{vendor.serviceName}</TableCell>
                <TableCell>{vendor.category}</TableCell>
                <TableCell>{vendor.vendorName}</TableCell>
                <TableCell>{vendor.email}</TableCell>
                <TableCell>{vendor.mobileNumber}</TableCell>
                <TableCell>{vendor.location}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleEditClick(vendor)}><Edit/></Button>
                  <Button color="warning" onClick={() => handleDeleteClick(vendor)}><Delete/></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalVendors}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit Vendor</DialogTitle>
        <DialogContent>
          {currentVendor && (
            <form>
              <TextField
                name="serviceName"
                label="Service Name"
                value={currentVendor.serviceName}
                onChange={handleEditChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="category"
                label="Category"
                value={currentVendor.category}
                onChange={handleEditChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="vendorName"
                label="Vendor Name"
                value={currentVendor.vendorName}
                onChange={handleEditChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={currentVendor.email}
                onChange={handleEditChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="mobileNumber"
                label="Mobile Number"
                value={currentVendor.mobileNumber}
                onChange={handleEditChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="location"
                label="Location"
                value={currentVendor.location}
                onChange={handleEditChange}
                fullWidth
                margin="normal"
              />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="secondary">Cancel</Button>
          <Button onClick={handleEditSubmit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this vendor?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="secondary">Cancel</Button>
          <Button onClick={() => handleDelete(vendorToDelete._id)} color="primary">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VendorList;
