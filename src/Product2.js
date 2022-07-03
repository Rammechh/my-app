import React,  {useState, useEffect, useRef} from 'react'
import axios from 'axios'

export default function Product() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    // const reRenderCount = useRef(0)

    const fetchProducts = async () =>{
        try {
    //    const data = await fetch("https://fakestoreapi.com/products") ;
    //    const dataJson = await data.json();
    //    setProducts(dataJson);
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)
        setIsLoading(false)
        }
        catch(e){
            console.log("error", e);
            setError(e);
            setIsLoading(false);
        }
    };

    useEffect( () => {
        fetchProducts();
    }, []); 


    if(isLoading){
        return(
            <div>   
                Products loading...
            </div>
        )
    }
    else if(error){
        return(
            <div>Loading Error</div>
        )
    }
    else if (products.length > 0){
        return(
        <div className = "products">
           <h1 >Available Products</h1>
            {products.map((products, i) => (
                <div className = "product" key = {i}>
                    {products.title}
                    <img className = "product-image" src={products.image} alt = {products.title}></img>
                </div>
            ))
            }
        </div>
    )
            }
    else{
        return(
            <div>
                No products.
            </div>
        )
    }
}