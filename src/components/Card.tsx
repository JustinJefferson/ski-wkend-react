import React from 'react';
import './Card.css';

const white = { background: 'whitesmoke', color: 'teal' };
const teal = { background: 'teal', color: 'whitesmoke' };
const purple = { background: 'rgb(168, 0, 126)', color: 'yellow' };
const yellow = { background: 'yellow', color: 'rgb(168, 0, 126)' };
const clear = { color: 'whitesmoke' }

export const color = (style: string) => {
    switch (style) {
        case 'white':   return white;
        case 'teal':    return teal;
        case 'purple':  return purple;
        case 'yellow':  return yellow; 
        case 'clear':   return clear;
        default:        return white;
    }
}

const Card = (props: any) => {
    const {children, look} = props
    return (
        <div className="Card" style={color(look)}>
            {children}
        </div>
    )
}

export default Card;