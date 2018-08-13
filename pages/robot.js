import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Robot = (props) => (
  <Layout>
    <div className='grow bg-light-green br3 pa3 ma2 dib'>
      <img alt='robots' src={`https://robohash.org/${props.data.id}?size=200x200`} />
      <div>
        <h2>{props.data.name}</h2>
        <p>{props.data.email}</p>
      </div>
    </div>
    <Link prefetch href='/'>
      <button>Back</button>
    </Link>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%); /* w3c */
      }
    `}</style>
  </Layout>
);

Robot.getInitialProps = async function({ query }) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
  const data = await req.json();
  console.log(data);

  return { data };
}

export default Robot;
