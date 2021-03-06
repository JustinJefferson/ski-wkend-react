import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

const Navigator = (props: any) => {
    const {links} = props;
    return (
        <nav>
            <ul className="Nav">
                {links.map((name: string) =>
                    <li className="Item">
                        <Link className="Link" to={"/" + name.toLocaleLowerCase()}>{name}</Link>
                    </li>
                )}
                <li className="Logo">
                    <Link className="Link" to="/">Maryland Fur Ski Weekend</Link>
                </li>
            </ul>
        </nav>
    ) 
}

export default Navigator;