import fetch from 'isomorphic-unfetch';
import MainPage from '../components/MainPage';

const Index = (props) => (
  <div>
    <MainPage robots={props.robots} />
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%); /* w3c */
      }
    `}</style>
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
