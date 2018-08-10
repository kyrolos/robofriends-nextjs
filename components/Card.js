const Card = (props) => {
  return (
    <div className='grow bg-light-green br3 pa3 ma2 dib'>
      <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
