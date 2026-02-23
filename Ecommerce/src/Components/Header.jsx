export default function Header({cartCount}){
    return(
        <div>
            <h2>React Demo App</h2>
            <img 
            src="https://static.vecteezy.com/system/resources/previews/008/088/683/original/shopping-cart-logo-design-modern-shopping-cart-logo-template-free-vector.jpg"
            alt="LOGO"
            width="100"
            />
            <p>Cart Item:{cartCount}</p>
        </div>
    );
}
