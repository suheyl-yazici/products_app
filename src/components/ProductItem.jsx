import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ProductItem = ({ product, setIsDeleted }) => {
  const deleteProduct = async (id) => {
    await axios.delete(
      `https://product-app-backend.herokuapp.com/products/${id}`
    );
    setIsDeleted(true);
  };

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {product.id}
      </StyledTableCell>
      <StyledTableCell>
        <NavLink to={`/products/${product.id}`} style={{ color: "#000" }}>
          <StyledTableCell component="th" scope="row">
            {product.productName}
          </StyledTableCell>
        </NavLink>
      </StyledTableCell>
      <StyledTableCell align="right">{product.quantityPerUnit}</StyledTableCell>
      <StyledTableCell align="right">{product.unitPrice}</StyledTableCell>
      <StyledTableCell align="right">{product.unitsInStock}</StyledTableCell>
      <StyledTableCell align="right">
        <Link to={`/update/${product.id}`}>
          <Button variant="contained" color="success">
            Edit
          </Button>
        </Link>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductItem;
