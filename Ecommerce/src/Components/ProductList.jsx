import ProductCart from './ProductCart';
export default function ProductList({products , addToCart}){
    return(
        <div>
            {products.map((product) => (
                <ProductCart
                key={product.id}
                product={product}
                addToCart={addToCart}
                />
            ))}
            
        </div>        
    );
}
