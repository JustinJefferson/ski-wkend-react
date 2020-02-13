import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 className="Title">Welcome!</h1>
            <div className="Panel">
                <div className="Frame">
                    <p>
                        This is a panel section. It displays text on a board that crosses the entire web page.
                        A good use for a section like this is to get peoples attention on a home page. It 
                        should be exciting and riveting to look at.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;