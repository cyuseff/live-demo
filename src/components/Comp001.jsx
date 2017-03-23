import React from 'react';

class Comp001 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.start };
    }

    add() {
        console.log('updated from my function');
        const n = this.state.count + 1;
        this.setState({ count: n });
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-default"
                    onClick={() => this.add()}
                >Add</button>
                <button
                    className="btn btn-danger"
                    onClick={() => this.reset()}
                >Reset</button>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
};

export default Comp001;