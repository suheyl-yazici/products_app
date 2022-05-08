import React from 'react'
import { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


const categories = [
  {
    id: 1,
    categoryName: "Beverages"
  
  },
  {
    id: 2,
    categoryName: "Condiments"
  },
  {
    id: 3,
    categoryName: "Confections"
  
  },
  {
    id: 4,
    categoryName: "Dairy Products"
  },
  {
    id: 5,
    categoryName: "Grains/Cereals"
  },
  {
    id: 6,
    categoryName: "Meat/Poultry"
  },
  {
    id: 7,
    categoryName: "Produce"

  },
  {
    id: 8,
    categoryName: "Seafood"
  }
]

const ProductForm = () => {

  const [productData, setProductData] = useState({
    productName:"",
    quantityPerUnit:"",
    unitsInStock:"",
    categoryId:"",
  })

  const navigate = useNavigate();
  const {id} = useParams();

  const getProducts = async () => {
    const response = await axios(`https://product-app-backend.herokuapp.com/products/${id}`);
    // console.log(response.data);
    setProductData({productName: response.data.productName, quantityPerUnit: response.data.quantityPerUnit, unitPrice: response.data.unitPrice, unitsInStock: response.data.unitsInStock, categoryId: response.data.categoryId});
  };

  useEffect(() => {
    if(id) {
    getProducts();
  }},[]);



  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(productData);

    if(!id) {
      await axios.post("https://product-app-backend.herokuapp.com/products/", productData);
      navigate("/");
    } else {
      await axios.put(`https://product-app-backend.herokuapp.com/products/${id}`, {id:id , ...productData});
      navigate("/");
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Product Name" variant="outlined" name='productName' value={productData.productName} onChange={(e) => setProductData({...productData, productName:e.target.value})}/>
      <TextField id="outlined-basic" label="Quantity" variant="outlined" name='quantityPerUnit' value={productData.quantityPerUnit} onChange={(e) => setProductData({...productData, quantityPerUnit: e.target.value})}/>
      <TextField id="outlined-basic" label="Unit Price" variant="outlined" name='unitPrice' value={productData.unitPrice} onChange={(e) => setProductData({...productData, unitPrice: e.target.value})}/>
      <TextField id="outlined-basic" label="Unit In Stock" variant="outlined" name='unitsInStock' value={productData.unitsInStock} onChange={(e) => setProductData({...productData, unitsInStock: +e.target.value})}/>
      <TextField
          id="standard-select-currency-native"
          select
          label="Categories"
          value={productData.categoryId}
          onChange={e => setProductData({...productData, categoryId:+e.target.value})}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your category"
          variant="standard"
        >
          {categories.map((option) => (
            <option key={option.id} value={option.id}>
              {option.categoryName}
            </option>
          ))}
        </TextField>
        <Button variant="contained" color="success" type="submit">
        Success
      </Button>
    </form>
  )
}

export default ProductForm