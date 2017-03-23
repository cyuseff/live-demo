import React from 'react';

class Comp001 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.start };
    }

    add() {
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
                >
                    {this.props.addLabel}
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => this.reset()}
                >Reset</button>
                <p>Count: <span className="count-span">{this.state.count}</span></p>
            </div>
        );
    }
};

export default Comp001;