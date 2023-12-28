import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        return (
            <div id='body'>
                <h1 id='result'>Result</h1>
                <div id="resultContainer">
                    <h2 id='resinfo'>You need more practice!</h2>
                    <h1 id='scorePercentage'>Your score is 20%</h1>
                    <div id='resParent'>
                        <div className='resultFlex'>
                            <p>Total number of questions</p>
                            <p>15</p>
                        </div>
                        <div className='resultFlex'>
                            <p>Number of attempted questions</p>
                            <p>9</p>
                        </div>
                        <div className='resultFlex'>
                            <p>Number of corrected answers</p>
                            <p>3</p>
                        </div>
                        <div className='resultFlex'>
                            <p>Number of wrong answers</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div id="button">
                    <button id='playagainBtn'>Play Again</button>
                    <button id='backBtn'>Back to home</button>
                </div>
            </div>
        )
    }
}
