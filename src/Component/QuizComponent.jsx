import React, { Component } from 'react'
import questionsData from '../questions.json';


export default class QuizComponent extends Component {

    state = {
        currentQuestionIndex: 0,
        questions: questionsData,
    };

    handleNext = () => {
        this.setState(prevState => ({
            currentQuestionIndex: Math.min(
                prevState.questions.length - 1,
                prevState.currentQuestionIndex + 1
            ),
        }));
    };

    handlePrevious = () => {
        this.setState(prevState => ({
            currentQuestionIndex: Math.max(0, prevState.currentQuestionIndex - 1),
        }));
    };

    handleQuit = () => {
        const confirmQuit = window.confirm('Are you sure you want to quit?');
        if (confirmQuit) {
            this.setState({ currentQuestionIndex: 0 });
        }
    };

    render() {
        const { currentQuestionIndex, questions } = this.state;
        const currentQuestion = questions[currentQuestionIndex];
        return (
            <div id='body'>
                <div id='subContainer'>
                    <h1 id='quesHead'>Question</h1>
                    <p id='noQues'>{`${currentQuestionIndex + 1} of ${questions.length}`}</p>
                    <p id='ques'>{currentQuestion.question}</p>
                    <div id='choiceBox'>
                        <div className='flexContent' id='contentOne'>
                            <p className='choice'>{currentQuestion.optionA}</p>
                            <p className='choice'>{currentQuestion.optionB}</p>
                        </div>
                        <div className='flexContent' id='contentTwo'>
                            <p className='choice'>{currentQuestion.optionC}</p>
                            <p className='choice'>{currentQuestion.optionD}</p>
                        </div>
                        <div id='options'>
                            <p className='opt' id='preview' onClick={this.handlePrevious}>Preview</p>
                            <p className='opt' id='next' onClick={this.handleNext}>Next</p>
                            <p className='opt' id='quit' onClick={this.handleQuit}>Quit</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
