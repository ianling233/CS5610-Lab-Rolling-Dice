import React from 'react';

export default class Roller extends React.Component {
    state = {
        result : "start rolling...",
        pastResult : [],
    }
    constructor(props) {
        super(props); 
    }

    handleRoll = () => {
        const result = Math.floor(Math.random() * 6) + 1;
        let pastResult = this.state.pastResult
        pastResult.push(result)
        this.setState({result:result, pastResult:pastResult});
    }

    handleReset = () => {
        this.setState({result:"start rolling...", pastResult:[]});
    }

    render() {

        const result = this.state.result;
        const pastResult = this.state.pastResult;
        return (
            <div>
                <div>{result}</div>
                <button className="btn btn-outline-secondary" onClick={this.handleRoll} style={{marginRight:"1rem"}}>Roll</button>
                <button className="btn btn-outline-secondary" onClick={this.handleReset}>Reset</button>
                <div>{`Previous results: ${pastResult}`}</div>
            </div>

        );
    }
}