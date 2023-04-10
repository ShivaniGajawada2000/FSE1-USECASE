import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import "./AddProduct.css";


function AddProduct() {
  const [title, setTitle] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [feature, setFeature] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [imgUrl, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const[res, setRes] = useState();
  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/v1.0/shopping/add", { productName, productDescription, price, feature, productStatus,imgUrl,rating })
      .then(() => {
        setTitle("");
        setImageURL("");
        setPrice(0);
        setRating(0);
        setProductStatus("");
        setFeature("");
        setProductDescription("");
        setProductName("");
        setRes(" product Added")
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container className="containeradd">
      {res && <h4>{res}</h4>}
      <Logo>
        <img src="./amazon_logo.png" alt="" />
      </Logo>
          
      <FormContainer style={{width:500}}>
        <h3>Add Product</h3>

        {/* <InputContainer>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputContainer> */}
        {/* Field for product name */}
        <div className="row">
          <div className="col">
        <InputContainer>
          <p>Product Name</p>
          <input
            type="text"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
        </InputContainer>

        {/* Field for product Description */}
        <InputContainer>
          <p>Product Description</p>
          <input
            type="text"
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
          />
        </InputContainer>

        <InputContainer>
          <p>ImageURL</p>
          <input
            type="text"
            onChange={(e) => setImageURL(e.target.value)}
            value={imgUrl}
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        </div>
      <div className="col">
      {/* Field for product Feature */}
      <InputContainer>
          <p>Feature</p>
          <input
            type="text"
            onChange={(e) => setFeature(e.target.value)}
            value={feature}
          />
        </InputContainer>
      
      {/* field for product status */}
        <InputContainer>
          <p>Product Status</p>
          <input
            type="text"
            onChange={(e) => setProductStatus(e.target.value)}
            value={productStatus}
          />
        </InputContainer>

        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </InputContainer>
       

        <Button onClick={addProduct}>Add Product</Button>
        </div>
        </div>
      </FormContainer>
     
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  min-width: 450px;
  height: fit-content;
  padding: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct;
