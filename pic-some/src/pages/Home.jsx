import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <h1>Welcome to Pic Some </h1>
            <Link to='./pics' style={{color:'black'}}>Click here to go to pick your pics</Link> 
        </div>
    )
}