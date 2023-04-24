import React from 'react'
import propTypes from 'prop-types'
import useHover from '../hooks/useHover'


function Image({className, url, toggleFavorite, id, fav, addItemToCart, removeFromCart, cartItems, photo}) {
    //const [isHovered, setIsHovered] = React.useState(false);
    const [isHovered, ref] = useHover();
    
    const isInCart = cartItems.find(item => (item.id == id) ? true : false)

   // function handleHover() {
   //     setIsHovered(prevHover => {
   //         return !prevHover
   //     })
   // }


    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
            
        >
            {(isHovered || fav) 
                && 
                <i 
                    className={`favorite ${fav ? 'ri-heart-fill' : 'ri-heart-line'}`} 
                    onClick={() => toggleFavorite(id)}
                >
                </i>
            }

            {(isHovered || isInCart) 
                && 
                ((isInCart) ?
                    <i 
                        className="ri-shopping-cart-fill cart"
                        onClick={() => removeFromCart(photo)}
                    >
                    </i>
                    :
                    <i 
                        className="ri-add-circle-line cart"
                        onClick={() => addItemToCart(photo)}
                    >
                    </i>
                )
            }
            <img className="image-grid" src={url}/>
        </div>
    )

}

Image.propTypes = {
    className: propTypes.string,
    url: propTypes.string.isRequired,
    toggleFavorite: propTypes.func.isRequired,
    fav: propTypes.bool,
    id: propTypes.string.isRequired,
}

export default Image