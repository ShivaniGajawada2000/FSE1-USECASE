import React, {useState} from 'react';
import ProductService from "../services/product.service";
import EventBus from "../common/EventBus";

function UpdateProduct() {

    const [res, setRes] = useState("");
    const [key, setKey] = useState("");
    // const [error, setError] = useState(null);
    // const [out, setOutput] = useState();
    const updateProd = () =>{
        console.log("Search Button working ",key);
        ProductService.updateProductById(key)
        .then((response) =>{
          console.log(response.data.statusCode)
          console.log(response);
          // setOutput(response.data);
          setRes(response.data);
          console.log(response.data);
          console.log("products = " ,response.data);
           setKey("");
        },(error) => {
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
              setRes(_content);
              
              console.log("Something happened");
            if (error.response && error.response.status === 401) {
              EventBus.dispatch("logout");
            }
          }
        )
    }
    


  return (
    <div>
      
      <div className="mb-3">
        <label htmlFor="delete" className="form-label">Update Product status by id</label>
        <input type="text" className="form-control" id="delete" value={key} onChange={(e) =>{setKey(e.target.value)}}/>
      </div>
      { key &&
      <button type="submit" className="btn btn-primary" onClick={updateProd} >Update</button>
    }
      {res.statusCode ===404 ? <h1>{res.message} </h1> :<h1>{res}</h1>}
      
    </div>

    
  )
}

export default UpdateProduct
