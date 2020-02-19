export class QA {
    question: string = '';
    answer: string = '';

    constructor(
        question: string,
        answer: string
    ) {
        this.question = question;
        this.answer = answer;
    }
}

export const MockQAList: QA[] = [
    new QA('Is this a question?', 'Yes, it is.'),
    new QA('How do I go about making new question?', 'Right now that\'s not possible but that feature should be added later.'),
    new QA('What?', 'Uh huh.'),
    new QA('Is this scaleable?', 'Yes, there can be as many questions as you like')
]

