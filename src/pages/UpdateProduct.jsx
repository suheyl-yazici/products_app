import React from "react";
import Typography from "@mui/material/Typography";
import ProductForm from "../components/ProductForm";
import Grid from "@mui/material/Grid";

const UpdateProduct = () => {
  
  return (
    <div>
      <Typography
        variant="h1"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center" }}
        color="primary"
      >
        Update Product
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <ProductForm />
      </Grid>
    </div>
  );
};

export default UpdateProduct;
