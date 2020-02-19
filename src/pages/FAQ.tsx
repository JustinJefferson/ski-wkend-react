import React from 'react';
import './FAQ.css';
import { QA, MockQAList } from '../models/QA';

const Display = (props: any) => {
    const {item} = props;
    return (
        <div className="Card">
            <div className="Card-top">
                <h3 className="Question">Q: {item.question}</h3>
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
            <h1>Frequently Asked Questions</h1>
            {list.map((item: QA) => 
                <Display item={item}></Display>
            )}
        </div>
    )
}

export default FAQ;