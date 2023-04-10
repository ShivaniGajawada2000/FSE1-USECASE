import React, {useState, useEffect} from 'react'
import EventBus from "../common/EventBus"
import Card from "./Card";

import ProductService from "../services/product.service"

function AllProduct() {

  const mystyle = {
    width:"1400px",
    height:"300px"
   };

    const [products, setProducts] = useState();

    useEffect(() => {
        ProductService.getAllProduct().then(
          (response) => {
            setProducts(response.data);
            console.log(response);
            console.log(response.data);
          },
          (error) => {
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
              setProducts(_content);
              console.log("Something happened");
            if (error.response && error.response.status === 401) {
              EventBus.dispatch("logout");
            }
          }
        );
      }, []);

  return (
    <>
    <div className = "fluid-container">
    
        <img src="./mobile_banner.jpg" className="rounded img-fluid" alt="" style={mystyle} />
      </div>
    <div className="ml-30" style={{marginLeft: "90px" }}>
      {/* <h2>All Product Page</h2> */}
      
      {products &&
      products.map((product) =>{
       return  <Card 
              id={product._id}
              image={product.imgUrl}
              price={product.price}
              rating={product.rating}
              title={product.productName}
              description = {product.productDescription}
              status={product.productStatus}
              // {console.log(product.productDescription)}
            />
      
      })}
       
        
    </div>
    </>
  )
}

export default AllProduct
