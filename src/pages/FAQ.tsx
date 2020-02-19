import React from 'react';
import './FAQ.css';
import { QA, MockQAList } from '../models/QA';

const Display = (props: any) => {
    const {item} = props;
    return (
        <div className="Card">
            <div className="Card-top">
                <h4 className="Question">Q: {item.question}</h4>
            </div>
            <div className="Card-bottom">
                <p className="Answer">A: {item.answer}</p>
            </div>
        </div>
    )
}

const FAQ = () => {
    const list = MockQAList;
    return(
        <div>
            {list.map((item: QA) => 
                <Display item={item}></Display>
            )}
        </div>
    )
}

export default FAQ;