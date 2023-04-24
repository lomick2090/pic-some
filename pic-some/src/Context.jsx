import { createContext, useState, useEffect} from 'react'


const Context = createContext()
const ContextConsumer = Context.Consumer

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isOrdering, setIsOrdering] = useState(false)

    function addItemToCart(item) {
        setCartItems(prevCart =>  [...prevCart, item ])
    }

    function removeFromCart(photo) {
        setCartItems(prevCart => {
            return prevCart.filter(item => {
                return item != photo
            })
        })
    }
    

    function toggleFavorite(id) {
        setPhotos(prevPhotos => {
            return prevPhotos.map(photo => {
                if (id == photo.id) {
                    return {
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                } else {
                    return photo
                }
            })
        })
    }

    function handleOrder() {
        setIsOrdering(true);
        setTimeout(() => {
            setCartItems([]);
            setIsOrdering(false);
        }, 3000)
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <Context.Provider value={{ photos, toggleFavorite, cartItems, addItemToCart, removeFromCart, handleOrder, isOrdering}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, ContextConsumer}