import React, { Component } from 'react';
import Layout from './Layout';
import Scroll from './Scroll';
import CardList from './CardList';
import SearchBox from './SearchBox';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: props.robots,
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <Layout>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </Layout>
    );
  }
}

export default MainPage;
