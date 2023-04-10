import React, {useState} from 'react';
import ProductService from "../services/product.service";
import EventBus from "../common/EventBus";
import UpdateProduct from './UpdateProduct';

function DeleteProduct() {

    const [res, setRes] = useState("");
    const [key, setKey] = useState("");
    // const [error, setError] = useState();
    const [exc, setExc] = useState();

    const deleteProd = () =>{
        console.log("Search Button working ",key);
        ProductService.deleteProductById(key)
        .then((response) =>{
          setExc(response.data.statusCode)
          console.log(response.data.statusCode, exc)
            console.log(response);
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
        ).catch((err) =>{
          console.log("Error ocurred");
          // setError(err.message);
          console.log(err.message);
          console.log(err);
          setExc(404);
      })
    }
    


  return (
    <div class="row">
      <div class="col">
      
      <div class="mb-3">
        <label for="delete" class="form-label">Delete</label>
        <input type="text" class="form-control" id="delete" value={key} onChange={(e) =>{setKey(e.target.value)}}/>
      </div>
      { key&&
      <button type="submit" class="btn btn-primary" onClick={deleteProd} >Delete</button>
      }

      {/* {res.statusCode ===404 && <h1>{res.message}</h1>} */}
      {res.statusCode ===404 ? <h1>{res.message} </h1> :<h1>{res}</h1>}
      {/* {error && <h1>{error}</h1>}
      {exc === 404 && <h1>No Product found</h1>} */}
    </div>
    <div class="col">
      <UpdateProduct></UpdateProduct>
    </div>
    
    </div>

    
  )
}

export default DeleteProduct
