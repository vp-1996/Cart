import React, { useEffect, useRef } from 'react'

const IDvsREF = ({ color }) => {

    const demoRef = useRef(null);

    useEffect(() => {
        // document.getElementById('demo').style.color = color;
        demoRef.current.style.color = color;
    }, [])

    return (
        <div id="demo" ref={demoRef}>
            content
        </div>
    )
}

export default IDvsREF