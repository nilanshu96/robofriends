import { Component } from 'react';

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log('HEADER');
        return <h1 className="f1">RoboFriends</h1>;
    }
}

export default Header;