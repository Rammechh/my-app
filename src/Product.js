import React, {useState, useEffect} from 'react'

export default function Product() {
    const [products, setProducts] = useState([])
    const[IsLoading, setIsLoading] = useState(true)

    const fetchProducts = async () => {
        const res = await fetch ("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setIsLoading(false)
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    // function productSelected() {
    //     document.getElementsByName("{products}").Att
    // }

    return(
        <div className = "products">
            <h1>All products</h1>
            {IsLoading && "Loading products..."}
                {products.map((products) =>
                <div className = "product" >
                    {products.title}
                    <img name= {products} className ="product-image" onClick={"productSelected"} src= {products.image} alt = {products.title} />
                </div>
                )}
        </div>
    );

}

