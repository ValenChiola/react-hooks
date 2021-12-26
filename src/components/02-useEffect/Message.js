import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        xPos: 0,
        yPos: 0
    })

    const { xPos, yPos } = coords

    useEffect(() => {

        const mouseMove = (e) => {
            const { x, y } = e
            setCoords({
                xPos: x,
                yPos: y
            })
        }

        window.addEventListener('mousemove', mouseMove)

        return () => window.removeEventListener('mousemove', mouseMove)

    }, [])

    return (
        <>
            <h3>Holis</h3>
            <p>
                x: {xPos}, y: {yPos}
            </p>
        </>
    )
}
