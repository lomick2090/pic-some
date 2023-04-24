import {useState} from 'react'
import useHover from '../hooks/useHover'

export default function CartItem({url, id, photo, removeFromCart}) {
    //const [isHovered, setIsHovered] = useState(false)

    const [isHovered, ref] = useHover()

    function toggleHover() {
        setIsHovered(prevHover => !prevHover)
    }
    
    return (
        <div className="cart-item">
            <i 
                ref={ref}
                className={!isHovered ? "ri-delete-bin-line" : "ri-delete-bin-fill"}
                onClick={() => removeFromCart(photo)}
            >
            </i>
            <img src={url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}