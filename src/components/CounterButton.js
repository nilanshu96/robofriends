import { Component } from 'react';

class CounterButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        } else {
            return false;
        }
    }

    onCountUpdate = () => {
        this.setState(state => {
            return { count: state.count + 1 }
        })
    }

    render() {
        return (
            <button color={this.props.color} onClick={this.onCountUpdate}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;