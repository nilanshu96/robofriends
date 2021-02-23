import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

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

function App(props) {
    return <MainPage {...props} />
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