import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count: cnt} = this.state;
        return cnt === 0 ? 'Zero' : cnt;
    }
}

export default Counter;