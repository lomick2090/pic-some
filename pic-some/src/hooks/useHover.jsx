import { useState, useEffect, useRef } from 'react';

export default function useHover() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null)

    function enter() {
        setIsHovered(true);
    }

    function leave() {
        setIsHovered(false);
    }

    useEffect(() => {
        const myRef = ref.current
        myRef.addEventListener('mouseenter', enter);
        myRef.addEventListener('mouseleave', leave);

        return () => {
            myRef.removeEventListener('mouseenter', enter);
            myRef.removeEventListener('mouseleave', leave);
        }

    }, [])

    return [isHovered, ref]
}