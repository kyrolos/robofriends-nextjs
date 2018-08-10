import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
  return (
    
  )
}

Robots.getInitialProps = async function() {
  const req = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await req.json();
  return {
    robots: data
  }
}

export default Robots;
