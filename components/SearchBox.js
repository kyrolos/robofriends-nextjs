const SearchBox = (props) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lighttest-blue'
        type='search'
        placeholder='Search Robots'
        onChange={props.searchChange} />
    </div>
  );
}

export default SearchBox;
