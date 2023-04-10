import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCard}) => {
    let message;
    if(cart.length===0){
        message= <p>Please add some products</p>
    }
    else{
        message= <div>
            <h3>Borolok</h3>
            <p>Thanks</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length===1?'blue':'red'}>Order summary:{cart.length}</h2>
            <p className={`bold bordered ${cart.length===3?'yellow':'purple'}`}>something</p>
            {cart.length>2?<span className='orange'>Aro kino</span> : <span> FOKIR</span>}
            {message}
            {
                cart.map(tshirt=> <p key={tshirt._id}>{tshirt.name}
                <button onClick={()=>handleRemoveFromCard(tshirt._id)}>X</button></p>)
            }
            {
                cart.length ===2 && <p>Double Bonanza!!</p>
            }
            {
                cart.length === 3 || <h3>make it 3</h3>
            }
        </div>
    );
};

export default Cart;