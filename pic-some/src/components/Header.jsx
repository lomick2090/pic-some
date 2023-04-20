import React from 'react'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../Context'

export default function Header() {
    return (
            <ContextConsumer>
                {({cartItems}) => {
                    return (
                        <div className="header">
                            <Link to="/">
                                <h2>Pic Som</h2>
                            </Link>
                            <Link to='check-out'>
                                <i className={(cartItems.length > 0) ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"}></i>
                            </Link>
                        </div>
                    )
                }}
            </ContextConsumer>
    )
}