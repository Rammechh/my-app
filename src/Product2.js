import useAPI from './Hooks/useAPI'


export default function Product() {
    
    const {products, isLoading, loadError} = useAPI("https://fakestoreapi.com/products")
    
    // // useRef - Value of it can change but Component is not re-rendered
    // const productsRef = useRef([])
    // const reRenderCount = useRef(0)
    // console.log("Re-render count", reRenderCount.current)
    // reRenderCount.current += 1
    
    // //Eg for cleanup function
    // const divRef = useRef(null);

    // useEffect( () => {
    //     console.log(productsRef)
    //     console.log("Products", productsRef)
    //     console.log("ProductsCurrent", productsRef.current)
    //     productsRef.current.push("watch")

    //     // setInterval( () => {
    //     //     productsRef.current.push("lol")
    //     //     console.log(productsRef.current, productsRef.current.length)
    //     // }, 1000);

    //     // Cleanup function
    //     //function addEventListener(divRef, {});
    //     return () => {
    //       console.log("unmounted")  
    //         //function removeEventListener(divRef, {});
    //     };

    // }, []); 
    

    if(isLoading){
        return(
            <div>   
                Products loading...
            </div>
        )
    }
    else if(loadError){
        return(
            <div>Loading Error
                console.log(loadError)
            </div>
            
        )
    }
    else if (products.length > 0) {
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