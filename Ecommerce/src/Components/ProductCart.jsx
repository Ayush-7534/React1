export default function ProductCart({product,addToCart}){
    return(
        <div>
            <img className="product-image" src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
            
        </div>        
    );
}