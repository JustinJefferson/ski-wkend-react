import React from 'react';
import './Panel.css';
import { color } from './Card';

const Panel = (props: any) => {
    const {children, look} = props;
    return (
        <div className='Panel' style={color(look)}>
            {children}
        </div>
    )
}

export default Panel;