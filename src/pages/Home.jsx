import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const Home = () => {
  const [products, setProducts] = useState();
  const [isDeleted, setIsDeleted] = useState(false);

  const getProducts = async () => {
    const res = await axios.get("https://product-app-backend.herokuapp.com/products")
    // console.log(res.data);
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
    if(isDeleted){
      setIsDeleted(false);
    }
  }, [isDeleted]);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align='right'>Quantity Per Unit</StyledTableCell>
            <StyledTableCell align='right'>Unit Price</StyledTableCell>
            <StyledTableCell align='right'>Units In Stock</StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map(product => (
            <ProductItem key={product.id} product={product} setIsDeleted={setIsDeleted} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home