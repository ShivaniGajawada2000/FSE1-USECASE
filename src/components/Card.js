import React from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";

// import { useStateValue } from "../StateProvider";
function Card({ id, image, title, price, rating, description, status }) {
//   const [{ basket }, dispatch] = useStateValue();
//   console.log("basket >>>>", basket);

  
  const addToBasket = (e) => {
    e.preventDefault();

    console.log("Add to Basket Working");

    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id,
    //     title,
    //     price,
    //     image,
    //     rating,
    //   },
    // });
  };

  return (
    <span key= {id}>
    <Container >
      
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
         style={{color:"black"}}
       />
        <p>₹ {price}</p>
        <h6>{status}</h6>
        <h6>{description}</h6>
        <button style={{backgroundColor:"black",color:"white",width:100}} onClick={addToBasket}>Add to Cart</button>
      </Description>
    </Container>
    </span>
  );
}

const Container = styled.div`
"  width: 100%;
width: 25%;
  height: 100%;
  display: flex;
  display: inline-block;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  margin-bottom: 29px;
`;
const Image = styled.div`
 width: 100%;
width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
;`
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 50%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;