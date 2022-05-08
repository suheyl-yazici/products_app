import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const getProducts = async () => {
    const res = await axios.get(
      `https://product-app-backend.herokuapp.com/products/${id}`
    );
    setProduct(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "20%" }}>
      <Card sx={{ minWidth: 350, minHeight: 250 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {product?.productName}
          </Typography>
          <Typography variant="h5" component="div">
            {product?.unitPrice}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {product?.quantityPerUnit}
          </Typography>
          <Typography variant="body2">{product?.unitsInStock}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
