import { ContextConsumer } from '../Context'
import Image from '../components/Image'
import getClass from '../utils/getClass'

export default function Pics() {
    return(
        <main className={'photos'}>
            <ContextConsumer>
                {({photos, toggleFavorite, addItemToCart, removeFromCart, cartItems}) => {
                    return (photos.map((photo, i) => {
                        return (
                            <Image
                                photo={photo}
                                key={photo.id}
                                id={photo.id}
                                url={photo.url}
                                fav={photo.isFavorite}
                                className={getClass(i)}
                                toggleFavorite={toggleFavorite}
                                addItemToCart={addItemToCart}
                                cartItems={cartItems}
                                removeFromCart={removeFromCart}
                            />
                        )
                    }))
                }}
            </ContextConsumer>
        </main>
    )
}