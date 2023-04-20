import { ContextConsumer } from '../Context'
import CartItem from '../components/CartItem'

export default function CheckOut() {
    return (
        <ContextConsumer>
            {({cartItems}) => {
                return (
                    <main className='cart-page'>
                        <h1>Cart Page</h1>
                        {cartItems.map(item => {
                            return (
                                <CartItem 
                                    url={item.url} 
                                    id={item.id} 
                                    key={item.id}
                                />
                            )
                        })}

                    </main>
                )
            }}       
        </ContextConsumer>
    )
}