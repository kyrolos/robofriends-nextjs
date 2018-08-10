import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

const Index = (props) => (
  <div>
    <Header />
    <SearchBox />
    <CardList robots={props.robots} />
  </div>
);

Index.getInitialProps = async function() {
  const req = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await req.json();
  
  return {
    robots: data,
  }
};

export default Index;
