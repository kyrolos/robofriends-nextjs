import Link from 'next/link';

const Card = (props) => {
  return (
    <div className='grow bg-light-green br3 pa3 ma2 dib'>
      <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
      <div>
        <Link prefetch href={`/robot?id=${props.id}`} as={`/robot/${props.id}`}>
          <a>{props.name}</a>
        </Link>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
