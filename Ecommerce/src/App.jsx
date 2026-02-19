import { useState } from 'react';

import './App.css'

export default function App() {
const [cart,setcart] = useState([[]]);
const product = [
  {
    id:1,
    name:"Laptop",
    price:50000,
    image:"https://laptopmedia.com/wp-content/uploads/2022/07/3-1.jpg"
  },
  {
    id:2,
    name:"Mobile",
    price:30000,
    image:"https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/T-Mobile/T-Mobile-REVVL-6-5G/China-Blue/T-Mobile-REVVL-6-5G-China-Blue-frontimage.png"
  },
  {
    id:3,
    name:"Charger",
    price:1000,
    image:"https://m.media-amazon.com/images/I/611crhyZZhL._AC_.jpg"
  }
]

function addToCart(product){
  setcart([...cart,product]);
}

function removeFromCart(index){
  const updateCart = cart.filter((_,i)=>i!=index);
  setcart(updateCart);
}

const totalAmount = cart.reduce((total,index)=>(total + index.price,0))

  return (
    <div>
      <Header cartCount={cart.lenght}/>
      <ProductList />
      <Cart />

        
    </div>
  )
}

