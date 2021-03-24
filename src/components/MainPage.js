import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import Header from "./Header";
import ErrorBoundary from "./ErrorBoundary";

import "./MainPage.css";

class MainPage extends React.Component {
  render() {
    const {
      robots,error,
      isPending,
searchField,
      onSearchChange,
    } = this.props;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if (isPending) {
      return <h1>LOADING</h1>;
    } else if (error) {
      return <h1>Failed to fetch the Robots</h1>;
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.getRobots();
  }
}

export default MainPage;
