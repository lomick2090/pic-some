

export default function CartItem({url, id}) {
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}