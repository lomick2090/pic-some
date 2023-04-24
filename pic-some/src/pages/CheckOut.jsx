import { ContextConsumer } from '../Context'
import CartItem from '../components/CartItem'

export default function CheckOut() {
    return (
        <ContextConsumer>
            {({cartItems, removeFromCart, isOrdering, handleOrder}) => {
                return (
                    <main className='cart-page'>
                        <h1>Cart Page</h1>
                        {cartItems.map(item => {
                            return (
                                <CartItem 
                                    photo={item}
                                    url={item.url} 
                                    id={item.id} 
                                    key={item.id}
                                    removeFromCart={removeFromCart}
                                />
                            )
                        })}
                        {(cartItems.length > 0) ?
                            <div>
                                <p className="total-cost">Total: ${cartItems.length * 5.99}</p>
                                <div className="order-button" onClick={handleOrder}>
                                    <button>
                                        {(isOrdering) ? 'Ordering ...' : 'Place Order'}
                                    </button>
                                </div>
                            </div> 
                            :
                            <h3>You have no items in your cart</h3>
                        }
                    </main>
                )
            }}       
        </ContextConsumer>
    )
}