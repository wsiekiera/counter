import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <React.Fragment>
                <span className="badge bg-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count: cnt} = this.state;
        return cnt === 0 ? 'Zero' : cnt;
    }
}

export default Counter;