import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import './App.css';

import { setSearchField, getRobots } from '../actions';

const mapStateToProps = state => {

    const { robots, error, isPending } = state.fetchRobots;
    const { searchField } = state.searchRobots;
    return {
        searchField, robots, error, isPending
    }
};

const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => {
        dispatch(setSearchField(event.target.value));
    },
    getRobots: () => dispatch(getRobots())
})

class App extends React.Component {

    render() {

        const { robots, error, isPending, searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        if (isPending) {
            return <h1>LOADING</h1>
        } else if (error) {
            return <h1>Failed to fetch the Robots</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }

    componentDidMount() {
        this.props.getRobots();
    }
}

// Using React Hooks
// const App = () => {

//     const [robots, setRobots] = useState([]);
//     const [searchField, setSearchField] = useState('');

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => setRobots(users));
//     }, []);

//     const onSearchChange = (event) => {
//         setSearchField(event.target.value);
//     }

//     const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

//     if (filteredRobots.length === 0) {
//         return <h1>LOADING</h1>
//     } else {
//         return (
//             <div className="tc">
//                 <h1 className="f1">RoboFriends</h1>
//                 <SearchBox searchChange={onSearchChange} />
//                 <Scroll>
//                     <ErrorBoundary>
//                         <CardList robots={filteredRobots} />
//                     </ErrorBoundary>
//                 </Scroll>
//             </div>
//         )
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);