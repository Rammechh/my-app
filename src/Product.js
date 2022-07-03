import React,  {useState, useEffect} from 'react'

export default function Product() {
    const [products, stateProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const setProducts = async () =>{
       const data = await fetch("https://fakestoreapi.com/products") ;
       const dataJson = await data.json();
       stateProducts(dataJson);
       setIsLoading(false)
    }

    useEffect( () => {
        setProducts();
    }, [])

    return(
        <div className = "products">
            <h1>Products Available</h1>
            {isLoading && 'Loading...'}
            {products.map((products, i) => (
                <div className = "product" key = {i}>
                    {products.title}
                    <img className = "product-image" src={products.image} alt = {products.title}></img>
                </div>
            ))}
        </div>
    )
}