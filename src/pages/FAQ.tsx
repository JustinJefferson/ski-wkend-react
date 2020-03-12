import React from 'react';
// import './FAQ.css';
import { QA, MockQAList } from '../models/QA';
import Card from '../components/Card';

const Display = (props: any) => {
    const item: QA = props.item;
    return (
        <div>
            <div className="Card-top Color-purple">
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
            <Card look='teal'>
                <Display item={list[0]}></Display>
            </Card>
            <Card look='purple'>
                <Display item={list[0]}></Display>
            </Card>
            <Card look='yellow'>
                <Display item={list[0]}></Display>
            </Card>
            {list.map((item: QA) => 
                <Card look='white'>
                    <Display item={item}></Display>
                </Card>
            )}
        </div>
    )
}

export default FAQ;